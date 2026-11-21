// GENERATOR ILUSTRASI VEKTOR (SVG) ORGANIK, HIDUP & BERDIMENSI
// Dilengkapi ragam hias Nusantara berlapis serta siluet busana & tas bertekstur lipatan kain

function getMotifPatternSVG(motifKey, uid = "p1") {
  if (motifKey === "megamendung") {
    return `
      <svg viewBox="0 0 220 140" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="mmBg-${uid}" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#0f254d"/>
            <stop offset="100%" stop-color="#1d4487"/>
          </linearGradient>
          <pattern id="mm-${uid}" width="88" height="56" patternUnits="userSpaceOnUse">
            <rect width="88" height="56" fill="url(#mmBg-${uid})"/>
            <!-- Awan Lapis Luar (Biru Cerah & Lis Putih) -->
            <path d="M4,38 C8,22 22,16 32,25 C38,14 50,14 56,25 C66,16 80,22 84,38 C74,48 58,45 44,42 C30,45 14,48 4,38 Z" fill="#2d6ec4" stroke="#cfe4ff" stroke-width="2"/>
            <!-- Awan Lapis Tengah -->
            <path d="M12,37 C16,25 26,21 35,28 C40,20 48,20 53,28 C62,21 72,25 76,37 C67,44 55,42 44,39 C33,42 21,44 12,37 Z" fill="#5aa2f8" stroke="#eaf4ff" stroke-width="1.3"/>
            <!-- Inti Awan Berkilau -->
            <path d="M22,36 C26,28 34,27 44,32 C54,27 62,28 66,36 C58,40 50,39 44,37 C38,39 30,40 22,36 Z" fill="#9fd0ff"/>
            <circle cx="44" cy="12" r="2.2" fill="#ffd53d" opacity="0.85"/>
          </pattern>
        </defs>
        <rect width="220" height="140" fill="url(#mm-${uid})"/>
      </svg>`;
  }

  if (motifKey === "parang") {
    return `
      <svg viewBox="0 0 220 140" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="pr-${uid}" width="52" height="52" patternUnits="userSpaceOnUse" patternTransform="rotate(-34)">
            <rect width="52" height="52" fill="#3b1b0c"/>
            <!-- Bilah Parang Utama -->
            <path d="M2,26 C14,6 38,46 50,26" fill="none" stroke="#f5b700" stroke-width="10" stroke-linecap="round"/>
            <path d="M2,26 C14,6 38,46 50,26" fill="none" stroke="#fff5d6" stroke-width="4" stroke-linecap="round"/>
            <path d="M2,26 C14,6 38,46 50,26" fill="none" stroke="#8f291c" stroke-width="1.4" stroke-dasharray="3 3"/>
            <!-- Mlinjon (Belah Ketupat Pemisah) & Cecek -->
            <polygon points="26,5 32,11 26,17 20,11" fill="#ffd53d" stroke="#23140c" stroke-width="1.2"/>
            <polygon points="26,35 32,41 26,47 20,41" fill="#ffd53d" stroke="#23140c" stroke-width="1.2"/>
            <circle cx="11" cy="11" r="1.6" fill="#ffd53d"/>
            <circle cx="41" cy="41" r="1.6" fill="#ffd53d"/>
          </pattern>
        </defs>
        <rect width="220" height="140" fill="url(#pr-${uid})"/>
      </svg>`;
  }

  if (motifKey === "kawung") {
    return `
      <svg viewBox="0 0 220 140" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="kw-${uid}" width="56" height="56" patternUnits="userSpaceOnUse">
            <rect width="56" height="56" fill="#4a220f"/>
            <!-- 4 Kelopak Buah Aren Simetris -->
            <ellipse cx="28" cy="13" rx="8" ry="12" fill="#f5b700" stroke="#fff8eb" stroke-width="1.8"/>
            <ellipse cx="28" cy="13" rx="3" ry="6" fill="#c98a00"/>
            <ellipse cx="28" cy="43" rx="8" ry="12" fill="#f5b700" stroke="#fff8eb" stroke-width="1.8"/>
            <ellipse cx="28" cy="43" rx="3" ry="6" fill="#c98a00"/>
            <ellipse cx="13" cy="28" rx="12" ry="8" fill="#f5b700" stroke="#fff8eb" stroke-width="1.8"/>
            <ellipse cx="13" cy="28" rx="6" ry="3" fill="#c98a00"/>
            <ellipse cx="43" cy="28" rx="12" ry="8" fill="#f5b700" stroke="#fff8eb" stroke-width="1.8"/>
            <ellipse cx="43" cy="28" rx="6" ry="3" fill="#c98a00"/>
            <!-- Inti Pusat & Isen-Isen Sudut -->
            <polygon points="28,22 34,28 28,34 22,28" fill="#8f291c" stroke="#fff8eb" stroke-width="1.3"/>
            <circle cx="28" cy="28" r="2" fill="#ffd53d"/>
            <circle cx="6" cy="6" r="2.2" fill="#ffd53d" opacity="0.8"/>
            <circle cx="50" cy="6" r="2.2" fill="#ffd53d" opacity="0.8"/>
            <circle cx="6" cy="50" r="2.2" fill="#ffd53d" opacity="0.8"/>
            <circle cx="50" cy="50" r="2.2" fill="#ffd53d" opacity="0.8"/>
          </pattern>
        </defs>
        <rect width="220" height="140" fill="url(#kw-${uid})"/>
      </svg>`;
  }

  return `
    <svg viewBox="0 0 220 140" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="tn-${uid}" width="48" height="56" patternUnits="userSpaceOnUse">
          <rect width="48" height="56" fill="#8f291c"/>
          <!-- Tekstur Benang Pakan Horizontal -->
          <line x1="0" y1="6" x2="48" y2="6" stroke="#f5b700" stroke-width="2.5"/>
          <line x1="0" y1="11" x2="48" y2="11" stroke="#ffffff" stroke-width="1" stroke-dasharray="3 2"/>
          <line x1="0" y1="45" x2="48" y2="45" stroke="#ffffff" stroke-width="1" stroke-dasharray="3 2"/>
          <line x1="0" y1="50" x2="48" y2="50" stroke="#f5b700" stroke-width="2.5"/>
          <!-- Ornamen Belah Ketupat Kaif Khas Tenun NTT -->
          <polygon points="24,13 42,28 24,43 6,28" fill="none" stroke="#ffd53d" stroke-width="3"/>
          <polygon points="24,19 35,28 24,37 13,28" fill="#142347" stroke="#ffffff" stroke-width="1.6"/>
          <circle cx="24" cy="28" r="3" fill="#ffd53d"/>
          <circle cx="5" cy="28" r="2" fill="#ffd53d"/>
          <circle cx="43" cy="28" r="2" fill="#ffd53d"/>
        </pattern>
      </defs>
      <rect width="220" height="140" fill="url(#tn-${uid})"/>
    </svg>`;
}

// =========================================================================
// LATAR BELAKANG INTERIOR RUANG KELAS SMA YANG KONSISTEN & HANGAT
// =========================================================================
function drawClassroomRoomBase({ showLeftWindow = true, showRightMap = true }) {
  return `
    <rect width="540" height="255" fill="#fbf2e1"/>
    <rect x="0" y="185" width="540" height="70" fill="#e6c79c" stroke="#8f5b2c" stroke-width="1.5"/>
    <rect x="0" y="252" width="540" height="68" fill="#d4a36a" stroke="#23140c" stroke-width="2.5"/>
    <line x1="0" y1="284" x2="540" y2="284" stroke="#b8844c" stroke-width="1.5"/>
    <line x1="135" y1="252" x2="110" y2="320" stroke="#b8844c" stroke-width="1.5"/>
    <line x1="270" y1="252" x2="270" y2="320" stroke="#b8844c" stroke-width="1.5"/>
    <line x1="405" y1="252" x2="430" y2="320" stroke="#b8844c" stroke-width="1.5"/>

    ${
      showLeftWindow
        ? `<rect x="16" y="22" width="84" height="122" rx="6" fill="#cce7ff" stroke="#5c3618" stroke-width="3.5"/>
           <path d="M22,125 Q45,105 68,125 Q85,112 96,125 L96,140 L22,140 Z" fill="#88c999"/>
           <line x1="58" y1="22" x2="58" y2="144" stroke="#5c3618" stroke-width="3"/>
           <line x1="16" y1="83" x2="100" y2="83" stroke="#5c3618" stroke-width="3"/>`
        : ""
    }

    ${
      showRightMap
        ? `<rect x="444" y="24" width="80" height="56" rx="4" fill="#fffdf9" stroke="#5c3618" stroke-width="2.5"/>
           <text x="484" y="37" text-anchor="middle" font-size="6.8" font-weight="800" fill="#142347">PETA NUSANTARA</text>
           <path d="M454,50 Q466,46 476,54 Q488,48 500,54 Q510,49 516,56" fill="none" stroke="#1d8348" stroke-width="4" stroke-linecap="round"/>
           <rect x="454" y="90" width="60" height="68" rx="4" fill="#fffdf9" stroke="#5c3618" stroke-width="2"/>
           <polygon points="484,102 500,124 484,146 468,124" fill="#8f291c" stroke="#f5b700" stroke-width="2"/>`
        : ""
    }
  `;
}

