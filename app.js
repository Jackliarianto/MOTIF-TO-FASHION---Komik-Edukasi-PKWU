// =========================================================================
// LOGIKA INTERAKTIF WEBSITE KOMIK DIGITAL MOTIF TO MOTIF (11 HALAMAN)
// =========================================================================

let currentPageIndex = 0;
let selectedFavoriteMotif = "Kawung (Yogyakarta)";
let observationChecklist = {
  Bentuk: true,
  Warna: true,
  Garis: false,
  Pola: false
};
let currentQuizIdx = 0;
let quizScore = 0;
let quizAnswered = false;
let uploadedWorkDataUrl = "";

document.addEventListener("DOMContentLoaded", () => {
  renderPageDots();
  renderCurrentPage();
  bindGlobalEvents();
  initFashionStudio();
  ensureRangkumanModalInDOM();
});

function bindGlobalEvents() {
  document.getElementById("btnPrev").addEventListener("click", () => {
    if (currentPageIndex > 1) goToPage(currentPageIndex - 1);
  });

  document.getElementById("btnNext").addEventListener("click", () => {
    if (currentPageIndex < COMIC_PAGES.length - 1) goToPage(currentPageIndex + 1);
  });

  // Membuat badge/teks judul "Komik Edukasi Prakarya & Kewirausahaan Kelas X" di atas dapat diklik untuk kembali ke sampul (Hal 0)
  const badgeMapel = document.querySelector(".badge-mapel");
  if (badgeMapel) {
    badgeMapel.style.cursor = "pointer";
    badgeMapel.title = "Klik untuk kembali ke Beranda / Sampul";
    badgeMapel.addEventListener("click", () => {
      goToPage(0);
    });
  }

  document.addEventListener("keydown", (e) => {
    if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) return;
    if (e.key === "ArrowRight" && currentPageIndex < COMIC_PAGES.length - 1) {
      goToPage(currentPageIndex + 1);
    } else if (e.key === "ArrowLeft" && currentPageIndex > 1) {
      goToPage(currentPageIndex - 1);
    }
  });

  document.getElementById("btnDaftarHalaman").addEventListener("click", () => {
    renderDaftarHalamanModal();
    openModal("modalDaftarHalaman");
  });

  document.getElementById("btnBacakanDialog").addEventListener("click", speakCurrentPageDialogues);

  document.getElementById("btnStudioSketsa").addEventListener("click", () => {
    openModal("modalStudioSketsa");
    drawFashionCanvas();
  });

  document.getElementById("btnFullscreen").addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });

  document.querySelectorAll(".modal-close").forEach((btn) => {
    btn.addEventListener("click", () => {
      closeModal(btn.getAttribute("data-close"));
    });
  });

  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) backdrop.classList.add("hidden");
    });
  });
}