// AVATAR PROFIL BULAT EKSPRESIF
function getCharacterAvatarSVG(charKey) {
  if (charKey === "guru") {
    return `
      <svg viewBox="0 0 90 90">
        <defs>
          <radialGradient id="bgGuru" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stop-color="#fff4d4"/>
            <stop offset="100%" stop-color="#f7d08a"/>
          </radialGradient>
        </defs>
        <rect width="90" height="90" fill="url(#bgGuru)"/>
        <circle cx="45" cy="15" r="12" fill="#24150e" stroke="#180d08" stroke-width="2"/>
        <line x1="31" y1="12" x2="60" y2="18" stroke="#f5b700" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="60" cy="18" r="2.8" fill="#ffd53d"/>
        <path d="M25,42 C23,22 33,15 45,15 C57,15 67,22 65,42 C63,34 57,28 45,27 C34,27 27,34 25,42 Z" fill="#24150e"/>
        <path d="M39,52 L39,62 L51,62 L51,52 Z" fill="#f3be96"/>
        <path d="M14,90 C16,66 28,60 45,60 C62,60 74,66 76,90 Z" fill="#8f291c" stroke="#23140c" stroke-width="2.2"/>
        <path d="M36,60 L45,82 L54,60 Z" fill="#fff8eb" stroke="#23140c" stroke-width="1.6"/>
        <path d="M33,60 L41,76 L37,60 Z" fill="#f5b700" stroke="#23140c" stroke-width="1.4"/>
        <path d="M57,60 L49,76 L53,60 Z" fill="#f5b700" stroke="#23140c" stroke-width="1.4"/>
        <path d="M29,36 C29,24 36,21 45,21 C54,21 61,24 61,36 C61,48 53,55 45,55 C37,55 29,48 29,36 Z" fill="#f8c8a0" stroke="#23140c" stroke-width="2"/>
        <path d="M34,33 Q38,30 42,33" fill="none" stroke="#23140c" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M48,33 Q52,30 56,33" fill="none" stroke="#23140c" stroke-width="1.8" stroke-linecap="round"/>
        <ellipse cx="38" cy="37" rx="2.5" ry="3" fill="#23140c"/>
        <circle cx="38.8" cy="36" r="1" fill="#ffffff"/>
        <ellipse cx="52" cy="37" rx="2.5" ry="3" fill="#23140c"/>
        <circle cx="52.8" cy="36" r="1" fill="#ffffff"/>
        <ellipse cx="34" cy="42" rx="3.2" ry="1.8" fill="#f28b82" opacity="0.5"/>
        <ellipse cx="56" cy="42" rx="3.2" ry="1.8" fill="#f28b82" opacity="0.5"/>
        <path d="M39,45 Q45,51 51,45" fill="none" stroke="#8f291c" stroke-width="2.3" stroke-linecap="round"/>
      </svg>`;
  }

  if (charKey === "raka") {
    return `
      <svg viewBox="0 0 90 90">
        <rect width="90" height="90" fill="#dcebff"/>
        <path d="M39,52 L39,62 L51,62 L51,52 Z" fill="#e6b088"/>
        <path d="M14,90 C16,66 28,60 45,60 C62,60 74,66 76,90 Z" fill="#ffffff" stroke="#23140c" stroke-width="2.2"/>
        <polygon points="35,60 45,68 41,60" fill="#f1f5f9" stroke="#23140c" stroke-width="1.5"/>
        <polygon points="55,60 45,68 49,60" fill="#f1f5f9" stroke="#23140c" stroke-width="1.5"/>
        <polygon points="43,66 47,66 49,88 45,90 41,88" fill="#64748b" stroke="#23140c" stroke-width="1.5"/>
        <rect x="54" y="73" width="11" height="12" rx="2" fill="none" stroke="#94a3b8" stroke-width="1.4"/>
        <rect x="56" y="75" width="7" height="7" rx="1" fill="#1d4ed8"/>
        <circle cx="59.5" cy="78.5" r="2" fill="#facc15"/>
        <path d="M29,36 C29,24 36,21 45,21 C54,21 61,24 61,36 C61,48 53,55 45,55 C37,55 29,48 29,36 Z" fill="#eeb992" stroke="#23140c" stroke-width="2"/>
        <path d="M27,37 C26,18 37,13 47,14 C58,15 65,22 63,37 C60,29 55,27 50,31 C47,26 42,27 38,32 C34,27 30,30 27,37 Z" fill="#1e1b18" stroke="#120f0d" stroke-width="1.6"/>
        <path d="M34,34 Q38,31 42,34" fill="none" stroke="#23140c" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M48,34 Q52,31 56,34" fill="none" stroke="#23140c" stroke-width="1.8" stroke-linecap="round"/>
        <circle cx="38" cy="38" r="2.6" fill="#23140c"/>
        <circle cx="38.8" cy="37" r="0.9" fill="#ffffff"/>
        <circle cx="52" cy="38" r="2.6" fill="#23140c"/>
        <circle cx="52.8" cy="37" r="0.9" fill="#ffffff"/>
        <path d="M39,45 Q45,51 51,45" fill="#ffffff" stroke="#23140c" stroke-width="2" stroke-linecap="round"/>
      </svg>`;
  }

  if (charKey === "nabila") {
    return `
      <svg viewBox="0 0 90 90">
        <rect width="90" height="90" fill="#f3e8ff"/>
        <path d="M14,90 C16,66 28,60 45,60 C62,60 74,66 76,90 Z" fill="#ffffff" stroke="#23140c" stroke-width="2.2"/>
        <path d="M24,45 C23,21 33,15 45,15 C57,15 67,21 66,45 C67,62 61,77 45,80 C29,77 23,62 24,45 Z" fill="#ffffff" stroke="#23140c" stroke-width="2.2"/>
        <path d="M28,63 Q45,71 62,63" fill="none" stroke="#cbd5e1" stroke-width="1.8"/>
        <rect x="54" y="75" width="7" height="7" rx="1" fill="#1d4ed8"/>
        <circle cx="57.5" cy="78.5" r="2" fill="#facc15"/>
        <path d="M31,37 C31,26 37,23 45,23 C53,23 59,26 59,37 C59,47 52,54 45,54 C38,54 31,47 31,37 Z" fill="#fad2b4" stroke="#23140c" stroke-width="1.8"/>
        <path d="M35,34 Q38.5,31.5 42,34" fill="none" stroke="#23140c" stroke-width="1.7" stroke-linecap="round"/>
        <path d="M48,34 Q51.5,31.5 55,34" fill="none" stroke="#23140c" stroke-width="1.7" stroke-linecap="round"/>
        <ellipse cx="38.5" cy="38" rx="2.4" ry="2.8" fill="#23140c"/>
        <circle cx="39.2" cy="37" r="0.9" fill="#ffffff"/>
        <ellipse cx="51.5" cy="38" rx="2.4" ry="2.8" fill="#23140c"/>
        <circle cx="52.2" cy="37" r="0.9" fill="#ffffff"/>
        <ellipse cx="35" cy="42.5" rx="3" ry="1.6" fill="#f48fb1" opacity="0.5"/>
        <ellipse cx="55" cy="42.5" rx="3" ry="1.6" fill="#f48fb1" opacity="0.5"/>
        <path d="M40,45 Q45,50 50,45" fill="none" stroke="#8f291c" stroke-width="2.1" stroke-linecap="round"/>
      </svg>`;
  }

  return `
    <svg viewBox="0 0 90 90">
      <rect width="90" height="90" fill="#dcfce7"/>
      <path d="M39,52 L39,62 L51,62 L51,52 Z" fill="#dfa980"/>
      <path d="M14,90 C16,66 28,60 45,60 C62,60 74,66 76,90 Z" fill="#ffffff" stroke="#23140c" stroke-width="2.2"/>
      <polygon points="35,60 45,68 41,60" fill="#f1f5f9" stroke="#23140c" stroke-width="1.5"/>
      <polygon points="55,60 45,68 49,60" fill="#f1f5f9" stroke="#23140c" stroke-width="1.5"/>
      <polygon points="43,66 47,66 49,88 45,90 41,88" fill="#64748b" stroke="#23140c" stroke-width="1.5"/>
      <rect x="55" y="75" width="7" height="7" rx="1" fill="#1d4ed8"/>
      <path d="M29,36 C29,24 36,21 45,21 C54,21 61,24 61,36 C61,48 53,55 45,55 C37,55 29,48 29,36 Z" fill="#e6b28a" stroke="#23140c" stroke-width="2"/>
      <path d="M28,35 C28,18 37,14 46,14 C56,14 63,20 62,35 C58,27 50,25 43,27 C37,25 31,28 28,35 Z" fill="#23140c"/>
      <circle cx="38" cy="38" r="5.5" fill="rgba(255,255,255,0.25)" stroke="#142347" stroke-width="2"/>
      <circle cx="52" cy="38" r="5.5" fill="rgba(255,255,255,0.25)" stroke="#142347" stroke-width="2"/>
      <line x1="43.5" y1="38" x2="46.5" y2="38" stroke="#142347" stroke-width="2"/>
      <circle cx="38" cy="38" r="2.2" fill="#23140c"/>
      <circle cx="52" cy="38" r="2.2" fill="#23140c"/>
      <path d="M40,46 Q45,50 50,46" fill="none" stroke="#23140c" stroke-width="2.1" stroke-linecap="round"/>
    </svg>`;
}