function goToPage(index) {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  currentPageIndex = index;
  renderCurrentPage();
  updateNavigationState();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderPageDots() {
  // Fungsi ini dibiarkan kosong karena navigasi halaman bawah kini digantikan oleh renderFooterFeatureScrollbar() di footer
}

function updateNavigationState() {
  const isCover = currentPageIndex === 0;

  const heroBanner = document.querySelector(".hero-banner");
  const bottomNav = document.querySelector(".bottom-nav");
  const siteFooter = document.querySelector(".site-footer");
  const pageContainer = document.getElementById("pageContainer");
  
  if (heroBanner) heroBanner.style.display = isCover ? "none" : "block";
  if (bottomNav) bottomNav.style.display = isCover ? "none" : "flex";
  if (siteFooter) siteFooter.style.display = isCover ? "block" : "block"; // Footer diaktifkan untuk menampilkan menu fitur geser

  if (pageContainer) {
    pageContainer.style.padding = isCover ? "0" : "";
    pageContainer.style.maxWidth = isCover ? "100%" : "";
  }

  if (isCover) {
    if (siteFooter) siteFooter.style.display = "none";
    return;
  }

  const page = COMIC_PAGES[currentPageIndex];
  const totalContentPages = 10; 
  const currentNum = currentPageIndex;

  const labelEl = document.getElementById("currentPageLabel");
  if (labelEl) labelEl.textContent = currentNum;
  
  const btnDaftarHalaman = document.getElementById("btnDaftarHalaman");
  if (btnDaftarHalaman) {
    btnDaftarHalaman.title = `Daftar Halaman (${currentNum}/${totalContentPages})`;
  }

  document.getElementById("btnPrev").disabled = currentPageIndex <= 1;
  document.getElementById("btnNext").disabled = currentPageIndex >= COMIC_PAGES.length - 1;

  const percent = (currentNum / totalContentPages) * 100;
  
  const progressBarEl = document.getElementById("progressBar");
  if (progressBarEl) progressBarEl.style.width = `${percent}%`;
  
  const progressTextEl = document.getElementById("progressText");
  if (progressTextEl) progressTextEl.textContent = `Halaman ${currentNum} dari ${totalContentPages} — ${page.shortTitle}`;

  // Render menu fitur geser di bagian footer bawah
  renderFooterFeatureScrollbar();
}

function renderFooterFeatureScrollbar() {
  const siteFooter = document.querySelector(".site-footer");
  if (!siteFooter) return;

  siteFooter.style.position = "sticky";
  siteFooter.style.bottom = "0";
  siteFooter.style.zIndex = "999";
  siteFooter.style.background = "linear-gradient(135deg, #23140c 0%, #3d2314 100%)";
  siteFooter.style.borderTop = "3px solid #ffd53d";
  siteFooter.style.boxShadow = "0 -4px 12px rgba(0,0,0,0.3)";
  siteFooter.style.padding = "6px 0";

  if (!document.getElementById("footerRadialStyle")) {
    const styleEl = document.createElement("style");
    styleEl.id = "footerRadialStyle";
    styleEl.textContent = `
      @keyframes radialPopIn {
        0% { transform: scale(0); opacity: 0; }
        70% { transform: scale(1.1); opacity: 1; }
        100% { transform: scale(1); opacity: 1; }
      }
      .radial-menu-item {
        position: absolute;
        transition: transform 0.2s ease, opacity 0.2s ease;
        animation: radialPopIn 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
      }
    `;
    document.head.appendChild(styleEl);
  }

  // Buat atau perbarui elemen pop-up langsung di body agar posisinya akurat di atas tombol plus
  let popup = document.getElementById("footerFeaturePopup");
  if (!popup) {
    const popupHTML = `
      <div id="footerFeaturePopup" style="
        position: fixed;
        display: none;
        width: 160px;
        height: 160px;
        pointer-events: none;
        z-index: 99999;
      ">
        <!-- Tombol 1: Daftar Halaman (Atas) -->
        <div class="radial-menu-item" style="top: -65px; left: 12px; pointer-events: auto;">
          <button type="button" onclick="renderDaftarHalamanModal(); openModal('modalDaftarHalaman'); closeFooterFeaturePopup();" title="Daftar Halaman" style="
            background: #ffffff; border: 2.5px solid #23140c; border-radius: 50%; width: 46px; height: 46px; cursor: pointer; box-shadow: 0 4px 0 #23140c; display: flex; align-items: center; justify-content: center; font-size: 1.15rem; transition: transform 0.15s;
          " onmouseover="this.style.transform='scale(1.12)'" onmouseout="this.style.transform='scale(1)'">
            📖
          </button>
        </div>

        <!-- Tombol 2: Putar Suara (Kiri) -->
        <div class="radial-menu-item" style="top: -15px; left: -38px; pointer-events: auto;">
          <button type="button" onclick="speakCurrentPageDialogues(); closeFooterFeaturePopup();" title="Putar Suara" style="
            background: #ffd53d; border: 2.5px solid #23140c; border-radius: 50%; width: 46px; height: 46px; cursor: pointer; box-shadow: 0 4px 0 #23140c; display: flex; align-items: center; justify-content: center; font-size: 1.15rem; transition: transform 0.15s;
          " onmouseover="this.style.transform='scale(1.12)'" onmouseout="this.style.transform='scale(1)'">
            🔊
          </button>
        </div>

        <!-- Tombol 3: Studio Sketsa (Kanan) -->
        <div class="radial-menu-item" style="top: -15px; left: 62px; pointer-events: auto;">
          <button type="button" onclick="openModal('modalStudioSketsa'); drawFashionCanvas(); closeFooterFeaturePopup();" title="Studio Sketsa Fesyen" style="
            background: #5b3a82; border: 2.5px solid #23140c; border-radius: 50%; width: 46px; height: 46px; cursor: pointer; box-shadow: 0 4px 0 #23140c; display: flex; align-items: center; justify-content: center; font-size: 1.15rem; transition: transform 0.15s;
          " onmouseover="this.style.transform='scale(1.12)'" onmouseout="this.style.transform='scale(1)'">
            🎨
          </button>
        </div>

        <!-- Tombol 4: Fullscreen (Atas Serong) -->
        <div class="radial-menu-item" style="top: -65px; left: 62px; pointer-events: auto;">
          <button type="button" onclick="if(!document.fullscreenElement){document.documentElement.requestFullscreen().catch(()=>{});}else{document.exitFullscreen().catch(()=>{});} closeFooterFeaturePopup();" title="Layar Penuh (Fullscreen)" style="
            background: #ffffff; border: 2.5px solid #23140c; border-radius: 50%; width: 46px; height: 46px; cursor: pointer; box-shadow: 0 4px 0 #23140c; display: flex; align-items: center; justify-content: center; font-size: 1.15rem; transition: transform 0.15s;
          " onmouseover="this.style.transform='scale(1.12)'" onmouseout="this.style.transform='scale(1)'">
            ⛶
          </button>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", popupHTML);
    popup = document.getElementById("footerFeaturePopup");
  }

  const isPopupOpen = popup.style.display === "block";

  const plusActionBtn = `
    <button type="button" id="footerPlusBtn" onclick="toggleFooterFeaturePopup()" title="Menu Fitur Utama" style="
      flex: 0 0 auto;
      background: ${isPopupOpen ? 'linear-gradient(135deg, #ff5252 0%, #d32f2f 100%)' : 'linear-gradient(135deg, #ffd53d 0%, #ffca28 100%)'};
      color: ${isPopupOpen ? '#ffffff' : '#142347'};
      border: 2.5px solid #23140c;
      border-radius: 50%;
      width: 42px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      font-weight: 900;
      cursor: pointer;
      box-shadow: 0 3px 0 #23140c;
      transition: all 0.2s ease;
      flex-shrink: 0;
      margin-right: 6px;
    " onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
      ${isPopupOpen ? '×' : '+'}
    </button>
  `;

  const featuresList = [
    { page: 1, icon: "📖", label: "Dialog" },
    { page: 2, icon: "🔍", label: "Motif" },
    { page: 3, icon: "✨", label: "Observasi" },
    { page: 4, icon: "👗", label: "Desain" },
    { page: 5, icon: "✏️", label: "Sketsa" },
    { page: 6, icon: "💰", label: "HPP" },
    { page: 7, icon: "🎬", label: "Produksi" },
    { page: 8, icon: "⭐", label: "Kuis" },
    { page: 9, icon: "🏪", label: "Expo" },
    { page: 10, icon: "📝", label: "Tugas" }
  ];

  let pageButtonsHTML = "";
  featuresList.forEach((item) => {
    const isActive = currentPageIndex === item.page;
    pageButtonsHTML += `
      <button onclick="goToPage(${item.page}); closeFooterFeaturePopup();" id="footer-btn-${item.page}" title="Hal ${item.page}: ${item.label}" style="
        flex: 0 0 auto;
        display: inline-flex;
        align-items: center;
        gap: 5px;
        background: ${isActive ? '#ffd53d' : '#fff8eb'};
        color: ${isActive ? '#142347' : '#23140c'};
        border: 2px solid #23140c;
        border-radius: 14px;
        padding: 5px 12px;
        font-family: 'Fredoka', sans-serif;
        font-size: 0.8rem;
        font-weight: 700;
        cursor: pointer;
        box-shadow: ${isActive ? '0 2px 0 #23140c' : '0 3px 0 #23140c'};
        transform: ${isActive ? 'translateY(1px)' : 'none'};
        transition: all 0.15s ease;
      ">
        <span style="font-size: 0.9rem;">${item.icon}</span>
        <span>Halaman ${item.page}</span>
      </button>
    `;
  });

  siteFooter.innerHTML = `
    <div style="width: 100%; max-width: 920px; margin: 0 auto; padding: 2px 10px; box-sizing: border-box; display: flex; align-items: center;">
      ${plusActionBtn}
      <div id="footerScrollContainer" style="
        display: flex; 
        gap: 6px; 
        overflow-x: auto; 
        white-space: nowrap; 
        padding: 4px 2px; 
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        -ms-overflow-style: none;
        justify-content: flex-start;
        align-items: center;
        flex: 1;
      ">
        ${pageButtonsHTML}
      </div>
    </div>
  `;

  // Update posisi pop-up agar tepat mengikuti koordinat tombol plus di layar
  updatePopupPosition();

  setTimeout(() => {
    const activeBtn = document.getElementById(`footer-btn-${currentPageIndex}`);
    const scrollContainer = document.getElementById("footerScrollContainer");
    if (activeBtn && scrollContainer) {
      const scrollLeftPos = activeBtn.offsetLeft - (scrollContainer.offsetWidth / 2) + (activeBtn.offsetWidth / 2);
      scrollContainer.scrollTo({ left: scrollLeftPos, behavior: 'smooth' });
    }
  }, 60);
}

function updatePopupPosition() {
  const plusBtn = document.getElementById("footerPlusBtn");
  const popup = document.getElementById("footerFeaturePopup");
  if (!plusBtn || !popup) return;

  const rect = plusBtn.getBoundingClientRect();
  // Posisikan tepat di atas tombol plus
  popup.style.left = `${rect.left + rect.width / 2 - 40}px`;
  popup.style.bottom = `${window.innerHeight - rect.top + 6}px`;
}

function toggleFooterFeaturePopup() {
  const popup = document.getElementById("footerFeaturePopup");
  if (!popup) return;
  
  if (popup.style.display === "block") {
    popup.style.display = "none";
  } else {
    updatePopupPosition();
    popup.style.display = "block";
  }
  // Render ulang untuk mengubah ikon tombol plus menjadi silang (×)
  const siteFooter = document.querySelector(".site-footer");
  if (siteFooter) {
    // Panggil bagian render tombol plus saja atau render ulang state footer
    renderFooterFeatureScrollbar();
  }
}

function closeFooterFeaturePopup() {
  const popup = document.getElementById("footerFeaturePopup");
  if (popup) popup.style.display = "none";
  renderFooterFeatureScrollbar();
}

// Tutup pop-up saat layar digeser atau di-resize
window.addEventListener("resize", closeFooterFeaturePopup);
window.addEventListener("scroll", closeFooterFeaturePopup, { passive: true });

function renderBerandaHTML(page) {
  const charKeys = ["raka", "dimas", "guru", "nabila"];
  const charCardsHTML = charKeys
    .map((key) => {
      const c = CHARACTERS[key];
      return `
        <div style="position: relative; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 6px; background: rgba(255, 255, 255, 0.92); padding: 10px 14px; border-radius: 16px; border: 2px solid #23140c; box-shadow: 0 3px 0 #23140c; min-width: 78px;">
          <button type="button" onclick="showCharacterProfile('${key}')" title="Lihat Profil & Sifat" style="position: absolute; top: -8px; right: -8px; width: 24px; height: 24px; background: #ffd53d; color: #23140c; border: 2px solid #23140c; border-radius: 50%; font-size: 0.75rem; font-weight: 800; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 2px 0 #23140c; z-index: 2;">
            ℹ
          </button>
          
          <div style="width: 56px; height: 56px; background: #fff8eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2.5px solid #23140c; overflow: hidden;">
            ${getCharacterAvatarSVG(key)}
          </div>
          <span style="font-family: 'Fredoka', sans-serif; font-size: 0.88rem; font-weight: 700; color: #23140c; background: #ffd53d; padding: 2px 10px; border-radius: 10px; border: 1.5px solid #23140c;">
            ${c.name.split(" ")[0]}
          </span>
        </div>`;
    })
    .join("");

  return `
    <div style="
      width: 100%;
      min-height: calc(100vh - 48px);
      background: 
        radial-gradient(circle at 12% 18%, rgba(255, 213, 61, 0.22) 0%, transparent 32%),
        radial-gradient(circle at 88% 82%, rgba(143, 41, 28, 0.22) 0%, transparent 35%),
        repeating-radial-gradient(circle at 0 0, transparent 0, #142347 28px),
        repeating-linear-gradient(45deg, #1b3163 0px, #1b3163 14px, #142347 14px, #142347 28px);
      border-radius: 0 0 20px 20px;
      padding: clamp(18px, 4vw, 36px);
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      font-family: 'Nunito', sans-serif;
      position: relative;
      overflow: hidden;
    ">
      
      <!-- Ornamen Geometris Wastra Nusantara -->
      <svg style="position: absolute; top: -20px; right: -20px; width: 220px; height: 220px; opacity: 0.14; pointer-events: none;" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="#ffd53d" stroke-width="3" stroke-dasharray="6 4"/>
        <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="#ffd53d" stroke-width="2.5"/>
        <circle cx="50" cy="50" r="18" fill="#ffd53d"/>
      </svg>
      <svg style="position: absolute; bottom: -25px; left: -25px; width: 240px; height: 240px; opacity: 0.12; pointer-events: none;" viewBox="0 0 100 100">
        <path d="M10,70 Q30,35 50,55 T90,45" fill="none" stroke="#ffd53d" stroke-width="4" stroke-linecap="round"/>
        <path d="M10,85 Q30,50 50,70 T90,60" fill="none" stroke="#ffd53d" stroke-width="3" stroke-linecap="round"/>
      </svg>

     <!-- Baris Atas: Identitas Sekolah & Badge PKWU Seimbang & Sejajar -->
      <div style="width: 100%; max-width: 820px; display: flex; justify-content: space-between; align-items: stretch; gap: 10px; z-index: 2;">
        
        <!-- Kotak Kiri: SMAN 9 Luwu Timur -->
        <div style="flex: 1; display: flex; align-items: center; gap: 10px; background: rgba(255, 248, 235, 0.96); padding: 8px 14px; border-radius: 16px; border: 2.5px solid #23140c; box-shadow: 0 3px 0 #23140c; text-align: left; box-sizing: border-box;">
          <div style="width: 38px; height: 38px; background: #ffd53d; border: 2px solid #23140c; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0;">
            🏫
          </div>
          <div>
            <div style="font-family: 'Fredoka', sans-serif; font-size: 0.9rem; font-weight: 700; color: #142347; line-height: 1.15;">
              SMA NEGERI 9
            </div>
            <div style="font-size: 0.74rem; font-weight: 800; color: #8f291c; letter-spacing: 0.4px;">
              LUWU TIMUR
            </div>
          </div>
        </div>

        <!-- Kotak Kanan: PKWU Kelas X SMA (Disamakan Bentuk & Tingginya) -->
        <div style="flex: 1; display: flex; align-items: center; justify-content: center; background: #ffd53d; color: #23140c; border: 2.5px solid #23140c; padding: 8px 14px; border-radius: 16px; font-size: 0.85rem; font-weight: 800; box-shadow: 0 3px 0 #23140c; text-align: center; box-sizing: border-box;">
          ✨ PKWU • KELAS X SMA
        </div>

      </div>

      <!-- Konten Utama Sampul -->
      <div style="width: 100%; max-width: 820px; margin: auto 0; padding: 18px 0; z-index: 2;">
        <h1 style="font-family: 'Fredoka', sans-serif; font-size: clamp(2.1rem, 5vw, 3.2rem); color: #ffd53d; margin: 0 0 6px 0; text-shadow: 3px 3px 0 #23140c; letter-spacing: 1px; line-height: 1.1;">
          MOTIF <span style="color: #ffffff;">TO FASHION</span>
        </h1>
        <p style="font-size: clamp(0.95rem, 2.2vw, 1.2rem); color: #fff8eb; font-weight: 700; margin: 0 0 20px 0;">
          “Jelajah Kreativitas Ragam Hias Nusantara”
        </p>

        <div style="background: linear-gradient(135deg, #ffd53d 0%, #ffca28 100%); border: 3px solid #23140c; border-radius: 18px; padding: 14px 20px; margin-bottom: 20px; box-shadow: 0 5px 0 #23140c;">
          <h3 style="font-family: 'Fredoka', sans-serif; font-size: clamp(1rem, 2.5vw, 1.3rem); color: #142347; margin: 0 0 4px 0; text-transform: uppercase;">
            KREASI WASTRA &amp; FESYEN NUSANTARA
          </h3>
          <p style="font-size: clamp(0.82rem, 2vw, 0.96rem); color: #23140c; font-weight: 700; margin: 0;">
            Media Pembelajaran Komik Digital Interaktif • Ragam Hias &amp; Kewirausahaan
          </p>
        </div>

        <div style="background: rgba(255, 248, 235, 0.96); border: 3px solid #23140c; border-radius: 18px; padding: 16px; box-shadow: 0 5px 0 #23140c;">
          <div style="font-size: 0.92rem; font-weight: 800; color: #142347; margin-bottom: 12px;">
            👋 Tokoh Pemandu Petualangan <span style="color: #8f291c; font-size: 0.82rem;"></span>
          </div>
          <div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 14px;">
            ${charCardsHTML}
          </div>
        </div>
      </div>

      <!-- Tombol Aksi Mulai Belajar -->
      <div style="width: 100%; max-width: 820px; z-index: 2;">
        <button id="btnMulaiJelajah" onclick="goToPage(1)" style="width: 100%; background: linear-gradient(180deg, #1aa35a 0%, #148348 100%); color: #ffffff; border: 3px solid #23140c; border-radius: 16px; padding: 16px; font-family: 'Fredoka', sans-serif; font-size: 1.35rem; font-weight: 700; cursor: pointer; box-shadow: 0 5px 0 #23140c; transition: transform 0.1s, box-shadow 0.1s; display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 12px;">
          MULAI BELAJAR <span>▶</span>
        </button>

        <div style="display: flex; gap: 12px; justify-content: center; margin-bottom: 12px;">
          <button type="button" onclick="openPetunjukModal()" style="flex: 1; background: #fff8eb; color: #23140c; border: 2.5px solid #23140c; border-radius: 12px; padding: 12px; font-weight: 800; font-size: 0.95rem; cursor: pointer; box-shadow: 0 3px 0 #23140c;">
            ❓ Petunjuk Belajar
          </button>
         <button type="button" onclick="handleExitApp()" style="flex: 1; background: #ffebee; color: #b71c1c; border: 2.5px solid #23140c; border-radius: 12px; padding: 12px; font-weight: 800; font-size: 0.95rem; cursor: pointer; box-shadow: 0 3px 0 #23140c;">
  ✖ Keluar
</button>
        </div>

        <p style="font-size: 0.82rem; color: #ffd53d; margin: 0; font-weight: 700;">
          Guru Pengampu: <strong>Ibu Aldriana Lobo</strong> • Siswa Kelas X: <strong>Raka, Nabila, &amp; Dimas</strong>
        </p>
      </div>

    </div>
  `;
}

function showCharacterProfile(charKey) {
  const c = CHARACTERS[charKey];
  if (!c) return;

  let modal = document.getElementById("charProfileModalOverlay");
  if (!modal) {
    const modalHTML = `
      <div id="charProfileModalOverlay" class="petunjuk-modal-overlay" style="display: none;" onclick="if(event.target === this) closeCharProfileModal()">
        <div class="petunjuk-modal-content" style="max-width: 420px; text-align: center;">
          <div class="petunjuk-modal-header">
            <div class="petunjuk-modal-title-wrap">
              <span class="petunjuk-icon-clause">👤</span>
              <h3 id="charModalTitle">Profil Tokoh</h3>
            </div>
            <button type="button" class="petunjuk-close-btn" onclick="closeCharProfileModal()">×</button>
          </div>
          <div class="petunjuk-modal-body" style="text-align: left;">
            <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 14px; background: #fff8eb; border: 2px solid #23140c; border-radius: 14px; padding: 12px;">
              <div id="charModalAvatar" style="width: 60px; height: 60px; background: #fff; border-radius: 50%; border: 2px solid #23140c; display: flex; align-items: center; justify-content: center; overflow: hidden; flex-shrink: 0;"></div>
              <div>
                <h4 id="charModalName" style="font-family: 'Fredoka', sans-serif; font-size: 1.1rem; color: #142347; margin: 0 0 2px 0;"></h4>
                <p id="charModalAgeRole" style="font-size: 0.85rem; color: #8f291c; font-weight: 800; margin: 0;"></p>
              </div>
            </div>
            <div style="background: #fffdf9; border: 2px dashed #d4a36a; border-radius: 12px; padding: 14px; font-size: 0.92rem; color: #23140c; line-height: 1.6;">
              <p style="margin: 0 0 6px 0;"><strong>Sifat & Karakter:</strong></p>
              <p id="charModalTraits" style="margin: 0; color: #4a5568; font-weight: 600;"></p>
            </div>
          </div>
          <button type="button" class="petunjuk-ready-btn" onclick="closeCharProfileModal()" style="margin-top: 14px;">
            Tutup 👍
          </button>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);
    modal = document.getElementById("charProfileModalOverlay");
  }

  document.getElementById("charModalTitle").textContent = `Profil — ${c.name.split(" ")[0]}`;
  document.getElementById("charModalAvatar").innerHTML = getCharacterAvatarSVG(charKey);
  document.getElementById("charModalName").textContent = c.name;
  document.getElementById("charModalAgeRole").textContent = `${c.age} • ${c.role}`;
  document.getElementById("charModalTraits").textContent = c.traits;

  modal.style.display = "flex";
}

function closeCharProfileModal() {
  const modal = document.getElementById("charProfileModalOverlay");
  if (modal) modal.style.display = "none";
}

function renderCurrentPage() {
  const container = document.getElementById("pageContainer");
  const page = COMIC_PAGES[currentPageIndex];

  if (page.type === "beranda") {
    container.innerHTML = renderBerandaHTML(page);
    const btnMulai = document.getElementById("btnMulaiJelajah");
    if (btnMulai) btnMulai.addEventListener("click", () => goToPage(1));
  } else {
    container.innerHTML = renderComicStoryPageHTML(page);
    attachPageInteractiveHandlers(page);
  }
  updateNavigationState();
}

function renderComicStoryPageHTML(page) {
  const dialoguesHTML = page.dialogues
    .map((d) => {
      const c = CHARACTERS[d.char];
      return `
        <div class="speech-bubble-item ${c.isTeacher ? "is-teacher" : ""}">
          <!-- Avatar karakter dan tag nama kini dapat diklik untuk menampilkan profil lengkap seperti di sampul -->
          <div class="bubble-avatar" onclick="showCharacterProfile('${d.char}')" title="Klik untuk lihat profil ${c.name}" style="cursor: pointer; transition: transform 0.15s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">${getCharacterAvatarSVG(d.char)}</div>
          <div class="bubble-content">
            <span class="speaker-tag ${c.speakerClass}" onclick="showCharacterProfile('${d.char}')" title="Klik untuk lihat profil ${c.name}" style="cursor: pointer;">${c.name} (${c.role.split("•")[0].trim()})</span>
            <p class="bubble-text">“${d.text}”</p>
          </div>
        </div>`;
    })
    .join("");

  const isHalaman10 = currentPageIndex === 10;
  
  const halaman10ButtonsHTML = isHalaman10 ? `
    <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 24px; font-family: 'Nunito', sans-serif;">
      <button type="button" onclick="openRangkumanModal()" style="width: 100%; background: #142347; color: #ffd53d; border: 2.5px solid #23140c; border-radius: 14px; padding: 14px; font-size: 1.05rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 4px 0 #23140c; transition: all 0.2s;">
        📑 Infografis
      </button>
      
      <div style="display: flex; gap: 10px;">
        <button type="button" onclick="goToPage(0)" style="flex: 1; background: #fff8eb; color: #23140c; border: 2.5px solid #23140c; border-radius: 12px; padding: 12px; font-weight: 800; font-size: 0.92rem; cursor: pointer; box-shadow: 0 3px 0 #23140c; display: flex; align-items: center; justify-content: center; gap: 6px;">
          🏠 Home
        </button>
        <button type="button" onclick="goToPage(1)" style="flex: 1; background: #ffd53d; color: #23140c; border: 2.5px solid #23140c; border-radius: 12px; padding: 12px; font-weight: 800; font-size: 0.92rem; cursor: pointer; box-shadow: 0 3px 0 #23140c; display: flex; align-items: center; justify-content: center; gap: 6px;">
          📖 Kembali ke Komik
        </button>
      </div>
    </div>
  ` : "";

  return `
    <div class="page-step-header">
      <div class="step-pill">
        <span class="step-pill-icon">${page.pageNumber}</span>
        <span>${page.stepLabel}</span>
      </div>
      <div class="step-tagline">${page.tagline}</div>
    </div>

    <div class="comic-stage-grid">
      <section class="comic-panel-frame">
        <span class="comic-panel-caption">${page.panelCaption}</span>
        <div class="comic-illustration-box">
          ${getSceneIllustrationSVG(page.illustrationKey)}
        </div>
      </section>

      <section class="dialogue-column">
        <div class="dialogue-header">
          <h3>💬 Percakapan Panel Komik</h3>
          <!-- Pembaruan Bagian 2a: Tombol Putar Suara menjadi ikon saja dengan title tooltip -->
          <button class="tool-btn tool-btn-gold" onclick="speakCurrentPageDialogues()" title="Putar Suara" aria-label="Putar Suara" style="padding: 6px 12px; font-size: 1.1rem;">🔊</button>
        </div>
        <div class="speech-list">
          ${dialoguesHTML}
        </div>
      </section>
    </div>

    <section class="interactive-zone">
      ${renderInteractiveSectionHTML(page.interactiveType)}
      ${halaman10ButtonsHTML}
    </section>
  `;
}

function renderInteractiveSectionHTML(type) {
  if (type === "motifCards") {
    const cards = MOTIF_ENCYCLOPEDIA.map(
      (m) => `
        <div class="motif-card" onclick="showMotifDetail('${m.id}')">
          <div class="motif-card-preview">${getMotifPatternSVG(m.id, "card-" + m.id)}</div>
          <div class="motif-card-info">
            <h4>${m.name}</h4>
            <span>(${m.origin})</span>
          </div>
        </div>`
    ).join("");
    return `
      <h4 class="interactive-title">🔍 Klik Gambar Motif untuk Melihat Filosofi &amp; Info Lengkap:</h4>
      <div class="motif-grid-4">${cards}</div>
    `;
  }

  if (type === "checklistMotif") {
    const items = ["Bentuk", "Warna", "Garis", "Pola"];
    const checks = items
      .map(
        (item) => `
        <label class="check-card">
          <input type="checkbox" ${observationChecklist[item] ? "checked" : ""} onchange="toggleObservation('${item}', this.checked)" />
          <div>
            <strong>Amati Unsur ${item}</strong>
            <p style="font-size:0.82rem;color:#5c4333;">Identifikasi karakteristik ${item.toLowerCase()} pada motif pilihanmu.</p>
          </div>
        </label>`
      )
      .join("");

    const options = MOTIF_ENCYCLOPEDIA.map(
      (m) => `<option value="${m.name} (${m.origin})" ${selectedFavoriteMotif.includes(m.name) ? "selected" : ""}>${m.name} — ${m.origin}</option>`
    ).join("");

    return `
      <h4 class="interactive-title">✨ Eksplorasi &amp; Pilih Motif Favoritmu:</h4>
      <div class="checklist-grid">${checks}</div>
      <div style="margin-top:14px;display:flex;flex-wrap:wrap;gap:10px;align-items:center;">
        <label style="font-weight:800;">Motif Favorit Pilihanmu:</label>
        <select id="selectFavMotif" class="select-input" style="max-width:310px;" onchange="selectedFavoriteMotif = this.value">
          ${options}
        </select>
        <button class="action-btn btn-gold" onclick="alert('Mantap! Motif favoritmu (' + selectedFavoriteMotif + ') berhasil disimpan untuk proyek fesyen!')">⭐ Simpan Motif Favorit</button>
      </div>
    `;
  }

  if (type === "transformasiDesain") {
    return `
      <h4 class="interactive-title">👗 Ide Transformasi Motif Menjadi Produk Fesyen Bernilai Jual:</h4>
      <div class="checklist-grid">
        <div class="check-card"><span>🧥</span><div><strong>Pakaian (Outer &amp; Gaun)</strong><p style="font-size:0.82rem;">Outer kasual &amp; blazer modern dengan aksen motif Nusantara.</p></div></div>
        <div class="check-card"><span>👜</span><div><strong>Tas (Totebag &amp; Pouch)</strong><p style="font-size:0.82rem;">Totebag kanvas kombinasi kain batik/tenun yang fungsional.</p></div></div>
        <div class="check-card"><span>🎀</span><div><strong>Aksesoris (Syal &amp; Dasi)</strong><p style="font-size:0.82rem;">Syal leher, bandana, dan dasi kupu-kupu etnik elegan.</p></div></div>
      </div>
      <div style="margin-top:14px;">
        <button class="action-btn btn-purple" onclick="openModal('modalStudioSketsa'); drawFashionCanvas();">🎨 Coba Simulasi Desain di Studio Motif ▶</button>
      </div>
    `;
  }

  if (type === "sketsaPreview") {
    return `
      <h4 class="interactive-title">✏️ Studio Sketsa &amp; Pewarnaan Produk Fesyen:</h4>
      <p style="font-size:0.92rem;margin-bottom:12px;">Tentukan model produk, terapkan motif ragam hias Nusantara (Mega Mendung, Parang, Kawung, Tenun Ikat), dan unduh template sketsamu!</p>
      <button class="action-btn btn-purple" onclick="openModal('modalStudioSketsa'); drawFashionCanvas();">🖌 Buka Kanvas Sketsa &amp; Unduh Template</button>
    `;
  }

  if (type === "kalkulatorHPP") {
    return `
      <h4 class="interactive-title">💰 Simulasi Kewirausahaan: Kalkulator HPP &amp; Harga Jual Produk</h4>
      <div class="hpp-grid">
        <div class="hpp-input-box">
          <div class="form-row">
            <label>Pilihan Bahan Utama:</label>
            <select id="hppBahan" class="select-input" onchange="hitungHPP()">
              <option value="45000">Kain Katun Primisima (Rp 45.000 / meter)</option>
              <option value="95000">Kain Sutra Alam (Rp 95.000 / meter)</option>
              <option value="75000">Kain Tenun Ikat (Rp 75.000 / meter)</option>
            </select>
          </div>
          <div class="form-row">
            <label>Biaya Alat, Benang &amp; Pewarna (Rp):</label>
            <input type="number" id="hppAlat" class="text-input" value="25000" oninput="hitungHPP()" />
          </div>
          <div class="form-row">
            <label>Target Keuntungan / Margin (%):</label>
            <input type="number" id="hppMargin" class="text-input" value="30" oninput="hitungHPP()" />
          </div>
        </div>
        <div class="hpp-result-box" id="hppResultBox"></div>
      </div>
    `;
  }

  if (type === "langkahProduksi") {
    return `
      <h4 class="interactive-title">🎬 Panduan Langkah Pembuatan &amp; Konten Promosi Produk:</h4>
      <div class="checklist-grid">
        <div class="check-card"><strong>1. Pembuatan Pola</strong><span style="font-size:0.82rem;">Ukur dan gunting kain sesuai sketsa outer atau totebag.</span></div>
        <div class="check-card"><strong>2. Aplikasi Ragam Hias</strong><span style="font-size:0.82rem;">Terapkan teknik membatik, menyulam, mencetak, atau menempel.</span></div>
        <div class="check-card"><strong>3. Penjahitan &amp; Finishing</strong><span style="font-size:0.82rem;">Jahit komponen produk secara rapi dan pasang label merek.</span></div>
        <div class="check-card"><strong>4. Konten Storytelling</strong><span style="font-size:0.82rem;">Rekam video singkat kisah filosofi motif untuk promosi digital.</span></div>
      </div>
    `;
  }

  if (type === "quiz") {
    return renderQuizBoxHTML();
  }

  if (type === "expoShowcase") {
    return `
      <h4 class="interactive-title">🏪 Etalase Produk Kelompok — Expo Nusantara "Motif to Fashion" (Klik Produk untuk Detail)</h4>
      <div class="checklist-grid">
        <div class="check-card" onclick="showExpoProductDetail(1)" style="cursor: pointer; transition: transform 0.2s; border: 2px solid #23140c;" title="Klik untuk lihat detail produk">
          <span style="font-size: 2rem;">🧥</span>
          <div>
            <strong>Outer Kasual Mega Mendung</strong>
            <p style="font-size:0.82rem;">Bahan: Katun • Teknik: Batik Cap &amp; Jahit • Estimasi Harga: <strong>Rp 115.000</strong></p>
            <span style="font-size:0.75rem; color:#8f291c; font-weight:800;">🔍 Klik untuk lihat gambar &amp; detail</span>
          </div>
        </div>
        <div class="check-card" onclick="showExpoProductDetail(2)" style="cursor: pointer; transition: transform 0.2s; border: 2px solid #23140c;" title="Klik untuk lihat detail produk">
          <span style="font-size: 2rem;">👜</span>
          <div>
            <strong>Totebag Etnik Kawung</strong>
            <p style="font-size:0.82rem;">Bahan: Kanvas &amp; Batik • Teknik: Menempel &amp; Sulam • Estimasi Harga: <strong>Rp 65.000</strong></p>
            <span style="font-size:0.75rem; color:#8f291c; font-weight:800;">🔍 Klik untuk lihat gambar &amp; detail</span>
          </div>
        </div>
      </div>
    `;
  }

  if (type === "apresiasi") {
    return `
      <h4 class="interactive-title">🌟 Nilai Kewirausahaan &amp; Pelestarian Budaya yang Dicapai:</h4>
      <div class="checklist-grid">
        <div class="check-card"><span>💡</span><div><strong>Kreatif &amp; Inovatif</strong><p style="font-size:0.82rem;">Mengolah motif tradisi menjadi potongan busana kekinian.</p></div></div>
        <div class="check-card"><span>📈</span><div><strong>Bernilai Jual Tinggi</strong><p style="font-size:0.82rem;">Produk memiliki diferensiasi cerita budaya dan fungsi nyata.</p></div></div>
        <div class="check-card"><span>🇮🇩</span><div><strong>Melestarikan Budaya</strong><p style="font-size:0.82rem;">Menumbuhkan kebanggaan generasi muda terhadap wastra Nusantara.</p></div></div>
      </div>
    `;
  }

  return `
    <h4 class="interactive-title">📝 Refleksi Diri, Unggah Karya &amp; Pengumpulan Tugas Siswa</h4>
    <div class="hpp-grid">
      <div class="hpp-input-box">
        <div class="form-row">
          <label>Nama Lengkap Siswa:</label>
          <input type="text" id="tugasNamaSiswa" class="text-input" placeholder="Masukkan nama lengkapmu..." oninput="checkAssignmentFormValidity()" />
        </div>
        <div class="form-row">
          <label>Kelas:</label>
          <input type="text" id="tugasKelasSiswa" class="text-input" placeholder="Contoh: X-1" oninput="checkAssignmentFormValidity()" />
        </div>
        <div class="form-row">
          <label>Refleksi Diri: Apa yang kamu pelajari hari ini? Bagaimana perasaanmu?</label>
          <textarea id="tugasRefleksi" class="textarea-input" rows="3" placeholder="Tuliskan refleksi belajarmu di sini..." oninput="checkAssignmentFormValidity()"></textarea>
        </div>
      </div>
      <div class="hpp-result-box">
        <div class="form-row">
          <label>Unggah Foto Sketsa / Karya Fesyenmu:</label>
          <input type="file" id="inputUploadKarya" accept="image/*" class="text-input" onchange="handleWorkUpload(event)" />
        </div>
        <div id="previewKaryaBox" style="margin:8px 0;min-height:85px;border:2px dashed #bfa988;border-radius:10px;display:flex;align-items:center;justify-content:center;padding:8px;background:#fffdf9;">
          ${uploadedWorkDataUrl ? `<img src="${uploadedWorkDataUrl}" alt="Pratinjau Karya" style="max-height:110px;border-radius:8px;" />` : `<span style="font-size:0.82rem;color:#6c584c;">Pratinjau foto karya akan tampil di sini</span>`}
        </div>
        <button type="button" id="btnKirimTugas" class="btn-kirim" onclick="submitFinalAssignment()" disabled style="background: #cccccc; color: #666666; border: 2.5px solid #23140c; border-radius: 12px; padding: 12px; font-weight: 800; cursor: not-allowed; width: 100%; box-shadow: 0 3px 0 #23140c; transition: all 0.2s;">
          🔒 Lengkapi Semua Data &amp; Foto untuk Mengirim
        </button>
      </div>
    </div>
  `;
}

function attachPageInteractiveHandlers(page) {
  if (page.interactiveType === "kalkulatorHPP") hitungHPP();
  checkAssignmentFormValidity();
}

function showMotifDetail(motifId) {
  const m = MOTIF_ENCYCLOPEDIA.find((item) => item.id === motifId);
  if (!m) return;
  document.getElementById("motifModalTitle").textContent = `${m.name} (${m.origin})`;

  let animatedVisualHTML = "";
  if (motifId === "megamendung") {
    animatedVisualHTML = `
      <div style="position:relative; width:100%; height:180px; background:linear-gradient(180deg, #142347, #6eb6ff, #142347); border-radius:14px; overflow:hidden; border:4px solid #23140c; box-shadow: inset 0 0 20px rgba(35, 20, 12, 0.5);">
        <svg width="100%" height="100%" viewBox="0 0 500 180" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9"/>
              <stop offset="100%" stop-color="#e0f7fa" stop-opacity="0.5"/>
            </linearGradient>
            <filter id="shine">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#shine)">
            <path d="M-100,90 Q0,40 100,90 T300,90 T500,90 L500,180 L-100,180 Z" fill="url(#cloudGrad)" opacity="0.6">
              <animate attributeName="d" dur="10s" repeatCount="indefinite" values="M-100,90 Q0,40 100,90 T300,90 T500,90 L500,180 L-100,180 Z; M-100,90 Q0,140 100,90 T300,40 T500,90 L500,180 L-100,180 Z; M-100,90 Q0,40 100,90 T300,90 T500,90 L500,180 L-100,180 Z"/>
            </path>
            <path d="M20,120 C50,80 100,110 150,90 C200,70 250,100 300,90 C350,80 400,110 450,90 C480,80 500,90 500,90 L500,160 L20,160 Z" fill="#ffffff" opacity="0.9">
              <animateTransform attributeName="transform" type="translate" dur="7s" repeatCount="indefinite" values="-60,0; 0,0; -60,0"/>
            </path>
          </g>
        </svg>
        <div style="position:absolute; bottom:8px; left:12px; background:rgba(255,255,255,0.9); color:#8f291c; padding:4px 10px; border-radius:18px; font-size:0.8rem; font-weight:800; border: 2.5px solid #23140c; box-shadow: 0 3px 0 #23140c;">
          ☁️ Awan Mega Mendung: Kesejukan &amp; Kesabaran
        </div>
      </div>`;
  } else if (motifId === "parang") {
    animatedVisualHTML = `
      <div style="position:relative; width:100%; height:180px; background:linear-gradient(135deg, #5c1810, #b71c1c, #8f291c); border-radius:14px; overflow:hidden; border:4px solid #23140c; box-shadow: inset 0 0 20px rgba(35, 20, 12, 0.6);">
        <svg width="100%" height="100%" viewBox="0 0 400 180">
          <g>
            <path d="M-100,100 Q-50,50 0,100 T100,100 T200,100 T300,100 T400,100 T500,100" fill="none" stroke="#ffd53d" stroke-width="35" stroke-linecap="round">
              <animateTransform attributeName="transform" type="translate" dur="4s" repeatCount="indefinite" values="0,0; 100,0; 0,0"/>
            </path>
          </g>
        </svg>
        <div style="position:absolute; bottom:8px; left:12px; background:rgba(255,255,255,0.9); color:#8f291c; padding:4px 10px; border-radius:18px; font-size:0.8rem; font-weight:800; border: 2.5px solid #23140c; box-shadow: 0 3px 0 #23140c;">
          🗡️ Parang: Semangat Pantang Menyerah
        </div>
      </div>`;
  } else if (motifId === "kawung") {
    animatedVisualHTML = `
      <div style="position:relative; width:100%; height:180px; background:linear-gradient(135deg, #4a3525, #fdf6e3, #4a3525); border-radius:14px; overflow:hidden; border:4px solid #23140c; box-shadow: inset 0 0 25px rgba(35, 20, 12, 0.5);">
        <svg width="100%" height="100%" viewBox="0 0 400 180">
          <g transform="translate(200, 90)">
            <ellipse rx="45" ry="22" fill="#ffd53d" opacity="0.9">
              <animateTransform attributeName="transform" type="rotate" dur="5s" repeatCount="indefinite" from="0 0 0" to="360 0 0"/>
            </ellipse>
          </g>
        </svg>
        <div style="position:absolute; bottom:8px; left:12px; background:rgba(35,20,12,0.9); color:#ffd53d; padding:4px 10px; border-radius:18px; font-size:0.8rem; font-weight:800; border: 2.5px solid #23140c; box-shadow: 0 3px 0 #23140c;">
          ⚪ Kawung: Kesucian &amp; Pengendalian Diri
        </div>
      </div>`;
  } else {
    animatedVisualHTML = `
      <div style="position:relative; width:100%; height:180px; background:linear-gradient(135deg, #0d562f, #eefbf3, #148348); border-radius:14px; overflow:hidden; border:4px solid #23140c; box-shadow: inset 0 0 20px rgba(13, 86, 47, 0.5);">
        <svg width="100%" height="100%" viewBox="0 0 400 180">
          <polygon points="50,-50 100,90 0,90" fill="#ffd53d" opacity="0.9">
             <animateTransform attributeName="transform" type="translate" dur="4s" repeatCount="indefinite" values="0,0; 60,30; 0,0"/>
          </polygon>
        </svg>
        <div style="position:absolute; bottom:8px; left:12px; background:rgba(255,255,255,0.9); color:#8f291c; padding:4px 10px; border-radius:18px; font-size:0.8rem; font-weight:800; border: 2.5px solid #23140c; box-shadow: 0 3px 0 #23140c;">
          🧵 Tenun Ikat: Proses Panjang &amp; Kerja Keras
        </div>
      </div>`;
  }

  document.getElementById("motifModalBody").innerHTML = `
    ${animatedVisualHTML}
    <div style="margin-top: 14px; font-family: 'Nunito', sans-serif; color: #23140c; line-height: 1.5;">
      <p style="margin-bottom:8px;"><strong>Asal Daerah:</strong> ${m.origin}</p>
      <p style="margin-bottom:8px;"><strong>Karakteristik Warna:</strong> ${m.colors}</p>
      <p style="margin-bottom:8px;"><strong>Makna &amp; Filosofi:</strong> ${m.philosophy}</p>
      <p style="margin-bottom:14px;"><strong>Rekomendasi Ide Fesyen:</strong> ${m.fashionIdea}</p>
      <button class="action-btn btn-gold" onclick="selectedFavoriteMotif='${m.name} (${m.origin})'; closeModal('modalMotifDetail'); alert('Motif ${m.name} dipilih sebagai inspirasi desainmu!');">⭐ Jadikan Inspirasi Desainku</button>
    </div>
  `;
  openModal("modalMotifDetail");
}

function toggleObservation(key, val) {
  observationChecklist[key] = val;
}

function hitungHPP() {
  const bahan = Number(document.getElementById("hppBahan")?.value || 45000);
  const alat = Number(document.getElementById("hppAlat")?.value || 25000);
  const margin = Number(document.getElementById("hppMargin")?.value || 30);

  const totalHPP = bahan + alat;
  const laba = Math.round(totalHPP * (margin / 100));
  const hargaJual = totalHPP + laba;

  const box = document.getElementById("hppResultBox");
  if (box) {
    box.innerHTML = `
      <h4 style="font-family:'Fredoka',sans-serif;color:#142347;margin-bottom:8px;">📊 Hasil Perhitungan Usaha</h4>
      <p style="font-size:0.9rem;margin-bottom:4px;">Total Modal (HPP): <strong>Rp ${totalHPP.toLocaleString("id-ID")}</strong></p>
      <p style="font-size:0.9rem;margin-bottom:4px;">Estimasi Laba (${margin}%): <strong style="color:#1d8348;">+ Rp ${laba.toLocaleString("id-ID")}</strong></p>
      <hr style="margin:8px 0;border:1px dashed #cbb89d;" />
      <p style="font-size:1.05rem;">Rekomendasi Harga Jual: <strong style="color:#8f291c;">Rp ${hargaJual.toLocaleString("id-ID")}</strong></p>
    `;
  }
}

function showExpoProductDetail(productNumber) {
  let modal = document.getElementById("expoDetailModalOverlay");
  if (!modal) {
    const modalHTML = `
      <div id="expoDetailModalOverlay" class="petunjuk-modal-overlay" style="display: none;" onclick="if(event.target === this) closeExpoDetailModal()">
        <div class="petunjuk-modal-content" style="max-width: 480px; text-align: center;">
          <div class="petunjuk-modal-header">
            <div class="petunjuk-modal-title-wrap">
              <span class="petunjuk-icon-circle">🛍️</span>
              <h3 id="expoModalTitle">Detail Produk Expo</h3>
            </div>
            <button type="button" class="petunjuk-close-btn" onclick="closeExpoDetailModal()">×</button>
          </div>
          <div class="petunjuk-modal-body" style="text-align: left;">
            <div id="expoModalCanvasWrap" style="height: 200px; border-radius: 12px; overflow: hidden; border: 3px solid #23140c; margin-bottom: 14px; background: #fff8eb; display: flex; align-items: center; justify-content: center;">
            </div>
            <div style="background: #fffdf9; border: 2px dashed #d4a36a; border-radius: 12px; padding: 14px; font-size: 0.92rem; color: #23140c; line-height: 1.6;">
              <p style="margin-bottom: 6px;"><strong>Nama Produk:</strong> <span id="expoValNama">-</span></p>
              <p style="margin-bottom: 6px;"><strong>Bahan Utama:</strong> <span id="expoValBahan">-</span></p>
              <p style="margin-bottom: 6px;"><strong>Teknik Pembuatan:</strong> <span id="expoValTeknik">-</span></p>
              <p style="margin-bottom: 0;"><strong>Estimasi Harga Jual:</strong> <span id="expoValHarga" style="color: #8f291c; font-weight: 800;">-</span></p>
            </div>
          </div>
          <button type="button" class="petunjuk-ready-btn" onclick="closeExpoDetailModal()" style="margin-top: 14px;">
            Tutup Pratinjau 👍
          </button>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);
    modal = document.getElementById("expoDetailModalOverlay");
  }

  const titleEl = document.getElementById("expoModalTitle");
  const canvasWrap = document.getElementById("expoModalCanvasWrap");
  const valNama = document.getElementById("expoValNama");
  const valBahan = document.getElementById("expoValBahan");
  const valTeknik = document.getElementById("expoValTeknik");
  const valHarga = document.getElementById("expoValHarga");

  if (productNumber === 1) {
    titleEl.textContent = "Outer Kasual Mega Mendung";
    valNama.textContent = "Outer Kasual Mega Mendung Nusantara";
    valBahan.textContent = "Kain Katun Primisima berkualitas tinggi";
    valTeknik.textContent = "Batik Cap & Jahit Presisi Modern";
    valHarga.textContent = "Rp 115.000";
    canvasWrap.innerHTML = getMotifPatternSVG("megamendung", "expo-detail-1");
  } else {
    titleEl.textContent = "Totebag Etnik Kawung";
    valNama.textContent = "Totebag Kanvas Motif Kawung";
    valBahan.textContent = "Kain Kanvas Tebal dipadu Aksen Batik";
    valTeknik.textContent = "Teknik Menempel (Applique) & Sulam Tepi";
    valHarga.textContent = "Rp 65.000";
    canvasWrap.innerHTML = getMotifPatternSVG("kawung", "expo-detail-2");
  }

  modal.style.display = "flex";
}

function closeExpoDetailModal() {
  const modal = document.getElementById("expoDetailModalOverlay");
  if (modal) modal.style.display = "none";
}

function renderQuizBoxHTML() {
  const q = QUIZ_QUESTIONS[currentQuizIdx];
  const letters = ["A", "B", "C", "D"];
  const optionsHTML = q.options
    .map(
      (opt, idx) => `
      <button class="quiz-option-btn" id="qopt-${idx}" onclick="answerQuiz(${idx})">
        <span class="opt-badge">${letters[idx]}</span>
        <span>${opt}</span>
      </button>`
    )
    .join("");

  return `
    <div class="quiz-banner">
      <div>
        <strong style="font-family:'Fredoka',sans-serif;font-size:1.1rem;">⭐ Tantangan Kreativitas — Soal ${currentQuizIdx + 1} dari ${QUIZ_QUESTIONS.length}</strong>
        <p style="font-size:0.84rem;opacity:0.92;">Skor Saat Ini: ${quizScore} / ${QUIZ_QUESTIONS.length * 20}</p>
      </div>
      <span class="badge-mapel" style="margin:0;">Ayo Jawab!</span>
    </div>
    <div style="display:grid;grid-template-columns:160px 1fr;gap:14px;align-items:center;margin-bottom:12px;animation: quizFadeIn 0.35s ease;">
      <div style="height:110px;border-radius:12px;overflow:hidden;border:2.5px solid #23140c;">
        ${getMotifPatternSVG(q.motifKey, "quiz-" + currentQuizIdx)}
      </div>
      <p style="font-weight:800;font-size:1.02rem;line-height:1.45;">${q.question}</p>
    </div>
    <div>${optionsHTML}</div>
    <div id="quizFeedback" style="margin-top:10px;font-weight:800;font-size:0.92rem;"></div>
  `;
}

function answerQuiz(chosenIdx) {
  if (quizAnswered) return;
  quizAnswered = true;
  const q = QUIZ_QUESTIONS[currentQuizIdx];

  q.options.forEach((_, idx) => {
    const btn = document.getElementById(`qopt-${idx}`);
    if (btn) {
      btn.disabled = true;
      if (idx === q.correctIndex) btn.classList.add("correct");
      else if (idx === chosenIdx) btn.classList.add("wrong");
    }
  });

  const feedback = document.getElementById("quizFeedback");
  if (feedback) {
    if (chosenIdx === q.correctIndex) {
      quizScore += 20;
      feedback.innerHTML = `<p style="color:#1d8348; animation: quizFadeIn 0.3s ease;">✅ ${q.explanation}</p>`;
    } else {
      feedback.innerHTML = `<p style="color:#8f291c; animation: quizFadeIn 0.3s ease;">❌ Kurang tepat. ${q.explanation}</p>`;
    }
  }

  setTimeout(() => {
    if (currentQuizIdx < QUIZ_QUESTIONS.length - 1) {
      currentQuizIdx++;
      quizAnswered = false;
      renderCurrentPage();
    } else {
      const quizContainer = document.querySelector(".quiz-banner")?.closest(".interactive-zone") || document.getElementById("pageContainer");
      if (quizContainer) {
        quizContainer.innerHTML = `
          <div style="text-align: center; padding: 24px; animation: quizFadeIn 0.4s ease;">
            <div style="font-size: 3rem; margin-bottom: 8px;">🏆</div>
            <h3 style="font-family:'Fredoka',sans-serif; font-size: 1.5rem; color:#142347; margin-bottom: 8px;">Kuis Selesai!</h3>
            <p style="font-size: 1.05rem; font-weight: 800; color:#23140c; margin-bottom: 16px;">
              Skor Akhir Kamu: <span style="color:#8f291c; font-size: 1.2rem;">${quizScore} / 100</span>
            </p>
            <button class="action-btn btn-gold" onclick="resetQuiz()">🔄 Ulangi Kuis</button>
          </div>
        `;
      }
    }
  }, 1400);
}

function resetQuiz() {
  currentQuizIdx = 0;
  quizScore = 0;
  quizAnswered = false;
  renderCurrentPage();
}

let isSpeakingPanel = false;
let speakSessionId = 0;

function getVoiceProfile(charKey = "", speakerName = "") {
  const key = String(charKey).toLowerCase();
  const name = String(speakerName).toLowerCase();

  if (
    key.includes("ibu") ||
    key.includes("aldi") ||
    key.includes("guru") ||
    key.includes("nabila") ||
    name.includes("ibu") ||
    name.includes("aldriana") ||
    name.includes("nabila")
  ) {
    const isNabila = key.includes("nabila") || name.includes("nabila");
    return {
      gender: "female",
      pitch: isNabila ? 1.24 : 1.12,
      rate: isNabila ? 1.03 : 0.96,
      keywords: ["female", "wanita", "gadis", "arlette", "nadia"]
    };
  }

  const isDimas = key.includes("dimas") || name.includes("dimas");
  return {
    gender: "male",
    pitch: isDimas ? 0.78 : 0.84,
    rate: isDimas ? 1.04 : 1.0,
    keywords: ["male", "pria", "laki", "ardiansyah", "budi", "putra"]
  };
}

function pickIndonesianVoice(profile) {
  const voices = window.speechSynthesis.getVoices() || [];
  if (!voices.length) return null;

  const idVoices = voices.filter((v) => /^id(-|_|$)/i.test(v.lang));
  const pool = idVoices.length ? idVoices : voices;

  if (profile?.keywords?.length) {
    const matched = pool.find((v) => {
      const label = `${v.name} ${v.voiceURI}`.toLowerCase();
      return profile.keywords.some((kw) => label.includes(kw));
    });
    if (matched) return matched;
  }

  return pool[0] || null;
}

function speak(text, charKey = "", speakerName = "", sessionId = speakSessionId) {
  return new Promise((resolve) => {
    if (!text || sessionId !== speakSessionId) {
      resolve();
      return;
    }

    const profile = getVoiceProfile(charKey, speakerName);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "id-ID";

    const chosenVoice = pickIndonesianVoice(profile);
    if (chosenVoice) utterance.voice = chosenVoice;

    utterance.pitch = profile.pitch;
    utterance.rate = profile.rate;
    utterance.volume = 1.0;

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      resolve();
    };

    utterance.onend = finish;
    utterance.onerror = finish;

    window.speechSynthesis.speak(utterance);
  });
}

function stopSpeaking() {
  speakSessionId++;
  isSpeakingPanel = false;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}

async function speakCurrentPageDialogues() {
  if (!("speechSynthesis" in window)) {
    alert("Browser kamu belum mendukung fitur pembaca suara otomatis.");
    return;
  }

  if (isSpeakingPanel) {
    stopSpeaking();
    return;
  }

  window.speechSynthesis.cancel();
  const currentSession = ++speakSessionId;
  isSpeakingPanel = true;

  const page = COMIC_PAGES[currentPageIndex];
  const items = [];

  if (page.type === "beranda") {
    Object.entries(CHARACTERS).forEach(([charKey, c]) => {
      items.push({
        charKey,
        speakerName: c.name,
        text: `${c.name}. ${c.intro}`
      });
    });
  } else {
    (page.dialogues || []).forEach((d) => {
      const charInfo = CHARACTERS[d.char] || { name: d.char };
      items.push({
        charKey: d.char,
        speakerName: charInfo.name,
        text: `${charInfo.name} berkata: ${d.text}`
      });
    });
  }

  try {
    for (const item of items) {
      if (currentSession !== speakSessionId) break;
      await speak(item.text, item.charKey, item.speakerName, currentSession);
    }
  } finally {
    if (currentSession === speakSessionId) isSpeakingPanel = false;
  }
}

let studioState = {
  model: "outer",
  motif: "megamendung",
  color: "#1E3A6E"
};

function initFashionStudio() {
  document.querySelectorAll("#modelSelector .chip-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#modelSelector .chip-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      studioState.model = btn.dataset.model;
      drawFashionCanvas();
    });
  });

  document.querySelectorAll("#motifSelector .chip-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#motifSelector .chip-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      studioState.motif = btn.dataset.motif;
      drawFashionCanvas();
    });
  });

  document.querySelectorAll("#colorSelector .swatch-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#colorSelector .swatch-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      studioState.color = btn.dataset.color;
      drawFashionCanvas();
    });
  });

  document.getElementById("inputNamaDesain")?.addEventListener("input", drawFashionCanvas);

  document.getElementById("btnDownloadDesain")?.addEventListener("click", () => {
    const canvas = document.getElementById("fashionCanvas");
    const link = document.createElement("a");
    link.download = "desain-motif-to-fashion-pkwu.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}

function drawFashionCanvas() {
  const canvas = document.getElementById("fashionCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const W = canvas.width;
  const H = canvas.height;
  const cx = W / 2;

  const model = studioState.model || "outer";
  const motif = studioState.motif || "megamendung";
  const baseColor = studioState.color || "#1E3A6E";
  const inputEl = document.getElementById("inputNamaDesain");
  const designTitle =
    (inputEl && inputEl.value && inputEl.value.trim()) ||
    "Outer Ragam Hias Nusantara";

  const motifLabelMap = {
    megamendung: "MEGA MENDUNG",
    parang: "BATIK PARANG",
    kawung: "BATIK KAWUNG",
    tenun: "TENUN IKAT NTT"
  };
  const motifLabel = motifLabelMap[motif] || "RAGAM HIAS NUSANTARA";

  ctx.clearRect(0, 0, W, H);
  const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
  bgGrad.addColorStop(0, "#fffaf0");
  bgGrad.addColorStop(0.76, "#f7ebd5");
  bgGrad.addColorStop(0.76, "#ead7b7");
  bgGrad.addColorStop(1, "#dec49b");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = "#23140c";
  ctx.lineWidth = 4;
  ctx.strokeRect(6, 6, W - 12, H - 12);

  const spotGrad = ctx.createRadialGradient(cx, 200, 15, cx, 200, 145);
  spotGrad.addColorStop(0, "rgba(255, 255, 255, 0.9)");
  spotGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
  ctx.fillStyle = spotGrad;
  ctx.beginPath();
  ctx.arc(cx, 200, 145, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "rgba(35, 20, 12, 0.16)";
  ctx.beginPath();
  ctx.ellipse(cx, 355, 58, 10, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#142347";
  ctx.fillRect(14, 14, W - 28, 32);
  ctx.strokeStyle = "#23140c";
  ctx.lineWidth = 2;
  ctx.strokeRect(14, 14, W - 28, 32);

  ctx.fillStyle = "#ffd53d";
  ctx.font = "bold 13px Fredoka, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("LOOKBOOK FESYEN NUSANTARA — KELAS X", cx, 35);

  const pCanvas = document.createElement("canvas");
  pCanvas.width = 56;
  pCanvas.height = 56;
  const pCtx = pCanvas.getContext("2d");

  pCtx.fillStyle = baseColor;
  pCtx.fillRect(0, 0, 56, 56);

  if (motif === "megamendung") {
    pCtx.fillStyle = "rgba(110, 182, 255, 0.52)";
    pCtx.strokeStyle = "#e3f2fd";
    pCtx.lineWidth = 1.8;
    pCtx.beginPath();
    pCtx.moveTo(4, 38);
    pCtx.bezierCurveTo(10, 20, 20, 18, 28, 28);
    pCtx.bezierCurveTo(36, 18, 46, 20, 52, 38);
    pCtx.bezierCurveTo(42, 44, 33, 41, 28, 39);
    pCtx.bezierCurveTo(23, 41, 14, 44, 4, 38);
    pCtx.fill();
    pCtx.stroke();
  } else if (motif === "parang") {
    pCtx.save();
    pCtx.translate(28, 28);
    pCtx.rotate((-32 * Math.PI) / 180);
    pCtx.strokeStyle = "#f5b700";
    pCtx.lineWidth = 6.5;
    pCtx.lineCap = "round";
    pCtx.beginPath();
    pCtx.moveTo(-32, 0);
    pCtx.bezierCurveTo(-14, -15, 14, 15, 32, 0);
    pCtx.stroke();
    pCtx.strokeStyle = "#fff8eb";
    pCtx.lineWidth = 2.2;
    pCtx.stroke();
    pCtx.restore();
  } else if (motif === "kawung") {
    pCtx.fillStyle = "#f5b700";
    pCtx.strokeStyle = "#fff8eb";
    pCtx.lineWidth = 1.5;
    [
      [28, 12, 7, 11],
      [28, 44, 7, 11],
      [12, 28, 11, 7],
      [44, 28, 11, 7]
    ].forEach(([px, py, rx, ry]) => {
      pCtx.beginPath();
      pCtx.ellipse(px, py, rx, ry, 0, 0, Math.PI * 2);
      pCtx.fill();
      pCtx.stroke();
    });
    pCtx.fillStyle = "#8f291c";
    pCtx.beginPath();
    pCtx.arc(28, 28, 3.8, 0, Math.PI * 2);
    pCtx.fill();
  } else {
    pCtx.strokeStyle = "#ffd53d";
    pCtx.lineWidth = 2.2;
    pCtx.beginPath();
    pCtx.moveTo(0, 8);
    pCtx.lineTo(56, 8);
    pCtx.moveTo(0, 48);
    pCtx.lineTo(56, 48);
    pCtx.stroke();

    pCtx.beginPath();
    pCtx.moveTo(28, 13);
    pCtx.lineTo(47, 28);
    pCtx.lineTo(28, 43);
    pCtx.lineTo(9, 28);
    pCtx.closePath();
    pCtx.stroke();
  }

  const fabricPattern = ctx.createPattern(pCanvas, "repeat");

  const skinColor = "#f7c9a3";
  const skinShadow = "#e3ad84";
  const outline = "#23140c";

  ctx.save();
  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  if (model !== "dress") {
    ctx.fillStyle = "#f5efe6";
    ctx.strokeStyle = outline;
    ctx.lineWidth = 2.4;

    ctx.beginPath();
    ctx.moveTo(cx - 22, 225);
    ctx.lineTo(cx - 3, 225);
    ctx.lineTo(cx - 7, 336);
    ctx.lineTo(cx - 24, 336);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(cx + 3, 225);
    ctx.lineTo(cx + 22, 225);
    ctx.lineTo(cx + 26, 336);
    ctx.lineTo(cx + 9, 336);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  } else {
    ctx.fillStyle = skinColor;
    ctx.strokeStyle = outline;
    ctx.lineWidth = 2.2;

    ctx.fillRect(cx - 18, 280, 11, 56);
    ctx.strokeRect(cx - 18, 280, 11, 56);

    ctx.fillRect(cx + 8, 280, 11, 56);
    ctx.strokeRect(cx + 8, 280, 11, 56);
  }

  ctx.fillStyle = model === "dress" ? "#8f291c" : "#142347";
  ctx.strokeStyle = outline;
  ctx.lineWidth = 2.2;
  ctx.beginPath();
  ctx.roundRect(cx - 27, 335, 22, 14, 6);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.roundRect(cx + 7, 335, 23, 14, 6);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = skinColor;
  ctx.strokeStyle = outline;
  ctx.lineWidth = 2.3;

  ctx.beginPath();
  ctx.moveTo(cx - 34, 134);
  ctx.lineTo(cx - 52, 188);
  ctx.lineTo(cx - 42, 232);
  ctx.lineTo(cx - 33, 230);
  ctx.lineTo(cx - 40, 188);
  ctx.lineTo(cx - 26, 144);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(cx + 34, 134);
  if (model === "totebag") {
    ctx.lineTo(cx + 50, 186);
    ctx.lineTo(cx + 46, 226);
    ctx.lineTo(cx + 37, 225);
    ctx.lineTo(cx + 38, 186);
    ctx.lineTo(cx + 26, 144);
  } else {
    ctx.lineTo(cx + 56, 178);
    ctx.lineTo(cx + 34, 210);
    ctx.lineTo(cx + 28, 203);
    ctx.lineTo(cx + 44, 177);
    ctx.lineTo(cx + 26, 144);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = skinShadow;
  ctx.fillRect(cx - 8, 108, 16, 20);
  ctx.strokeRect(cx - 8, 108, 16, 20);

  ctx.fillStyle = "#2b1b12";
  ctx.beginPath();
  ctx.arc(cx, 84, 25, Math.PI, 0);
  ctx.lineTo(cx + 26, 114);
  ctx.lineTo(cx - 26, 114);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = skinColor;
  ctx.beginPath();
  ctx.ellipse(cx, 87, 20, 23, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#2b1b12";
  ctx.beginPath();
  ctx.arc(cx, 82, 21, Math.PI, 0);
  ctx.quadraticCurveTo(cx + 6, 76, cx - 4, 72);
  ctx.quadraticCurveTo(cx - 12, 77, cx - 21, 82);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#23140c";
  ctx.beginPath();
  ctx.arc(cx - 7, 87, 2.2, 0, Math.PI * 2);
  ctx.arc(cx + 7, 87, 2.2, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "rgba(229, 115, 115, 0.35)";
  ctx.beginPath();
  ctx.arc(cx - 11, 92, 3.5, 0, Math.PI * 2);
  ctx.arc(cx + 11, 92, 3.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "#8f291c";
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  ctx.arc(cx, 93, 5.5, 0.15 * Math.PI, 0.85 * Math.PI);
  ctx.stroke();

  if (model === "outer") {
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = outline;
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.moveTo(cx - 24, 126);
    ctx.lineTo(cx + 24, 126);
    ctx.lineTo(cx + 24, 226);
    ctx.lineTo(cx - 24, 226);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = fabricPattern;
    ctx.strokeStyle = outline;
    ctx.lineWidth = 2.6;

    ctx.beginPath();
    ctx.moveTo(cx - 26, 124);
    ctx.lineTo(cx - 8, 126);
    ctx.lineTo(cx - 8, 258);
    ctx.lineTo(cx - 32, 258);
    ctx.lineTo(cx - 30, 165);
    ctx.lineTo(cx - 46, 192);
    ctx.lineTo(cx - 54, 186);
    ctx.lineTo(cx - 36, 130);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(cx + 26, 124);
    ctx.lineTo(cx + 8, 126);
    ctx.lineTo(cx + 8, 258);
    ctx.lineTo(cx + 32, 258);
    ctx.lineTo(cx + 30, 165);
    ctx.lineTo(cx + 50, 184);
    ctx.lineTo(cx + 57, 176);
    ctx.lineTo(cx + 36, 130);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.strokeStyle = "#ffd53d";
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    ctx.moveTo(cx - 9, 127);
    ctx.lineTo(cx - 9, 256);
    ctx.moveTo(cx + 9, 127);
    ctx.lineTo(cx + 9, 256);
    ctx.stroke();

  } else if (model === "dress") {
    ctx.fillStyle = fabricPattern;
    ctx.strokeStyle = outline;
    ctx.lineWidth = 2.6;

    ctx.beginPath();
    ctx.moveTo(cx - 26, 125);
    ctx.quadraticCurveTo(cx, 136, cx + 26, 125);
    ctx.lineTo(cx + 38, 152);
    ctx.lineTo(cx + 28, 156);
    ctx.lineTo(cx + 23, 186);
    ctx.lineTo(cx + 58, 286);
    ctx.quadraticCurveTo(cx, 298, cx - 58, 286);
    ctx.lineTo(cx - 23, 186);
    ctx.lineTo(cx - 28, 156);
    ctx.lineTo(cx - 38, 152);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#ffd53d";
    ctx.strokeStyle = outline;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(cx - 24, 181, 48, 11, 4);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#8f291c";
    ctx.beginPath();
    ctx.arc(cx, 186.5, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

  } else {
    ctx.fillStyle = "#142347";
    ctx.strokeStyle = outline;
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    ctx.moveTo(cx - 26, 125);
    ctx.lineTo(cx + 26, 125);
    ctx.lineTo(cx + 37, 154);
    ctx.lineTo(cx + 26, 158);
    ctx.lineTo(cx + 25, 226);
    ctx.lineTo(cx - 25, 226);
    ctx.lineTo(cx - 26, 158);
    ctx.lineTo(cx - 37, 154);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    const bagX = cx + 43;
    const bagY = 236;
    ctx.strokeStyle = "#3b1b0c";
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.moveTo(bagX - 14, bagY);
    ctx.quadraticCurveTo(bagX, bagY - 26, bagX + 14, bagY);
    ctx.stroke();

    ctx.fillStyle = fabricPattern;
    ctx.strokeStyle = outline;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(bagX - 28, bagY);
    ctx.lineTo(bagX + 28, bagY);
    ctx.lineTo(bagX + 25, bagY + 66);
    ctx.lineTo(bagX - 25, bagY + 66);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#ffd53d";
    ctx.fillRect(bagX - 27, bagY, 54, 9);
    ctx.strokeRect(bagX - 27, bagY, 54, 9);
  }

  ctx.restore();

  ctx.fillStyle = "#23140c";
  ctx.font = "bold 14px Fredoka, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(designTitle, cx, H - 34);

  ctx.fillStyle = "#8f291c";
  ctx.font = "bold 11px Nunito, sans-serif";
  ctx.fillText(`Motif ${motifLabel} • Karya Siswa Kelas X`, cx, H - 17);
}

function handleWorkUpload(event) {
  const file = event.target.files[0];
  if (!file) {
    uploadedWorkDataUrl = "";
    const box = document.getElementById("previewKaryaBox");
    if (box) {
      box.innerHTML = `<span style="font-size:0.82rem;color:#6c584c;">Pratinjau foto karya akan tampil di sini</span>`;
    }
    checkAssignmentFormValidity();
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    uploadedWorkDataUrl = e.target.result;
    const box = document.getElementById("previewKaryaBox");
    if (box) {
      box.innerHTML = `<img src="${uploadedWorkDataUrl}" alt="Pratinjau Karya" style="max-height:110px;border-radius:8px;" />`;
    }
    checkAssignmentFormValidity();
  };
  reader.readAsDataURL(file);
}

function checkAssignmentFormValidity() {
  const inputNama = document.getElementById("tugasNamaSiswa");
  const inputKelas = document.getElementById("tugasKelasSiswa");
  const inputRefleksi = document.getElementById("tugasRefleksi");
  const btnKirim = document.getElementById("btnKirimTugas");

  if (!btnKirim) return;

  const nama = inputNama ? inputNama.value.trim() : "";
  const kelas = inputKelas ? inputKelas.value.trim() : "";
  const refleksi = inputRefleksi ? inputRefleksi.value.trim() : "";
  const hasPhoto = Boolean(uploadedWorkDataUrl);

  if (nama && kelas && kelas !== "X-..." && refleksi && hasPhoto) {
    btnKirim.disabled = false;
    btnKirim.style.background = "#148348";
    btnKirim.style.color = "#ffffff";
    btnKirim.style.cursor = "pointer";
    btnKirim.innerHTML = "✔ Kirim Tugas &amp; Refleksi Diri";
  } else {
    btnKirim.disabled = true;
    btnKirim.style.background = "#cccccc";
    btnKirim.style.color = "#666666";
    btnKirim.style.cursor = "not-allowed";

    let missing = [];
    if (!nama) missing.push("Nama");
    if (!kelas || kelas === "X-...") missing.push("Kelas");
    if (!refleksi) missing.push("Refleksi");
    if (!hasPhoto) missing.push("Foto Tugas");

    btnKirim.innerHTML = `🔒 Wajib Diisi: ${missing.join(", ")}`;
  }
}

const MORAL_MESSAGES_POOL = [
  {
    title: "Pelestari Warisan Leluhur",
    quote: "“Setiap goresan motif Nusantara menyimpan doa dan kearifan lokal. Dengan berkarya, kamu menjaga budaya bangsa tetap hidup di masa depan!”",
    badgeColor: "#142347",
    accentColor: "#ffd53d",
    svgIllustration: `
      <svg width="76" height="76" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#fff8eb" stroke="#23140c" stroke-width="4"/>
        <path d="M25,65 Q50,45 75,65 L75,78 Q50,58 25,78 Z" fill="#142347" stroke="#23140c" stroke-width="2.5"/>
        <path d="M32,52 Q50,35 68,52" fill="none" stroke="#8f291c" stroke-width="3" stroke-linecap="round"/>
        <circle cx="50" cy="30" r="8" fill="#ffd53d" stroke="#23140c" stroke-width="2.5"/>
        <path d="M56,28 L76,18" stroke="#8f291c" stroke-width="4" stroke-linecap="round"/>
        <path d="M42,31 Q36,34 38,40" fill="none" stroke="#ffd53d" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`
  },
  {
    title: "Inovator Fesyen Kreatif",
    quote: "“Kreativitas lahir saat tradisi bertemu inovasi. Jangan pernah ragu memadukan motif daerah dengan gaya modern yang membanggakan!”",
    badgeColor: "#8f291c",
    accentColor: "#ffd53d",
    svgIllustration: `
      <svg width="76" height="76" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#ffebee" stroke="#23140c" stroke-width="4"/>
        <path d="M36,34 L64,34 L72,74 L28,74 Z" fill="#8f291c" stroke="#23140c" stroke-width="2.5" stroke-linejoin="round"/>
        <rect x="34" y="50" width="32" height="6" fill="#ffd53d" stroke="#23140c" stroke-width="1.5"/>
        <circle cx="50" cy="22" r="6" fill="#ffd53d" stroke="#23140c" stroke-width="2"/>
        <polygon points="76,22 79,28 85,28 80,32 82,38 76,34 70,38 72,32 67,28 73,28" fill="#ffd53d" stroke="#23140c" stroke-width="1.5"/>
      </svg>`
  },
  {
    title: "Wirausahawan Muda Mandiri",
    quote: "“Karya yang indah bernilai lebih tinggi jika dikelola dengan jujur, tekun, dan perhitungan usaha yang matang. Teruslah melangkah!”",
    badgeColor: "#148348",
    accentColor: "#fff8eb",
    svgIllustration: `
      <svg width="76" height="76" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#eefbf3" stroke="#23140c" stroke-width="4"/>
        <rect x="30" y="42" width="40" height="34" rx="6" fill="#148348" stroke="#23140c" stroke-width="2.5"/>
        <path d="M40,42 Q50,24 60,42" fill="none" stroke="#23140c" stroke-width="3"/>
        <circle cx="50" cy="59" r="9" fill="#ffd53d" stroke="#23140c" stroke-width="2"/>
        <text x="50" y="63" font-size="11" font-weight="bold" text-anchor="middle" fill="#23140c">★</text>
      </svg>`
  },
  {
    title: "Generasi Cinta Budaya",
    quote: "“Bangga memakai dan menciptakan produk lokal adalah wujud nyata cinta tanah air. Jadilah inspirasi bagi teman-teman di sekitarmu!”",
    badgeColor: "#5b3a82",
    accentColor: "#ffd53d",
    svgIllustration: `
      <svg width="76" height="76" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#f3e5f5" stroke="#23140c" stroke-width="4"/>
        <ellipse cx="50" cy="30" rx="8" ry="12" fill="#ffd53d" stroke="#23140c" stroke-width="2"/>
        <ellipse cx="50" cy="70" rx="8" ry="12" fill="#ffd53d" stroke="#23140c" stroke-width="2"/>
        <ellipse cx="30" cy="50" rx="12" ry="8" fill="#ffd53d" stroke="#23140c" stroke-width="2"/>
        <ellipse cx="70" cy="50" rx="12" ry="8" fill="#ffd53d" stroke="#23140c" stroke-width="2"/>
        <circle cx="50" cy="50" r="9" fill="#8f291c" stroke="#23140c" stroke-width="2"/>
      </svg>`
  },
  {
    title: "Seniman Muda Berkarakter",
    quote: "“Kesabaran dan ketelitian dalam merancang motif melatih jiwa kita menjadi pribadi yang tangguh dan menghargai setiap proses belajar.”",
    badgeColor: "#b45309",
    accentColor: "#fff8eb",
    svgIllustration: `
      <svg width="76" height="76" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#fffbeb" stroke="#23140c" stroke-width="4"/>
        <path d="M26,54 C26,34 74,34 74,54 C74,68 60,74 52,66 C48,62 42,74 34,70 C28,67 26,60 26,54 Z" fill="#ffd53d" stroke="#23140c" stroke-width="2.5"/>
        <circle cx="40" cy="48" r="4" fill="#8f291c"/>
        <circle cx="52" cy="44" r="4" fill="#142347"/>
        <circle cx="62" cy="50" r="4" fill="#148348"/>
        <path d="M58,64 L78,30" stroke="#23140c" stroke-width="4" stroke-linecap="round"/>
      </svg>`
  }
];

let moralIndexCounter = 0;

function submitFinalAssignment() {
  const inputNama = document.getElementById("tugasNamaSiswa");
  const inputKelas = document.getElementById("tugasKelasSiswa");
  const inputRefleksi = document.getElementById("tugasRefleksi");

  const nama = inputNama ? inputNama.value.trim() : "";
  const kelas = inputKelas ? inputKelas.value.trim() : "";
  const refleksi = inputRefleksi ? inputRefleksi.value.trim() : "";

  if (!nama || !kelas || kelas === "X-..." || !refleksi || !uploadedWorkDataUrl) {
    alert("Mohon lengkapi Nama, Kelas, Refleksi Diri, dan Unggah Foto Karya terlebih dahulu!");
    return;
  }

  let works = [];
  try {
    works = JSON.parse(localStorage.getItem("motif_to_fashion_works") || "[]");
  } catch (e) {
    works = [];
  }

  const workPhoto = uploadedWorkDataUrl;
  works.unshift({ nama, kelas, refleksi, photo: workPhoto });
  localStorage.setItem("motif_to_fashion_works", JSON.stringify(works));

  const chosenMoral = MORAL_MESSAGES_POOL[moralIndexCounter % MORAL_MESSAGES_POOL.length];
  moralIndexCounter++;

  const formBox = document.querySelector(".hpp-grid") || inputNama?.closest(".hpp-grid") || document.querySelector(".interactive-zone");

  if (formBox) {
    const photoElementHTML = workPhoto ? `
      <div style="margin: 12px 0; text-align: center;">
        <span style="font-size: 0.8rem; font-weight: 800; color: #148348; display: block; margin-bottom: 6px;">📸 Pratinjau Foto Tugas &amp; Karya Anda:</span>
        <img src="${workPhoto}" alt="Karya Fesyen Siswa" style="max-height: 130px; border-radius: 10px; border: 2px solid #148348; box-shadow: 0 3px 6px rgba(0,0,0,0.1);" />
      </div>
    ` : "";

    formBox.innerHTML = `
      <div style="grid-column: span 2; background: #eefbf3; border: 3.5px solid #148348; border-radius: 18px; padding: 22px; text-align: center; font-family: 'Nunito', sans-serif; box-shadow: 0 6px 0 #23140c; margin: 10px auto; max-width: 620px;">
        <div style="font-size: 2.6rem; margin-bottom: 4px;">🎉</div>
        <h3 style="margin: 0 0 6px 0; font-family: 'Fredoka', sans-serif; font-size: 1.4rem; color: #148348;">Terima Kasih, ${nama} (${kelas})!</h3>
        <p style="margin: 0 0 12px 0; font-size: 0.92rem; color: #23140c; line-height: 1.45; font-weight: 700;">
          Tugas, foto karya fesyen Nusantara, dan refleksi diri Anda telah berhasil dikirim serta disimpan ke Galeri Kelas X.
        </p>
        <div style="background: #ffffff; border: 1.5px dashed #148348; border-radius: 12px; padding: 12px; margin-bottom: 10px; text-align: left; font-size: 0.86rem; color: #3d281c;">
          <b>Catatan Refleksi Anda:</b> "${refleksi}"
        </div>
        ${photoElementHTML}

        <div style="background: #fff8eb; border: 2.5px solid #23140c; border-radius: 16px; padding: 14px; margin-top: 14px; box-shadow: 0 4px 0 #23140c; display: flex; flex-wrap: wrap; align-items: center; gap: 14px; text-align: left;">
          <div style="flex-shrink: 0; margin: 0 auto;">
            ${chosenMoral.svgIllustration}
          </div>
          <div style="flex: 1; min-width: 210px;">
            <span style="display: inline-block; background: ${chosenMoral.badgeColor}; color: ${chosenMoral.accentColor}; font-family: 'Fredoka', sans-serif; font-size: 0.76rem; font-weight: 700; padding: 3px 10px; border-radius: 20px; border: 1.5px solid #23140c; margin-bottom: 6px;">
              ✨ Pesan Moral: ${chosenMoral.title}
            </span>
            <p style="font-size: 0.86rem; color: #23140c; font-style: italic; font-weight: 700; margin: 0; line-height: 1.45;">
              ${chosenMoral.quote}
            </p>
          </div>
        </div>
      </div>
    `;
  } else {
    alert("Terima kasih, " + nama + "! Tugas, foto karya, dan refleksi diri berhasil dikirim.");
  }
}

function openModal(id) {
  document.getElementById(id).classList.remove("hidden");
}

function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
}

function openPetunjukModal() {
  const modal = document.getElementById("petunjukModalOverlay");
  if (modal) modal.style.display = "flex";
}

function closePetunjukModal() {
  const modal = document.getElementById("petunjukModalOverlay");
  if (modal) modal.style.display = "none";
}

function openRangkumanModal() {
  let modal = document.getElementById("rangkumanModalOverlay");
  if (!modal) {
    ensureRangkumanModalInDOM();
    modal = document.getElementById("rangkumanModalOverlay");
  }
  if (modal) modal.style.display = "flex";
}

function closeRangkumanModal() {
  const modal = document.getElementById("rangkumanModalOverlay");
  if (modal) modal.style.display = "none";
}

function ensureRangkumanModalInDOM() {
  if (document.getElementById("rangkumanModalOverlay")) return;

  const modalHTML = `
    <style>
      @keyframes posterFloat {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-6px) rotate(2deg); }
      }
      @keyframes posterPulseGlow {
        0%, 100% { box-shadow: 0 4px 0 #23140c, 0 0 0 rgba(255, 213, 61, 0); }
        50% { box-shadow: 0 4px 0 #23140c, 0 0 18px rgba(255, 213, 61, 0.75); }
      }
      @keyframes posterSlideUp {
        from { opacity: 0; transform: translateY(18px) scale(0.97); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
      @keyframes cloudDrift {
        0%, 100% { transform: translateX(-4px); }
        50% { transform: translateX(4px); }
      }
      @keyframes spinSlow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      #rangkumanModalOverlay {
        position: fixed;
        inset: 0;
        background: rgba(12, 20, 41, 0.85);
        backdrop-filter: blur(5px);
        z-index: 9999;
        display: none;
        justify-content: center;
        align-items: flex-start;
        overflow-y: auto;
        padding: 20px 12px;
        box-sizing: border-box;
      }

      .poster-canvas-wrapper {
        width: 100%;
        max-width: 780px;
        background: 
          radial-gradient(circle at 15% 15%, rgba(255, 213, 61, 0.25) 0%, transparent 40%),
          radial-gradient(circle at 85% 85%, rgba(143, 41, 28, 0.15) 0%, transparent 40%),
          #fff8eb;
        border: 5px solid #23140c;
        border-radius: 26px;
        box-shadow: 0 12px 0 #23140c, 0 24px 48px rgba(0, 0, 0, 0.6);
        padding: 26px 24px 24px 24px;
        position: relative;
        font-family: 'Nunito', sans-serif;
        color: #23140c;
        animation: posterSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        overflow: hidden;
        margin: auto;
      }

      .poster-halftone {
        position: absolute;
        inset: 0;
        background-image: radial-gradient(#d4a36a 1.2px, transparent 1.2px);
        background-size: 16px 16px;
        opacity: 0.22;
        pointer-events: none;
      }

      .poster-close-fab {
        position: absolute;
        top: 14px;
        right: 14px;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background: #ffebee;
        color: #b71c1c;
        border: 3px solid #23140c;
        font-size: 1.35rem;
        font-weight: 900;
        cursor: pointer;
        box-shadow: 0 3px 0 #23140c;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.15s;
      }
      .poster-close-fab:hover {
        transform: scale(1.1) rotate(90deg);
      }

      .poster-top-banner {
        background: linear-gradient(135deg, #142347 0%, #1e3770 100%);
        border: 3.5px solid #23140c;
        border-radius: 20px;
        padding: 20px 18px;
        text-align: center;
        position: relative;
        box-shadow: 0 6px 0 #23140c;
        margin-bottom: 18px;
        z-index: 2;
      }

      .poster-ribbon-tag {
        display: inline-block;
        background: #ffd53d;
        color: #23140c;
        font-family: 'Fredoka', sans-serif;
        font-size: 0.8rem;
        font-weight: 700;
        padding: 4px 16px;
        border-radius: 20px;
        border: 2.5px solid #23140c;
        margin-bottom: 8px;
        letter-spacing: 0.6px;
        animation: posterPulseGlow 2.5s infinite;
      }

      .poster-top-banner h2 {
        font-family: 'Fredoka', sans-serif;
        font-size: clamp(1.5rem, 3.6vw, 2.2rem);
        color: #ffd53d;
        margin: 0 0 6px 0;
        text-shadow: 2.5px 2.5px 0 #23140c;
        line-height: 1.15;
      }

      .poster-top-banner p {
        color: #fff8eb;
        font-size: 0.9rem;
        font-weight: 700;
        margin: 0;
      }

      .poster-motif-strip {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        margin-bottom: 18px;
        position: relative;
        z-index: 2;
      }
      .motif-mini-badge {
        background: #ffffff;
        border: 2.5px solid #23140c;
        border-radius: 14px;
        padding: 8px 6px;
        text-align: center;
        box-shadow: 0 3px 0 #23140c;
        animation: posterFloat 4s ease-in-out infinite;
      }
      .motif-mini-badge:nth-child(2) { animation-delay: 0.6s; }
      .motif-mini-badge:nth-child(3) { animation-delay: 1.2s; }
      .motif-mini-badge:nth-child(4) { animation-delay: 1.8s; }

      .motif-mini-badge span {
        display: block;
        font-size: 0.72rem;
        font-weight: 800;
        color: #142347;
        margin-top: 4px;
      }

      .poster-cards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
        gap: 14px;
        margin-bottom: 16px;
        position: relative;
        z-index: 2;
      }

      .poster-step-card {
        border: 3px solid #23140c;
        border-radius: 16px;
        padding: 14px;
        box-shadow: 0 4px 0 #23140c;
        transition: transform 0.2s ease;
      }
      .poster-step-card:hover {
        transform: translateY(-3px);
      }

      .step-navy { background: #eef3ff; }
      .step-gold { background: #fff9db; }
      .step-maroon { background: #fdf0ef; }
      .step-green { background: #eafaf1; }

      .poster-step-head {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;
      }

      .step-num-circle {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: 2.5px solid #23140c;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.05rem;
        flex-shrink: 0;
        box-shadow: 0 2px 0 #23140c;
      }

      .poster-step-head h3 {
        font-family: 'Fredoka', sans-serif;
        font-size: 1.02rem;
        margin: 0;
        color: #142347;
      }

      .poster-step-body {
        background: #ffffff;
        border: 2px solid #23140c;
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 0.85rem;
        line-height: 1.48;
      }

      .poster-formula-banner {
        background: linear-gradient(90deg, #ffd53d 0%, #ffca28 100%);
        border: 3px solid #23140c;
        border-radius: 14px;
        padding: 12px 16px;
        margin-bottom: 16px;
        box-shadow: 0 4px 0 #23140c;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        position: relative;
        z-index: 2;
      }

      .poster-formula-pill {
        background: #142347;
        color: #ffd53d;
        padding: 6px 12px;
        border-radius: 10px;
        border: 2px solid #23140c;
        font-family: 'Fredoka', sans-serif;
        font-size: 0.85rem;
      }

      .poster-bottom-credit {
        background: #23140c;
        color: #fff8eb;
        border-radius: 12px;
        padding: 10px 14px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
        font-size: 0.78rem;
        font-weight: 700;
        position: relative;
        z-index: 2;
        margin-bottom: 14px;
      }

      .poster-bottom-actions {
        display: flex;
        gap: 10px;
        position: relative;
        z-index: 2;
      }

      .poster-btn-print {
        flex: 1;
        background: #148348;
        color: #ffffff;
        border: 2.5px solid #23140c;
        border-radius: 12px;
        padding: 12px;
        font-family: 'Fredoka', sans-serif;
        font-size: 0.98rem;
        font-weight: 700;
        cursor: pointer;
        box-shadow: 0 4px 0 #23140c;
      }
      .poster-btn-done {
        flex: 1;
        background: #142347;
        color: #ffd53d;
        border: 2.5px solid #23140c;
        border-radius: 12px;
        padding: 12px;
        font-family: 'Fredoka', sans-serif;
        font-size: 0.98rem;
        font-weight: 700;
        cursor: pointer;
        box-shadow: 0 4px 0 #23140c;
      }

      @media print {
        body * { visibility: hidden; }
        #rangkumanModalOverlay, #rangkumanModalOverlay * { visibility: visible; }
        #rangkumanModalOverlay { position: absolute; left: 0; top: 0; background: none; padding: 0; }
        .poster-canvas-wrapper { box-shadow: none; border: 3px solid #000; max-width: 100%; }
        .poster-close-fab, .poster-bottom-actions { display: none !important; }
      }
    </style>

    <div id="rangkumanModalOverlay" onclick="if(event.target === this) closeRangkumanModal()">
      <div class="poster-canvas-wrapper">
        <div class="poster-halftone"></div>
        <button type="button" class="poster-close-fab" onclick="closeRangkumanModal()" title="Tutup Poster">×</button>

        <div class="poster-top-banner">
          <span class="poster-ribbon-tag">✨ POSTER KESIMPULAN MATERI • PKWU KELAS X ✨</span>
          <h2>MOTIF TO FASHION</h2>
          <p>Jelajah Kreativitas Ragam Hias Nusantara Menuju Produk Fesyen Bernilai Jual</p>
        </div>

        <div class="poster-motif-strip">
          <div class="motif-mini-badge">
            <svg width="36" height="28" viewBox="0 0 60 40" style="animation: cloudDrift 3s ease-in-out infinite;">
              <path d="M10,30 Q15,12 30,20 Q45,12 50,30 Z" fill="#1e3a6e" stroke="#23140c" stroke-width="2.5"/>
              <path d="M16,28 Q22,18 30,23 Q38,18 44,28 Z" fill="#6eb6ff"/>
            </svg>
            <span>Mega Mendung</span>
          </div>
          <div class="motif-mini-badge">
            <svg width="36" height="28" viewBox="0 0 60 40">
              <path d="M8,32 Q22,10 34,22 T52,10" fill="none" stroke="#8f291c" stroke-width="6" stroke-linecap="round"/>
              <path d="M8,32 Q22,10 34,22 T52,10" fill="none" stroke="#ffd53d" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
            <span>Batik Parang</span>
          </div>
          <div class="motif-mini-badge">
            <svg width="36" height="28" viewBox="0 0 60 40" style="animation: spinSlow 14s linear infinite;">
              <ellipse cx="30" cy="11" rx="4" ry="7" fill="#ffd53d" stroke="#23140c" stroke-width="2"/>
              <ellipse cx="30" cy="29" rx="4" ry="7" fill="#ffd53d" stroke="#23140c" stroke-width="2"/>
              <ellipse cx="20" cy="20" rx="7" ry="4" fill="#ffd53d" stroke="#23140c" stroke-width="2"/>
              <ellipse cx="40" cy="20" rx="7" ry="4" fill="#ffd53d" stroke="#23140c" stroke-width="2"/>
              <circle cx="30" cy="20" r="3" fill="#8f291c"/>
            </svg>
            <span>Batik Kawung</span>
          </div>
          <div class="motif-mini-badge">
            <svg width="36" height="28" viewBox="0 0 60 40">
              <polygon points="30,6 46,20 30,34 14,20" fill="#148348" stroke="#23140c" stroke-width="2.5"/>
              <polygon points="30,12 39,20 30,28 21,20" fill="#ffd53d"/>
            </svg>
            <span>Tenun Ikat NTT</span>
          </div>
        </div>

        <div class="poster-cards-grid">
          <div class="poster-step-card step-navy">
            <div class="poster-step-head">
              <span class="step-num-circle" style="background:#142347; color:#ffd53d;">1</span>
              <h3>Filosofi Ragam Hias Nusantara</h3>
            </div>
            <div class="poster-step-body">
              <strong>Makna Luhur di Balik Pola:</strong> Setiap motif membawa nilai filosofis—kesabaran (<em>Mega Mendung</em>), pantang menyerah (<em>Parang</em>), kesucian diri (<em>Kawung</em>), hingga ketekunan (<em>Tenun Ikat</em>).
            </div>
          </div>

          <div class="poster-step-card step-gold">
            <div class="poster-step-head">
              <span class="step-num-circle" style="background:#ffd53d; color:#23140c;">2</span>
              <h3>Transformasi Desain Modern</h3>
            </div>
            <div class="poster-step-body">
              <strong>Inovasi Produk Fesyen:</strong> Mengadaptasi wastra tradisi ke dalam siluet modern yang diminati pasar muda seperti <em>Outer Kasual</em>, <em>Gaun Modern</em>, <em>Totebag Kanvas</em>, dan aksesoris etnik.
            </div>
          </div>

          <div class="poster-step-card step-maroon">
            <div class="poster-step-head">
              <span class="step-num-circle" style="background:#8f291c; color:#ffffff;">3</span>
              <h3>Material &amp; 4 Teknik Produksi</h3>
            </div>
            <div class="poster-step-body">
              <strong>Kualitas &amp; Keterampilan:</strong> Memilih bahan katun/sutra/kanvas terbaik serta menguasai 4 teknik utama: <strong>Membatik</strong>, <strong>Menyulam</strong>, <strong>Mencetak</strong>, dan <strong>Aplikasi Menempel</strong>.
            </div>
          </div>

          <div class="poster-step-card step-green">
            <div class="poster-step-head">
              <span class="step-num-circle" style="background:#148348; color:#ffffff;">4</span>
              <h3>Kewirausahaan &amp; Promosi</h3>
            </div>
            <div class="poster-step-body">
              <strong>Strategi Bisnis Kreatif:</strong> Menghitung modal (HPP) dan margin laba secara tepat, serta memasarkan produk lewat <em>storytelling</em> nilai budaya di pameran Expo Nusantara.
            </div>
          </div>
        </div>

        <div class="poster-formula-banner">
          <div>
            <strong style="font-size:0.9rem; color:#23140c; display:block;">💡 Rumus Kunci Kewirausahaan Fesyen:</strong>
            <span style="font-size:0.8rem; font-weight:700; color:#4a2511;">Pastikan harga jual menutup seluruh biaya produksi &amp; menghasilkan laba wajar.</span>
          </div>
          <div class="poster-formula-pill">
            Harga Jual = HPP (Bahan + Alat) + Laba (%)
          </div>
        </div>

        <div class="poster-bottom-credit">
          <span>🏫 SMA Negeri 9 Luwu Timur</span>
          <span>👩‍🏫 Guru: Ibu Aldriana Lobo</span>
          <span>🎨 Tokoh: Raka, Nabila, &amp; Dimas</span>
        </div>

        <div class="poster-bottom-actions">
          <button type="button" class="poster-btn-print" onclick="window.print()">
            🖨 Cetak / Simpan Poster PDF
          </button>
          <button type="button" class="poster-btn-done" onclick="closeRangkumanModal()">
            ✔ Tutup Poster
          </button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHTML);
}

function handleExitApp() {
  if (document.fullscreenElement) {
    document.exitFullscreen().catch(() => {});
  }
  window.close();
  setTimeout(() => {
    window.location.href = "about:blank";
  }, 200);
}

// =========================================================================
// FITUR GESER (SWIPE) LAYAR HP ANTAR HALAMAN
// =========================================================================

let touchStartX = 0;
let touchEndX = 0;
const minSwipeDistance = 50;

document.addEventListener("DOMContentLoaded", () => {
  initSwipeGesture();
});

function initSwipeGesture() {
  const pageContainer = document.getElementById("pageContainer");
  if (!pageContainer) return;

  pageContainer.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  pageContainer.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
  }, { passive: true });
}

function handleSwipeGesture() {
  const swipeDistance = touchEndX - touchStartX;

  if (Math.abs(swipeDistance) < minSwipeDistance) return;

  if (swipeDistance < 0) {
    if (currentPageIndex < COMIC_PAGES.length - 1) {
      goToPage(currentPageIndex + 1);
    }
  } else if (swipeDistance > 0) {
    if (currentPageIndex > 1) {
      goToPage(currentPageIndex - 1);
    } else if (currentPageIndex === 1) {
      goToPage(0);
    }
  }
}