// =========================================================================
// KOMPONEN KARAKTER FULL-BODY ORGANIK
// =========================================================================
function drawFullTeacherAldriana({ x = 80, y = 95, scale = 1, flip = false, pose = "pointRight" }) {
  const outerTransform = flip
    ? `translate(${x + 80 * scale}, ${y}) scale(${-scale}, ${scale})`
    : `translate(${x}, ${y}) scale(${scale}, ${scale})`;

  const rightArm =
    pose === "pointRight"
      ? `<path d="M56,64 C74,56 92,46 110,36" fill="none" stroke="#8f291c" stroke-width="12" stroke-linecap="round"/>
         <path d="M108,36 C114,32 121,30 125,32 C122,35 117,38 112,40 Z" fill="#f8c8a0" stroke="#23140c" stroke-width="1.8"/>`
      : pose === "clap"
      ? `<path d="M56,64 C70,74 74,84 62,88" fill="none" stroke="#8f291c" stroke-width="11" stroke-linecap="round"/>
         <circle cx="58" cy="88" r="6" fill="#f8c8a0" stroke="#23140c" stroke-width="1.8"/>`
      : `<path d="M56,64 C68,82 66,98 58,108" fill="none" stroke="#8f291c" stroke-width="11" stroke-linecap="round"/>
         <circle cx="58" cy="110" r="5.8" fill="#f8c8a0" stroke="#23140c" stroke-width="1.8"/>`;

  return `
    <g transform="${outerTransform}">
      <g class="svg-char-alive">
        <ellipse cx="40" cy="196" rx="28" ry="6" fill="rgba(35,20,12,0.2)"/>
        <path d="M29,154 L27,188 L35,188 L37,154 Z" fill="#f3be96" stroke="#23140c" stroke-width="1.8"/>
        <path d="M43,154 L45,188 L53,188 L51,154 Z" fill="#f3be96" stroke="#23140c" stroke-width="1.8"/>
        <path d="M23,188 Q31,185 38,191 L38,195 L22,195 Z" fill="#23140c"/>
        <path d="M42,191 Q49,185 57,188 L58,195 L42,195 Z" fill="#23140c"/>
        <path d="M22,102 C18,125 18,148 20,162 C32,165 48,165 60,162 C62,148 62,125 58,102 Z" fill="#2b1910" stroke="#23140c" stroke-width="2.2"/>
        <path d="M30,115 Q40,122 50,115 M28,135 Q40,142 52,135" fill="none" stroke="#f5b700" stroke-width="1.8" opacity="0.75"/>
        <path d="M23,64 C13,82 14,98 22,108" fill="none" stroke="#8f291c" stroke-width="11" stroke-linecap="round"/>
        <circle cx="22" cy="110" r="5.6" fill="#f8c8a0" stroke="#23140c" stroke-width="1.8"/>
        <path d="M21,62 C21,54 30,50 40,50 C50,50 59,54 59,62 C61,76 57,92 60,106 C47,110 33,110 20,106 C23,92 19,76 21,62 Z" fill="#8f291c" stroke="#23140c" stroke-width="2.2"/>
        <circle cx="28" cy="74" r="3" fill="#f5b700" opacity="0.8"/>
        <circle cx="52" cy="74" r="3" fill="#f5b700" opacity="0.8"/>
        <circle cx="27" cy="92" r="3" fill="#f5b700" opacity="0.8"/>
        <circle cx="53" cy="92" r="3" fill="#f5b700" opacity="0.8"/>
        <path d="M33,51 L40,80 L47,51 Z" fill="#fff8eb" stroke="#23140c" stroke-width="1.6"/>
        <path d="M30,51 L38,73 L35,51 Z" fill="#f5b700" stroke="#23140c" stroke-width="1.4"/>
        <path d="M50,51 L42,73 L45,51 Z" fill="#f5b700" stroke="#23140c" stroke-width="1.4"/>
        ${rightArm}
        <path d="M35,42 L35,52 L45,52 L45,42 Z" fill="#f3be96"/>
        <circle cx="40" cy="10" r="9.5" fill="#24150e" stroke="#140b07" stroke-width="1.8"/>
        <line x1="28" y1="8" x2="52" y2="13" stroke="#ffd53d" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M26,28 C26,17 32,14 40,14 C48,14 54,17 54,28 C54,39 47,45 40,45 C33,45 26,39 26,28 Z" fill="#f8c8a0" stroke="#23140c" stroke-width="2"/>
        <path d="M24,30 C23,16 32,12 40,12 C48,12 57,16 56,30 C53,22 47,20 40,20 C33,20 27,22 24,30 Z" fill="#24150e"/>
        <circle cx="35" cy="29" r="2.1" fill="#23140c"/>
        <circle cx="35.6" cy="28.3" r="0.7" fill="#ffffff"/>
        <circle cx="45" cy="29" r="2.1" fill="#23140c"/>
        <circle cx="45.6" cy="28.3" r="0.7" fill="#ffffff"/>
        <path d="M35,36 Q40,41 45,36" fill="none" stroke="#8f291c" stroke-width="2" stroke-linecap="round"/>
      </g>
    </g>`;
}

function drawFullStudentBoy({ x = 180, y = 102, scale = 1, flip = false, isDimas = false, pose = "stand" }) {
  const outerTransform = flip
    ? `translate(${x + 76 * scale}, ${y}) scale(${-scale}, ${scale})`
    : `translate(${x}, ${y}) scale(${scale}, ${scale})`;

  const skin = isDimas ? "#e6b28a" : "#eeb992";
  const rightArm =
    pose === "raiseHand"
      ? `<path d="M53,60 C66,46 72,32 70,18" fill="none" stroke="#ffffff" stroke-width="11" stroke-linecap="round"/>
         <path d="M53,60 C66,46 72,32 70,18" fill="none" stroke="#23140c" stroke-width="2" stroke-linecap="round"/>
         <circle cx="70" cy="15" r="5.8" fill="${skin}" stroke="#23140c" stroke-width="1.8"/>`
      : pose === "holdItem"
      ? `<path d="M53,60 C66,70 76,72 86,66" fill="none" stroke="#ffffff" stroke-width="11" stroke-linecap="round"/>
         <circle cx="88" cy="65" r="5.8" fill="${skin}" stroke="#23140c" stroke-width="1.8"/>`
      : `<path d="M53,60 C62,76 62,92 56,104" fill="none" stroke="#ffffff" stroke-width="11" stroke-linecap="round"/>
         <circle cx="56" cy="106" r="5.5" fill="${skin}" stroke="#23140c" stroke-width="1.8"/>`;

  return `
    <g transform="${outerTransform}">
      <g class="svg-char-alive-delay">
        <ellipse cx="38" cy="190" rx="26" ry="5.5" fill="rgba(35,20,12,0.2)"/>
        <path d="M23,100 L21,182 L34,182 L38,132 L42,182 L55,182 L53,100 Z" fill="#64748b" stroke="#23140c" stroke-width="2.2" stroke-linejoin="round"/>
        <path d="M18,182 Q27,179 35,184 L35,189 L17,189 Z" fill="#1e293b" stroke="#23140c" stroke-width="1.6"/>
        <path d="M41,184 Q49,179 58,182 L59,189 L41,189 Z" fill="#1e293b" stroke="#23140c" stroke-width="1.6"/>
        <rect x="22" y="98" width="32" height="5" rx="2" fill="#1e293b" stroke="#23140c" stroke-width="1.5"/>
        <path d="M22,60 C13,76 13,92 20,104" fill="none" stroke="#ffffff" stroke-width="11" stroke-linecap="round"/>
        <circle cx="20" cy="106" r="5.5" fill="${skin}" stroke="#23140c" stroke-width="1.8"/>
        <path d="M20,58 C20,51 28,48 38,48 C48,48 56,51 56,58 C57,72 55,86 55,99 L21,99 C21,86 19,72 20,58 Z" fill="#ffffff" stroke="#23140c" stroke-width="2.2"/>
        <polygon points="31,49 38,56 35,49" fill="#e2e8f0" stroke="#23140c" stroke-width="1.4"/>
        <polygon points="45,49 38,56 41,49" fill="#e2e8f0" stroke="#23140c" stroke-width="1.4"/>
        <polygon points="36,55 40,55 42,82 38,86 34,82" fill="#475569" stroke="#23140c" stroke-width="1.5"/>
        <rect x="44" y="62" width="8" height="9" rx="1.5" fill="#1d4ed8" stroke="#23140c" stroke-width="1"/>
        <circle cx="48" cy="66.5" r="2" fill="#facc15"/>
        ${rightArm}
        <path d="M33,40 L33,49 L43,49 L43,40 Z" fill="${skin}"/>
        <path d="M24,27 C24,16 30,13 38,13 C46,13 52,16 52,27 C52,38 45,44 38,44 C31,44 24,38 24,27 Z" fill="${skin}" stroke="#23140c" stroke-width="2"/>
        <path d="M22,28 C22,14 31,10 39,10 C48,10 55,15 54,28 C51,21 46,20 42,23 C38,19 34,20 30,24 C27,20 24,22 22,28 Z" fill="#1e1b18"/>
        ${
          isDimas
            ? `<circle cx="33" cy="28" r="4.5" fill="none" stroke="#142347" stroke-width="1.7"/>
               <circle cx="44" cy="28" r="4.5" fill="none" stroke="#142347" stroke-width="1.7"/>
               <line x1="37.5" y1="28" x2="39.5" y2="28" stroke="#142347" stroke-width="1.7"/>`
            : ""
        }
        <circle cx="33" cy="28" r="2" fill="#23140c"/>
        <circle cx="44" cy="28" r="2" fill="#23140c"/>
        <path d="M33,35 Q38,40 43,35" fill="none" stroke="#23140c" stroke-width="2" stroke-linecap="round"/>
      </g>
    </g>`;
}

function drawFullStudentNabila({ x = 250, y = 104, scale = 1, flip = false, pose = "holdFabric" }) {
  const outerTransform = flip
    ? `translate(${x + 76 * scale}, ${y}) scale(${-scale}, ${scale})`
    : `translate(${x}, ${y}) scale(${scale}, ${scale})`;

  const rightArm =
    pose === "holdFabric"
      ? `<path d="M52,60 C65,68 76,68 86,62" fill="none" stroke="#ffffff" stroke-width="11" stroke-linecap="round"/>
         <circle cx="88" cy="61" r="5.5" fill="#fad2b4" stroke="#23140c" stroke-width="1.8"/>`
      : `<path d="M52,60 C60,76 60,92 54,104" fill="none" stroke="#ffffff" stroke-width="11" stroke-linecap="round"/>
         <circle cx="54" cy="106" r="5.2" fill="#fad2b4" stroke="#23140c" stroke-width="1.8"/>`;

  return `
    <g transform="${outerTransform}">
      <g class="svg-char-alive">
        <ellipse cx="38" cy="188" rx="26" ry="5.5" fill="rgba(35,20,12,0.2)"/>
        <path d="M28,158 L27,181 L34,181 L35,158 Z" fill="#fad2b4" stroke="#23140c" stroke-width="1.6"/>
        <path d="M41,158 L42,181 L49,181 L48,158 Z" fill="#fad2b4" stroke="#23140c" stroke-width="1.6"/>
        <path d="M23,181 Q30,178 36,183 L36,187 L22,187 Z" fill="#1e293b"/>
        <path d="M40,183 Q46,178 53,181 L54,187 L40,187 Z" fill="#1e293b"/>
        <path d="M22,98 C18,122 16,146 18,162 C31,165 45,165 58,162 C60,146 58,122 54,98 Z" fill="#64748b" stroke="#23140c" stroke-width="2.2"/>
        <line x1="29" y1="102" x2="27" y2="162" stroke="#475569" stroke-width="1.6"/>
        <line x1="38" y1="102" x2="38" y2="163" stroke="#475569" stroke-width="1.6"/>
        <line x1="47" y1="102" x2="49" y2="162" stroke="#475569" stroke-width="1.6"/>
        <path d="M22,60 C13,76 13,92 20,104" fill="none" stroke="#ffffff" stroke-width="11" stroke-linecap="round"/>
        <circle cx="20" cy="106" r="5.2" fill="#fad2b4" stroke="#23140c" stroke-width="1.8"/>
        <path d="M20,58 C20,51 28,48 38,48 C48,48 56,51 56,58 C57,72 55,86 55,99 L21,99 C21,86 19,72 20,58 Z" fill="#ffffff" stroke="#23140c" stroke-width="2.2"/>
        <rect x="45" y="64" width="8" height="9" rx="1.5" fill="#1d4ed8" stroke="#23140c" stroke-width="1"/>
        <circle cx="49" cy="68.5" r="2" fill="#facc15"/>
        ${rightArm}
        <path d="M21,34 C20,16 28,11 38,11 C48,11 56,16 55,34 C56,48 51,61 38,63 C25,61 20,48 21,34 Z" fill="#ffffff" stroke="#23140c" stroke-width="2.1"/>
        <path d="M26,28 C26,19 31,16 38,16 C45,16 50,19 50,28 C50,37 44,43 38,43 C32,43 26,37 26,28 Z" fill="#fad2b4" stroke="#23140c" stroke-width="1.7"/>
        <circle cx="33.5" cy="28" r="2" fill="#23140c"/>
        <circle cx="42.5" cy="28" r="2" fill="#23140c"/>
        <ellipse cx="31" cy="32" rx="2.3" ry="1.2" fill="#f48fb1" opacity="0.55"/>
        <ellipse cx="45" cy="32" rx="2.3" ry="1.2" fill="#f48fb1" opacity="0.55"/>
        <path d="M34,35 Q38,39 42,35" fill="none" stroke="#8f291c" stroke-width="1.9" stroke-linecap="round"/>
      </g>
    </g>`;
}

// =========================================================================
// 11 ADEGAN PANEL KOMIK DENGAN PRODUK FESYEN & RAGAM HIAS DETAIL
// =========================================================================
function getSceneIllustrationSVG(sceneKey) {
  const scenes = {
    // HALAMAN 1: BERANDA — RUANG KELAS KREATIF PKWU
    beranda: `
      <svg viewBox="0 0 540 320">
        ${drawClassroomRoomBase({ showLeftWindow: true, showRightMap: true })}
        <rect x="115" y="18" width="312" height="122" rx="10" fill="#214e34" stroke="#5c3618" stroke-width="5"/>
        <rect x="125" y="26" width="292" height="106" rx="6" fill="#1b4332" stroke="#95d5b2" stroke-width="1.2" stroke-dasharray="4 3"/>
        <text x="271" y="54" text-anchor="middle" fill="#ffd53d" font-family="Fredoka, sans-serif" font-size="20" font-weight="700">MOTIF TO FASHION</text>
        <text x="271" y="75" text-anchor="middle" fill="#ffffff" font-family="Nunito, sans-serif" font-size="11" font-weight="800">Prakarya &amp; Kewirausahaan Kelas X SMA</text>
        <text x="271" y="95" text-anchor="middle" fill="#a7f3d0" font-family="Nunito, sans-serif" font-size="10" font-weight="700">Jelajah Kreativitas Ragam Hias Nusantara</text>
        <rect x="110" y="138" width="322" height="8" rx="3" fill="#8f5b2c" stroke="#23140c" stroke-width="1.8"/>
        <rect x="145" y="132" width="24" height="6" rx="2" fill="#142347"/>

        ${drawFullTeacherAldriana({ x: 24, y: 108, scale: 0.85, pose: "pointRight" })}
        ${drawFullStudentBoy({ x: 152, y: 114, scale: 0.84, isDimas: false, pose: "stand" })}
        ${drawFullStudentNabila({ x: 268, y: 116, scale: 0.83, pose: "holdFabric" })}
        ${drawFullStudentBoy({ x: 388, y: 114, scale: 0.84, isDimas: true, pose: "raiseHand" })}
      </svg>`,

    // HALAMAN 2 (PANEL 1): IBU GURU MENJELASKAN 4 KAIN RAGAM HIAS NUSANTARA
    panel1: `
      <svg viewBox="0 0 540 320">
        <defs>
          <pattern id="p1mm" width="32" height="22" patternUnits="userSpaceOnUse">
            <rect width="32" height="22" fill="#17376e"/>
            <path d="M2,15 Q9,5 16,12 Q23,5 30,15" fill="none" stroke="#9ec5ff" stroke-width="2.5"/>
          </pattern>
          <pattern id="p1pr" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(-32)">
            <rect width="22" height="22" fill="#4f2612"/>
            <path d="M2,11 C7,3 15,19 20,11" fill="none" stroke="#ffd53d" stroke-width="3.5"/>
          </pattern>
          <pattern id="p1kw" width="24" height="24" patternUnits="userSpaceOnUse">
            <rect width="24" height="24" fill="#8f291c"/>
            <circle cx="12" cy="5" r="4" fill="#f5b700"/><circle cx="12" cy="19" r="4" fill="#f5b700"/>
            <circle cx="5" cy="12" r="4" fill="#f5b700"/><circle cx="19" cy="12" r="4" fill="#f5b700"/>
          </pattern>
          <pattern id="p1tn" width="22" height="26" patternUnits="userSpaceOnUse">
            <rect width="22" height="26" fill="#142347"/>
            <polygon points="11,3 19,13 11,23 3,13" fill="none" stroke="#ffd53d" stroke-width="2"/>
          </pattern>
        </defs>
        ${drawClassroomRoomBase({ showLeftWindow: true, showRightMap: false })}

        <rect x="195" y="18" width="325" height="154" rx="10" fill="#214e34" stroke="#5c3618" stroke-width="5"/>
        <rect x="210" y="34" width="66" height="122" rx="6" fill="url(#p1mm)" stroke="#ffffff" stroke-width="2"/>
        <rect x="216" y="82" width="54" height="24" rx="4" fill="rgba(20,35,71,0.85)"/>
        <text x="243" y="92" text-anchor="middle" fill="#ffd53d" font-size="7.5" font-weight="800">MEGA</text>
        <text x="243" y="102" text-anchor="middle" fill="#ffffff" font-size="7.5" font-weight="800">MENDUNG</text>

        <rect x="284" y="34" width="66" height="122" rx="6" fill="url(#p1pr)" stroke="#ffffff" stroke-width="2"/>
        <rect x="290" y="82" width="54" height="24" rx="4" fill="rgba(59,27,12,0.85)"/>
        <text x="317" y="92" text-anchor="middle" fill="#ffd53d" font-size="7.5" font-weight="800">BATIK</text>
        <text x="317" y="102" text-anchor="middle" fill="#ffffff" font-size="7.5" font-weight="800">PARANG</text>

        <rect x="358" y="34" width="66" height="122" rx="6" fill="url(#p1kw)" stroke="#ffffff" stroke-width="2"/>
        <rect x="364" y="82" width="54" height="24" rx="4" fill="rgba(143,41,28,0.88)"/>
        <text x="391" y="92" text-anchor="middle" fill="#ffd53d" font-size="7.5" font-weight="800">BATIK</text>
        <text x="391" y="102" text-anchor="middle" fill="#ffffff" font-size="7.5" font-weight="800">KAWUNG</text>

        <rect x="432" y="34" width="66" height="122" rx="6" fill="url(#p1tn)" stroke="#ffffff" stroke-width="2"/>
        <rect x="438" y="82" width="54" height="24" rx="4" fill="rgba(20,35,71,0.88)"/>
        <text x="465" y="92" text-anchor="middle" fill="#ffd53d" font-size="7.5" font-weight="800">TENUN</text>
        <text x="465" y="102" text-anchor="middle" fill="#ffffff" font-size="7.5" font-weight="800">IKAT NTT</text>

        ${drawFullTeacherAldriana({ x: 46, y: 102, scale: 0.88, pose: "pointRight" })}

        <g transform="translate(212, 174)">
          <path d="M18,52 C18,45 26,42 36,42 C46,42 54,45 54,52 L56,88 L16,88 Z" fill="#ffffff" stroke="#23140c" stroke-width="2.2"/>
          <path d="M20,30 C19,14 27,10 36,10 C45,10 53,14 52,30 C53,43 48,54 36,56 C24,54 19,43 20,30 Z" fill="#ffffff" stroke="#23140c" stroke-width="2"/>
          <circle cx="36" cy="26" r="11" fill="#fad2b4" stroke="#23140c" stroke-width="1.6"/>
          <circle cx="32" cy="25" r="1.8" fill="#23140c"/>
          <circle cx="40" cy="25" r="1.8" fill="#23140c"/>
          <path d="M33,31 Q36,35 39,31" fill="none" stroke="#8f291c" stroke-width="1.8"/>
        </g>
        <g transform="translate(318, 172)">
          <path d="M18,52 C18,45 26,42 36,42 C46,42 54,45 54,52 L56,90 L16,90 Z" fill="#ffffff" stroke="#23140c" stroke-width="2.2"/>
          <polygon points="34,46 38,46 40,74 36,78 32,74" fill="#475569" stroke="#23140c" stroke-width="1.4"/>
          <circle cx="36" cy="25" r="12" fill="#eeb992" stroke="#23140c" stroke-width="1.8"/>
          <path d="M22,25 C22,12 30,9 37,9 C45,9 51,14 50,25 C46,19 38,18 32,22 Z" fill="#1e1b18"/>
          <circle cx="32" cy="25" r="1.8" fill="#23140c"/>
          <circle cx="40" cy="25" r="1.8" fill="#23140c"/>
          <path d="M33,31 Q36,35 39,31" fill="none" stroke="#23140c" stroke-width="1.8"/>
        </g>
        <g transform="translate(424, 172)">
          <path d="M18,52 C18,45 26,42 36,42 C46,42 54,45 54,52 L56,90 L16,90 Z" fill="#ffffff" stroke="#23140c" stroke-width="2.2"/>
          <polygon points="34,46 38,46 40,74 36,78 32,74" fill="#475569" stroke="#23140c" stroke-width="1.4"/>
          <circle cx="36" cy="25" r="12" fill="#e6b28a" stroke="#23140c" stroke-width="1.8"/>
          <path d="M22,25 C22,12 30,9 37,9 C45,9 51,14 50,25 Z" fill="#23140c"/>
          <circle cx="31" cy="25" r="4" fill="none" stroke="#142347" stroke-width="1.5"/>
          <circle cx="41" cy="25" r="4" fill="none" stroke="#142347" stroke-width="1.5"/>
        </g>

        <rect x="198" y="244" width="320" height="76" rx="8" fill="#b87a3d" stroke="#23140c" stroke-width="2.5"/>

        <g class="svg-bubble-alive">
          <rect x="16" y="16" width="172" height="48" rx="16" fill="#ffffff" stroke="#23140c" stroke-width="2.3"/>
          <text x="102" y="36" text-anchor="middle" font-size="10.2" font-weight="800" fill="#23140c">Wah, motif Parang &amp;</text>
          <text x="102" y="51" text-anchor="middle" font-size="10.2" font-weight="800" fill="#8f291c">Mega Mendung ini unik!</text>
        </g>
      </svg>`,

    // HALAMAN 3 (PANEL 2): 3 SISWA MENGAMATI LEMBARAN KAIN MOTIF BERLIPAT DI MEJA KELAS
    panel2: `
      <svg viewBox="0 0 540 320">
        ${drawClassroomRoomBase({ showLeftWindow: true, showRightMap: true })}
        ${drawFullStudentBoy({ x: 64, y: 80, scale: 0.87, isDimas: false, pose: "holdItem" })}
        ${drawFullStudentNabila({ x: 232, y: 82, scale: 0.87, pose: "holdFabric" })}
        ${drawFullStudentBoy({ x: 400, y: 80, scale: 0.87, flip: true, isDimas: true, pose: "holdItem" })}

        <polygon points="30,212 510,212 532,320 8,320" fill="#b87a3d" stroke="#23140c" stroke-width="3"/>
        <!-- Kain Kawung Berlipat -->
        <path d="M72,226 Q130,216 186,228 L178,292 Q128,300 66,288 Z" fill="#4a220f" stroke="#23140c" stroke-width="2.3"/>
        <ellipse cx="126" cy="244" rx="7" ry="11" fill="#f5b700" stroke="#fff8eb" stroke-width="1.4"/>
        <ellipse cx="126" cy="272" rx="7" ry="11" fill="#f5b700" stroke="#fff8eb" stroke-width="1.4"/>
        <ellipse cx="112" cy="258" rx="11" ry="7" fill="#f5b700" stroke="#fff8eb" stroke-width="1.4"/>
        <ellipse cx="140" cy="258" rx="11" ry="7" fill="#f5b700" stroke="#fff8eb" stroke-width="1.4"/>
        <circle cx="126" cy="258" r="4" fill="#8f291c"/>
        <!-- Kain Mega Mendung Berlipat -->
        <path d="M214,222 Q270,212 326,224 L318,294 Q266,302 208,292 Z" fill="#17376e" stroke="#23140c" stroke-width="2.3"/>
        <path d="M226,262 C234,244 252,240 270,252 C288,240 306,244 314,262 C300,272 284,268 270,265 C256,268 240,272 226,262 Z" fill="#5aa2f8" stroke="#cfe4ff" stroke-width="2"/>
        <!-- Kain Tenun Ikat Berlipat -->
        <path d="M354,226 Q410,216 464,228 L456,292 Q404,300 348,288 Z" fill="#8f291c" stroke="#23140c" stroke-width="2.3"/>
        <polygon points="406,236 432,258 406,280 380,258" fill="none" stroke="#ffd53d" stroke-width="3"/>
        <polygon points="406,245 422,258 406,271 390,258" fill="#142347" stroke="#ffffff" stroke-width="1.5"/>

        <g class="svg-bubble-alive">
          <rect x="172" y="14" width="196" height="48" rx="16" fill="#ffffff" stroke="#23140c" stroke-width="2.3"/>
          <text x="270" y="34" text-anchor="middle" font-size="10.5" font-weight="800" fill="#23140c">Aku pilih motif Kawung</text>
          <text x="270" y="49" text-anchor="middle" font-size="10.5" font-weight="800" fill="#8f291c">karena maknanya mendalam!</text>
        </g>
      </svg>`,

    // HALAMAN 4 (PANEL 3): PAPAN KONSEP OUTER KASUAL & TOTEBAG NUSANTARA YANG DETAIL
    panel3: `
      <svg viewBox="0 0 540 320">
        ${drawClassroomRoomBase({ showLeftWindow: true, showRightMap: false })}

        <!-- Papan Konsep Desain Produk Fesyen -->
        <rect x="336" y="28" width="188" height="184" rx="12" fill="#fffdf8" stroke="#23140c" stroke-width="3"/>
        <rect x="346" y="38" width="168" height="25" rx="8" fill="#142347" stroke="#23140c" stroke-width="2"/>
        <text x="430" y="54" text-anchor="middle" font-size="10" font-weight="800" fill="#ffd53d">KONSEP OUTER &amp; TOTEBAG</text>

        <!-- Ilustrasi Outer Kasual Mega Mendung di Papan -->
        <path d="M372,82 L386,78 L398,78 L412,82 L424,108 L414,113 L406,96 L406,154 L378,154 L378,96 L370,113 L360,108 Z" fill="#1d4487" stroke="#23140c" stroke-width="2"/>
        <path d="M388,78 L392,154 L396,78" fill="none" stroke="#ffd53d" stroke-width="2.2"/>
        <path d="M380,124 Q392,114 404,124" fill="none" stroke="#9fd0ff" stroke-width="3" stroke-linecap="round"/>
        <path d="M380,138 Q392,128 404,138" fill="none" stroke="#9fd0ff" stroke-width="3" stroke-linecap="round"/>
        <text x="392" y="170" text-anchor="middle" font-size="8.5" font-weight="800" fill="#142347">Outer Kasual</text>

        <!-- Ilustrasi Totebag Kawung di Papan -->
        <path d="M454,104 C454,82 482,82 482,104" fill="none" stroke="#5c3618" stroke-width="3.5" stroke-linecap="round"/>
        <polygon points="444,104 492,104 496,154 440,154" fill="#8f291c" stroke="#23140c" stroke-width="2"/>
        <rect x="444" y="104" width="48" height="8" fill="#142347"/>
        <circle cx="468" cy="124" r="5" fill="#f5b700"/><circle cx="468" cy="138" r="5" fill="#f5b700"/>
        <circle cx="461" cy="131" r="5" fill="#f5b700"/><circle cx="475" cy="131" r="5" fill="#f5b700"/>
        <circle cx="468" cy="131" r="2.5" fill="#fff8eb"/>
        <text x="468" y="170" text-anchor="middle" font-size="8.5" font-weight="800" fill="#8f291c">Totebag</text>

        ${drawFullStudentNabila({ x: 24, y: 92, scale: 0.85, pose: "holdFabric" })}
        ${drawFullStudentBoy({ x: 128, y: 90, scale: 0.85, isDimas: true, pose: "stand" })}
        ${drawFullStudentBoy({ x: 232, y: 88, scale: 0.86, isDimas: false, pose: "raiseHand" })}

        <rect x="18" y="226" width="504" height="94" rx="10" fill="#c9935b" stroke="#23140c" stroke-width="3"/>

        <g class="svg-bubble-alive">
          <rect x="32" y="14" width="235" height="48" rx="16" fill="#ffffff" stroke="#23140c" stroke-width="2.3"/>
          <text x="149" y="34" text-anchor="middle" font-size="10.5" font-weight="800" fill="#23140c">Bagaimana jika kita buat</text>
          <text x="149" y="49" text-anchor="middle" font-size="10.5" font-weight="800" fill="#142347">outer dan totebag kasual?</text>
        </g>
      </svg>`,

    // HALAMAN 5 (PANEL 4): LEMBAR SKETSA GAUN MODERN & PALET MOTIF DI MEJA KELAS
    panel4: `
      <svg viewBox="0 0 540 320">
        ${drawClassroomRoomBase({ showLeftWindow: true, showRightMap: true })}

        <rect x="125" y="14" width="290" height="30" rx="8" fill="#214e34" stroke="#5c3618" stroke-width="3"/>
        <text x="270" y="34" text-anchor="middle" font-family="Fredoka, sans-serif" font-size="13.5" fill="#ffd53d">PRAKTIK SKETSA &amp; POLA RAGAM HIAS</text>

        ${drawFullStudentNabila({ x: 55, y: 74, scale: 0.88, pose: "holdFabric" })}
        ${drawFullTeacherAldriana({ x: 228, y: 66, scale: 0.88, pose: "clap" })}
        ${drawFullStudentBoy({ x: 400, y: 74, scale: 0.88, flip: true, isDimas: false, pose: "holdItem" })}

        <polygon points="24,198 516,198 535,320 5,320" fill="#b87a3d" stroke="#23140c" stroke-width="3"/>
        <!-- Kertas Sketsa Gaun Modern -->
        <rect x="108" y="210" width="150" height="94" rx="8" fill="#ffffff" stroke="#23140c" stroke-width="2.5"/>
        <path d="M166,220 L180,224 L194,220 L190,244 L208,292 L152,292 L170,244 Z" fill="#2d6ec4" stroke="#23140c" stroke-width="2"/>
        <rect x="170" y="242" width="20" height="5" fill="#ffd53d"/>
        <line x1="175" y1="247" x2="167" y2="292" stroke="#142347" stroke-width="1.3"/>
        <line x1="185" y1="247" x2="193" y2="292" stroke="#142347" stroke-width="1.3"/>
        <!-- Palet Swatch Kain & Pensil Warna -->
        <rect x="284" y="212" width="142" height="90" rx="10" fill="#142347" stroke="#23140c" stroke-width="2.5"/>
        <rect x="298" y="226" width="32" height="62" rx="6" fill="#f5b700" stroke="#ffffff" stroke-width="1.5"/>
        <rect x="339" y="226" width="32" height="62" rx="6" fill="#8f291c" stroke="#ffffff" stroke-width="1.5"/>
        <rect x="380" y="226" width="32" height="62" rx="6" fill="#2d6ec4" stroke="#ffffff" stroke-width="1.5"/>
      </svg>`,

    // HALAMAN 6 (PANEL 5A): MEMILIH BAHAN KAIN, ALAT & TEKNIK PEMBUATAN
    panel6_bahan: `
      <svg viewBox="0 0 540 320">
        ${drawClassroomRoomBase({ showLeftWindow: true, showRightMap: true })}

        <rect x="115" y="12" width="310" height="46" rx="10" fill="#214e34" stroke="#5c3618" stroke-width="3.5"/>
        <text x="270" y="31" text-anchor="middle" font-family="Fredoka, sans-serif" font-size="13.5" fill="#ffd53d">BAHAN: KATUN • SUTRA • TENUN IKAT</text>
        <text x="270" y="49" text-anchor="middle" font-family="Nunito, sans-serif" font-size="10.5" font-weight="800" fill="#ffffff">Teknik: Membatik • Menyulam • Mencetak • Menempel</text>

        ${drawFullTeacherAldriana({ x: 38, y: 74, scale: 0.88, pose: "pointRight" })}
        ${drawFullStudentBoy({ x: 412, y: 78, scale: 0.88, flip: true, isDimas: true, pose: "holdItem" })}

        <rect x="120" y="222" width="300" height="98" rx="8" fill="#8f5b2c" stroke="#23140c" stroke-width="3"/>
        <rect x="155" y="148" width="48" height="86" rx="14" fill="#17376e" stroke="#23140c" stroke-width="2.5"/>
        <path d="M162,175 Q179,165 196,175 M162,198 Q179,188 196,198" fill="none" stroke="#9fd0ff" stroke-width="2.5"/>
        <rect x="212" y="138" width="48" height="96" rx="14" fill="#8f291c" stroke="#23140c" stroke-width="2.5"/>
        <polygon points="236,162 248,176 236,190 224,176" fill="none" stroke="#ffd53d" stroke-width="2.5"/>
        <rect x="269" y="152" width="48" height="82" rx="14" fill="#f5b700" stroke="#23140c" stroke-width="2.5"/>
        <circle cx="293" cy="182" r="8" fill="#4a220f"/>
        <rect x="332" y="185" width="32" height="45" rx="6" fill="#ffd53d" stroke="#23140c" stroke-width="2.2"/>
      </svg>`,

    // HALAMAN 7 (PANEL 5B): MEREKAM TUTORIAL PEMBUATAN KARYA DI MEJA KELAS
    panel5: `
      <svg viewBox="0 0 540 320">
        ${drawClassroomRoomBase({ showLeftWindow: true, showRightMap: true })}

        ${drawFullStudentBoy({ x: 30, y: 84, scale: 0.86, isDimas: true, pose: "holdItem" })}
        ${drawFullStudentBoy({ x: 132, y: 84, scale: 0.86, isDimas: false, pose: "holdItem" })}
        ${drawFullStudentNabila({ x: 412, y: 86, scale: 0.86, flip: true, pose: "holdFabric" })}

        <rect x="15" y="228" width="510" height="92" rx="8" fill="#c9935b" stroke="#23140c" stroke-width="3"/>

        <path d="M312,158 Q352,148 388,158 L394,218 Q354,226 306,216 Z" fill="#1d4487" stroke="#23140c" stroke-width="2.5"/>
        <path d="M322,188 C332,172 344,170 352,180 C360,170 372,172 382,188" fill="none" stroke="#ffd53d" stroke-width="4" stroke-linecap="round"/>

        <line x1="252" y1="176" x2="226" y2="255" stroke="#23140c" stroke-width="4"/>
        <line x1="252" y1="176" x2="278" y2="255" stroke="#23140c" stroke-width="4"/>
        <rect x="232" y="140" width="40" height="36" rx="8" fill="#142347" stroke="#23140c" stroke-width="2.5"/>
        <circle cx="252" cy="158" r="8" fill="#ffd53d"/>

        <g class="svg-bubble-alive">
          <rect x="155" y="14" width="235" height="48" rx="16" fill="#ffffff" stroke="#23140c" stroke-width="2.3"/>
          <text x="272" y="34" text-anchor="middle" font-size="10.5" font-weight="800" fill="#23140c">Halo teman-teman, beginilah cara</text>
          <text x="272" y="49" text-anchor="middle" font-size="10.5" font-weight="800" fill="#1d8348">membuat produk fesyen kita!</text>
        </g>
      </svg>`,

    // HALAMAN 8 (PANEL 6): KUIS TANTANGAN KREATIVITAS DI LAYAR DEPAN KELAS
    panel6: `
      <svg viewBox="0 0 540 320">
        ${drawClassroomRoomBase({ showLeftWindow: false, showRightMap: false })}

        <rect x="24" y="24" width="232" height="150" rx="12" fill="#142347" stroke="#5c3618" stroke-width="4"/>
        <rect x="40" y="40" width="88" height="66" rx="8" fill="#1d4487" stroke="#ffffff" stroke-width="2"/>
        <path d="M52,82 C60,64 74,62 84,72 C94,62 108,64 116,82 Z" fill="#5aa2f8" stroke="#cfe4ff" stroke-width="1.5"/>
        <text x="84" y="98" text-anchor="middle" fill="#ffd53d" font-size="8.5" font-weight="800">MEGA MENDUNG</text>
        <rect x="140" y="42" width="102" height="18" rx="6" fill="#f5b700"/>
        <rect x="140" y="68" width="102" height="18" rx="6" fill="#1d8348"/>
        <rect x="140" y="94" width="102" height="18" rx="6" fill="#8f291c"/>

        ${drawFullTeacherAldriana({ x: 280, y: 92, scale: 0.86, flip: true, pose: "pointRight" })}
        ${drawFullStudentBoy({ x: 418, y: 96, scale: 0.86, isDimas: false, pose: "raiseHand" })}

        <g class="svg-bubble-alive">
          <rect x="275" y="14" width="242" height="48" rx="16" fill="#ffffff" stroke="#23140c" stroke-width="2.3"/>
          <text x="396" y="34" text-anchor="middle" font-size="10.5" font-weight="800" fill="#5b3a82">Kuis seru! Dari daerah manakah</text>
          <text x="396" y="49" text-anchor="middle" font-size="10.5" font-weight="800" fill="#23140c">asal motif Mega Mendung?</text>
        </g>
      </svg>`,

    // HALAMAN 9 (PANEL 7): PAMERAN EXPO NUSANTARA DENGAN MANEKIN OUTER & GAUN
    panel7: `
      <svg viewBox="0 0 540 320">
        ${drawClassroomRoomBase({ showLeftWindow: false, showRightMap: false })}

        <rect x="20" y="24" width="225" height="196" rx="12" fill="#fffdf8" stroke="#23140c" stroke-width="3"/>
        <rect x="34" y="34" width="197" height="28" rx="8" fill="#142347"/>
        <text x="132" y="52" text-anchor="middle" fill="#ffd53d" font-size="9.5" font-weight="800">EXPO NUSANTARA: MOTIF TO FASHION</text>

        <!-- Display Manekin Outer Mega Mendung -->
        <rect x="44" y="72" width="82" height="134" rx="8" fill="#eef5ff" stroke="#23140c" stroke-width="2"/>
        <line x1="85" y1="158" x2="85" y2="188" stroke="#4a2410" stroke-width="3"/>
        <ellipse cx="85" cy="188" rx="16" ry="4" fill="#4a2410"/>
        <path d="M68,90 L80,86 L90,86 L102,90 L112,114 L103,118 L96,102 L96,158 L74,158 L74,102 L67,118 L58,114 Z" fill="#1d4487" stroke="#23140c" stroke-width="1.8"/>
        <line x1="85" y1="86" x2="85" y2="158" stroke="#ffd53d" stroke-width="2"/>
        <path d="M76,126 Q85,118 94,126 M76,142 Q85,134 94,142" fill="none" stroke="#9fd0ff" stroke-width="2.5"/>

        <!-- Display Manekin Gaun Tenun Nusantara -->
        <rect x="138" y="72" width="82" height="134" rx="8" fill="#fff3e6" stroke="#23140c" stroke-width="2"/>
        <line x1="179" y1="164" x2="179" y2="188" stroke="#4a2410" stroke-width="3"/>
        <ellipse cx="179" cy="188" rx="16" ry="4" fill="#4a2410"/>
        <path d="M167,88 L179,93 L191,88 L188,112 L204,164 L154,164 L170,112 Z" fill="#8f291c" stroke="#23140c" stroke-width="1.8"/>
        <rect x="170" y="110" width="18" height="4.5" fill="#ffd53d"/>
        <polygon points="179,126 189,138 179,150 169,138" fill="none" stroke="#ffd53d" stroke-width="2"/>

        ${drawFullTeacherAldriana({ x: 268, y: 92, scale: 0.88, pose: "clap" })}
        ${drawFullStudentBoy({ x: 408, y: 96, scale: 0.88, isDimas: true, pose: "stand" })}

        <g class="svg-bubble-alive">
          <rect x="268" y="14" width="242" height="48" rx="16" fill="#ffffff" stroke="#23140c" stroke-width="2.3"/>
          <text x="389" y="34" text-anchor="middle" font-size="10.5" font-weight="800" fill="#23140c">Karya teman-teman kreatif</text>
          <text x="389" y="49" text-anchor="middle" font-size="10.5" font-weight="800" fill="#8f291c">dan rapi sekali!</text>
        </g>
      </svg>`,

    // HALAMAN 10 (PANEL 8): PRESENTASI BUSANA KARYA DI DEPAN KELAS
    panel8: `
      <svg viewBox="0 0 540 320">
        ${drawClassroomRoomBase({ showLeftWindow: true, showRightMap: false })}

        <rect x="112" y="20" width="195" height="110" rx="8" fill="#214e34" stroke="#5c3618" stroke-width="4"/>
        <text x="209" y="52" text-anchor="middle" fill="#ffd53d" font-family="Fredoka, sans-serif" font-size="13">PRESENTASI KARYA</text>
        <text x="209" y="72" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="800">Fesyen Ragam Hias Nusantara</text>

        ${drawFullStudentNabila({ x: 55, y: 90, scale: 0.88, pose: "holdFabric" })}
        ${drawFullStudentBoy({ x: 185, y: 88, scale: 0.88, isDimas: false, pose: "raiseHand" })}
        ${drawFullTeacherAldriana({ x: 405, y: 92, scale: 0.88, flip: true, pose: "clap" })}

        <g class="svg-bubble-alive">
          <rect x="292" y="14" width="228" height="60" rx="16" fill="#ffffff" stroke="#23140c" stroke-width="2.3"/>
          <text x="406" y="34" text-anchor="middle" font-size="10.2" font-weight="800" fill="#8f291c">Luar biasa! Kreatif,</text>
          <text x="406" y="49" text-anchor="middle" font-size="10.2" font-weight="800" fill="#23140c">bernilai jual, dan</text>
          <text x="406" y="64" text-anchor="middle" font-size="10.2" font-weight="800" fill="#1d8348">melestarikan budaya!</text>
        </g>
      </svg>`,

    // HALAMAN 11: GALERI KARYA FESYEN DENGAN SILUET GAUN, OUTER & TOTEBAG YANG HIDUP
    panel11_galeri: `
      <svg viewBox="0 0 540 320">
        <defs>
          <!-- Pola Parang untuk Gaun -->
          <pattern id="galParang" width="28" height="28" patternUnits="userSpaceOnUse" patternTransform="rotate(-32)">
            <rect width="28" height="28" fill="#4a220f"/>
            <path d="M2,14 C9,3 19,25 26,14" fill="none" stroke="#f5b700" stroke-width="5" stroke-linecap="round"/>
            <path d="M2,14 C9,3 19,25 26,14" fill="none" stroke="#fff5d6" stroke-width="2" stroke-linecap="round"/>
            <polygon points="14,3 17,6 14,9 11,6" fill="#ffd53d"/>
          </pattern>
          <!-- Pola Mega Mendung untuk Outer -->
          <pattern id="galMendung" width="44" height="30" patternUnits="userSpaceOnUse">
            <rect width="44" height="30" fill="#16356b"/>
            <path d="M2,20 C6,11 14,9 22,15 C30,9 38,11 42,20 C35,26 28,24 22,22 C16,24 9,26 2,20 Z" fill="#3a82df" stroke="#cfe4ff" stroke-width="1.4"/>
            <path d="M10,20 C14,14 19,14 22,17 C25,14 30,14 34,20 Z" fill="#9fd0ff"/>
          </pattern>
          <!-- Pola Kawung untuk Totebag -->
          <pattern id="galKawung" width="32" height="32" patternUnits="userSpaceOnUse">
            <rect width="32" height="32" fill="#8f291c"/>
            <ellipse cx="16" cy="7" rx="4.5" ry="7" fill="#f5b700" stroke="#fff8eb" stroke-width="1.2"/>
            <ellipse cx="16" cy="25" rx="4.5" ry="7" fill="#f5b700" stroke="#fff8eb" stroke-width="1.2"/>
            <ellipse cx="7" cy="16" rx="7" ry="4.5" fill="#f5b700" stroke="#fff8eb" stroke-width="1.2"/>
            <ellipse cx="25" cy="16" rx="7" ry="4.5" fill="#f5b700" stroke="#fff8eb" stroke-width="1.2"/>
            <circle cx="16" cy="16" r="2.8" fill="#142347"/>
          </pattern>
        </defs>

        ${drawClassroomRoomBase({ showLeftWindow: false, showRightMap: false })}

        <rect x="85" y="10" width="370" height="32" rx="8" fill="#142347" stroke="#23140c" stroke-width="2.5"/>
        <text x="270" y="31" text-anchor="middle" font-family="Fredoka, sans-serif" font-size="14.5" fill="#ffd53d">GALERI KARYA MOTIF TO FASHION</text>

        <!-- KARTU 1: GAUN PARANG MODERN -->
        <rect x="34" y="52" width="146" height="222" rx="14" fill="#fffdf8" stroke="#23140c" stroke-width="3"/>
        <rect x="44" y="62" width="126" height="162" rx="10" fill="#fdf1d8"/>
        <!-- Gantungan Hanger Kayu -->
        <path d="M107,68 C107,63 113,63 112,68 L107,73" fill="none" stroke="#8f5b2c" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M84,84 Q107,72 130,84" fill="none" stroke="#8f5b2c" stroke-width="3.5" stroke-linecap="round"/>
        <!-- Siluet Gaun A-Line -->
        <path d="M90,84 L100,90 L107,96 L114,90 L124,84 L121,122 L146,210 Q107,220 68,210 L93,122 Z" fill="url(#galParang)" stroke="#23140c" stroke-width="2.2" stroke-linejoin="round"/>
        <!-- Sabuk Obi Emas & Lipatan Rok -->
        <rect x="92" y="119" width="30" height="8" rx="2" fill="#f5b700" stroke="#23140c" stroke-width="1.5"/>
        <polygon points="107,118 112,123 107,128 102,123" fill="#8f291c" stroke="#ffffff" stroke-width="1"/>
        <path d="M99,127 L86,212 M107,127 L107,214 M115,127 L128,212" stroke="rgba(20,10,5,0.35)" stroke-width="2"/>
        <rect x="52" y="232" width="110" height="30" rx="8" fill="#4a220f"/>
        <text x="107" y="246" text-anchor="middle" font-size="10.5" font-weight="800" fill="#ffd53d">Gaun Parang</text>
        <text x="107" y="257" text-anchor="middle" font-size="8" font-weight="700" fill="#ffffff">Siluet A-Line &amp; Sabuk Obi</text>

        <!-- KARTU 2: OUTER MEGA MENDUNG -->
        <rect x="197" y="52" width="146" height="222" rx="14" fill="#fffdf8" stroke="#23140c" stroke-width="3"/>
        <rect x="207" y="62" width="126" height="162" rx="10" fill="#eaf3ff"/>
        <!-- Hanger -->
        <path d="M270,68 C270,63 276,63 275,68 L270,73" fill="none" stroke="#8f5b2c" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M244,84 Q270,72 296,84" fill="none" stroke="#8f5b2c" stroke-width="3.5" stroke-linecap="round"/>
        <!-- Siluet Outer Kasual Kimono -->
        <path d="M244,84 L261,80 L279,80 L296,84 L322,128 L307,138 L294,112 L294,210 L246,210 L246,112 L233,138 L218,128 Z" fill="url(#galMendung)" stroke="#23140c" stroke-width="2.2" stroke-linejoin="round"/>
        <!-- Kerah Lapel Navy & Lis Emas -->
        <polygon points="261,80 270,136 270,210 264,210 256,82" fill="#142347" stroke="#ffd53d" stroke-width="1.3"/>
        <polygon points="279,80 270,136 270,210 276,210 284,82" fill="#142347" stroke="#ffd53d" stroke-width="1.3"/>
        <!-- Saku Tempel -->
        <rect x="250" y="164" width="14" height="18" rx="3" fill="rgba(20,35,71,0.55)" stroke="#ffd53d" stroke-width="1.3"/>
        <rect x="276" y="164" width="14" height="18" rx="3" fill="rgba(20,35,71,0.55)" stroke="#ffd53d" stroke-width="1.3"/>
        <rect x="215" y="232" width="110" height="30" rx="8" fill="#142347"/>
        <text x="270" y="246" text-anchor="middle" font-size="10.5" font-weight="800" fill="#ffd53d">Outer Mendung</text>
        <text x="270" y="257" text-anchor="middle" font-size="8" font-weight="700" fill="#ffffff">Kimono Kasual &amp; Lis Emas</text>

        <!-- KARTU 3: TOTEBAG KAWUNG 3D -->
        <rect x="360" y="52" width="146" height="222" rx="14" fill="#fffdf8" stroke="#23140c" stroke-width="3"/>
        <rect x="370" y="62" width="126" height="162" rx="10" fill="#fff3e6"/>
        <!-- Tali Bahu Kulit Melengkung -->
        <path d="M408,118 C408,78 454,78 454,118" fill="none" stroke="#4a220f" stroke-width="6" stroke-linecap="round"/>
        <path d="M408,118 C408,78 454,78 454,118" fill="none" stroke="#f5b700" stroke-width="1.4" stroke-dasharray="3 3"/>
        <!-- Badan Totebag 3D (Sisi Samping + Muka Depan) -->
        <polygon points="468,116 478,122 474,210 464,214" fill="#59170f" stroke="#23140c" stroke-width="2"/>
        <polygon points="394,116 468,116 464,214 398,214" fill="url(#galKawung)" stroke="#23140c" stroke-width="2.2" stroke-linejoin="round"/>
        <!-- Lis Atas & Paku Keling Emas -->
        <rect x="394" y="116" width="74" height="12" fill="#142347" stroke="#23140c" stroke-width="1.8"/>
        <circle cx="408" cy="122" r="2.5" fill="#ffd53d"/>
        <circle cx="454" cy="122" r="2.5" fill="#ffd53d"/>
        <!-- Gantungan Tassel Emas -->
        <line x1="456" y1="122" x2="462" y2="140" stroke="#ffd53d" stroke-width="2"/>
        <polygon points="462,138 457,154 467,154" fill="#f5b700" stroke="#23140c" stroke-width="1.3"/>
        <rect x="378" y="232" width="110" height="30" rx="8" fill="#8f291c"/>
        <text x="433" y="246" text-anchor="middle" font-size="10.5" font-weight="800" fill="#ffd53d">Totebag Kawung</text>
        <text x="433" y="257" text-anchor="middle" font-size="8" font-weight="700" fill="#ffffff">Kanvas Tebal &amp; Tassel Emas</text>
      </svg>`
  };

  return scenes[sceneKey] || scenes.beranda;
}