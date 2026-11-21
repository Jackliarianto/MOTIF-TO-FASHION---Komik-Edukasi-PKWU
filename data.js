// DATA UTAMA KOMIK DIGITAL PRAKARYA & KEWIRAUSAHAAN KELAS X
// 4 Karakter Saja: 1 Ibu Guru SMA (Aldriana Lobo) + 3 Siswa SMA (Raka, Nabila, Dimas)

const CHARACTERS = {
  guru: {
    id: "guru",
    name: "Ibu Aldriana Lobo",
    age: "49 Tahun",
    role: "Guru SMA",
    traits: "Wibawa, mengayomi, sabar, dan kreatif dalam membimbing siswa mengeksplorasi budaya Nusantara.",
    roleClass: "role-guru",
    speakerClass: "speaker-guru",
    isTeacher: true,
    intro:
      "Selamat pagi anak-anak hebat Kelas X! Perkenalkan, saya Ibu Aldriana Lobo, guru Prakarya dan Kewirausahaan kalian di SMA. Mari kita jelajahi ragam hias Nusantara dan mengubahnya menjadi produk fesyen yang kreatif dan bernilai jual!"
  },
  raka: {
    id: "raka",
    name: "Raka Pratama",
    age: "16 Tahun",
    role: "Siswa Kelas X",
    traits: "Antusias, berjiwa pemimpin, menyukai desain modern, dan aktif dalam kerja kelompok.",
    roleClass: "role-siswa1",
    speakerClass: "speaker-raka",
    isTeacher: false,
    intro:
      "Halo teman-teman! Saya Raka Pratama, siswa Kelas X. Bersama Ibu Aldriana Lobo, saya bertugas merancang konsep produk fesyen kekinian seperti outer dan totebag kasual dengan motif Nusantara."
  },
  nabila: {
    id: "nabila",
    name: "Nabila Azzahra",
    age: "16 Tahun",
    role: "Siswi Kelas X",
    traits: "Teliti, tekun, berjiwa seni tinggi, dan menyukai filosofi mendalam di balik motif wastra.",
    roleClass: "role-siswa2",
    speakerClass: "speaker-nabila",
    isTeacher: false,
    intro:
      "Hai semuanya! Nama saya Nabila Azzahra dari Kelas X. Saya hobi menggambar sketsa busana dan mempelajari filosofi di balik motif batik seperti Kawung dan Mega Mendung."
  },
  dimas: {
    id: "dimas",
    name: "Dimas Saputra",
    age: "16 Tahun",
    role: "Siswa Kelas X",
    traits: "Cekatan, analitis, teliti menghitung biaya (HPP), dan handal dalam dokumentasi digital serta promosi.",
    roleClass: "role-siswa3",
    speakerClass: "speaker-dimas",
    isTeacher: false,
    intro:
      "Salam kreatif! Saya Dimas Saputra, siswa Kelas X. Di kelompok ini, saya mendokumentasikan proses pembuatan karya, menghitung estimasi biaya usaha, dan mempromosikan produk kami."
  }
};

const MOTIF_ENCYCLOPEDIA = [
  {
    id: "megamendung",
    name: "Mega Mendung",
    origin: "Cirebon, Jawa Barat",
    colors: "Biru Gradasi, Putih, Merah Sogan",
    philosophy:
      "Melambangkan keteduhan hati, kesabaran, dan sifat pemimpin yang mengayomi layaknya awan pembawa hujan yang menyuburkan kehidupan.",
    fashionIdea: "Outer kasual, kemeja modern, dan syal elegan."
  },
  {
    id: "parang",
    name: "Batik Parang",
    origin: "Surakarta & Yogyakarta (Jawa)",
    colors: "Cokelat Sogan, Hitam, Krem Gading",
    philosophy:
      "Bentuk huruf 'S' yang berkesinambungan seperti ombak samudra melambangkan semangat pantang menyerah dan kesinambungan perjuangan.",
    fashionIdea: "Gaun semi-formal, blazer modern, dan dasi kupu-kupu."
  },
  {
    id: "kawung",
    name: "Batik Kawung",
    origin: "Yogyakarta",
    colors: "Cokelat Tua, Emas Mustard, Krem",
    philosophy:
      "Terinspirasi dari buah aren (kolang-kaling) yang tersusun simetris; bermakna kesucian hati, pengendalian diri, dan keadilan.",
    fashionIdea: "Totebag kasual, rompi etnik, dan tas tangan."
  },
  {
    id: "tenun",
    name: "Tenun Ikat",
    origin: "Nusa Tenggara (NTT / NTB)",
    colors: "Merah Bata, Kuning Emas, Hitam, Indigo",
    philosophy:
      "Pola geometris belah ketupat dan garis tegas mencerminkan keteguhan adat, persatuan masyarakat, serta keharmonisan dengan alam.",
    fashionIdea: "Rompi tenun modern, tas selempang, dan ikat pinggang etnik."
  }
];

const QUIZ_QUESTIONS = [
  {
    question: "Motif Kawung merupakan salah satu motif batik klasik yang berasal dari daerah ....",
    motifKey: "kawung",
    options: ["Bali", "Yogyakarta", "Papua", "Sumatera Barat"],
    correctIndex: 1,
    explanation: "Tepat! Motif Kawung berasal dari Yogyakarta dan terinspirasi dari irisan buah aren (kolang-kaling) yang melambangkan kesucian hati."
  },
  {
    question: "Dari daerah manakah asal motif Mega Mendung yang memiliki ciri khas bentuk awan bergradasi biru?",
    motifKey: "megamendung",
    options: ["Cirebon, Jawa Barat", "Pekalongan, Jawa Tengah", "Banyuwangi, Jawa Timur", "Kupang, NTT"],
    correctIndex: 0,
    explanation: "Benar! Motif Mega Mendung adalah mahakarya khas Cirebon, Jawa Barat yang melambangkan keteduhan dan kesabaran."
  },
  {
    question: "Dalam proses transformasi motif menjadi ide produk fesyen PKWU, apa langkah awal sebelum membuat pola kain?",
    motifKey: "parang",
    options: [
      "Langsung menjual produk tanpa kemasan",
      "Mengamati bentuk, warna, garis, dan membuat sketsa rancangan",
      "Menghapus nilai filosofi motif daerah",
      "Membeli mesin pabrik berukuran besar"
    ],
    correctIndex: 1,
    explanation: "Hebat! Mengamati elemen visual motif lalu menuangkannya ke dalam sketsa membantu menentukan letak ragam hias yang proporsional."
  },
  {
    question: "Manakah kombinasi bahan dan teknik yang tepat untuk membuat produk fesyen ragam hias Nusantara?",
    motifKey: "tenun",
    options: [
      "Kain katun/sutra/tenun dengan teknik membatik, menyulam, mencetak, atau menempel",
      "Kertas koran dengan teknik las listrik",
      "Plastik kemasan dengan teknik cor logam",
      "Kaca bening dengan teknik ukir kayu"
    ],
    correctIndex: 0,
    explanation: "Sempurna! Bahan tekstil seperti katun, sutra, dan tenun sangat sesuai dipadukan dengan teknik membatik, menyulam, mencetak, maupun menempel."
  },
  {
    question: "Mengapa produk fesyen berbasis ragam hias Nusantara memiliki nilai kewirausahaan yang tinggi?",
    motifKey: "megamendung",
    options: [
      "Karena hanya bisa dipakai saat upacara adat saja",
      "Karena memadukan keunikan cerita budaya lokal dengan desain modern yang diminati pasar",
      "Karena tidak memerlukan perhitungan biaya produksi",
      "Karena semua motif memiliki arti yang sama"
    ],
    correctIndex: 1,
    explanation: "Luar biasa! Nilai cerita budaya (storytelling) ditambah desain fesyen fungsional meningkatkan daya tarik dan nilai jual produk."
  }
];

const COMIC_PAGES = [
  {
    pageNumber: 0,
    shortTitle: "Sampul",
    stepLabel: "Beranda Utama",
    type: "beranda"
  },
  {
    pageNumber: 1,
    shortTitle: "Mengenal Ragam Hias",
    stepLabel: "1. Mengenal Ragam Hias Nusantara",
    tagline: "Setiap motif memiliki bentuk, makna, dan cerita budaya daerah asalnya.",
    panelCaption: "PANEL 1 — Pengenalan Ragam Hias di Ruang Kelas",
    illustrationKey: "panel1",
    dialogues: [
      { char: "guru", text: "Selamat pagi anak-anak hebat! Hari ini pada pelajaran Prakarya dan Kewirausahaan, kita akan mengenal ragam hias Nusantara yang siap diubah menjadi produk fesyen kreatif." },
      { char: "nabila", text: "Wah, motif Parang dan Mega Mendung yang Ibu Aldriana Lobo pajang di papan tulis ini unik dan indah sekali!" },
      { char: "raka", text: "Benar, Bu! Garis lengkung awan biru dan perpaduan warna cokelat sogannya terlihat sangat elegan." },
      { char: "dimas", text: "Tenun Ikat dari Nusa Tenggara di sebelah kanan juga punya pola geometris yang keren kalau dijadikan aksesori modern!" }
    ],
    interactiveType: "motifCards"
  },
  {
    pageNumber: 2,
    shortTitle: "Eksplorasi Inspirasi",
    stepLabel: "2. Eksplorasi Inspirasi Motif",
    tagline: "Amati bentuk, warna, garis, dan pola untuk menemukan motif favoritmu!",
    panelCaption: "PANEL 2 — Mengamati Lembaran Kain Motif di Meja Kelas",
    illustrationKey: "panel2",
    dialogues: [
      { char: "guru", text: "Silakan amati contoh kain wastra di meja kalian. Perhatikan empat unsur utamanya: bentuk, warna, garis, dan polanya sebelum memilih motif favorit." },
      { char: "nabila", text: "Aku pilih motif Kawung karena maknanya mendalam, melambangkan kesucian hati dan keseimbangan!" },
      { char: "raka", text: "Kalau aku tertarik pada gradasi biru Mega Mendung. Polanya dinamis dan cocok untuk gaya anak muda SMA." },
      { char: "dimas", text: "Aku sudah mencatat detail garis dan warna keempat motif ini untuk referensi desain kelompok kita." }
    ],
    interactiveType: "checklistMotif"
  },
  {
    pageNumber: 3,
    shortTitle: "Ide Desain Fesyen",
    stepLabel: "3. Dari Motif Menjadi Ide Desain",
    tagline: "Transformasi ragam hias tradisional menjadi produk fesyen kekinian.",
    panelCaption: "PANEL 3 — Diskusi Brainstorming Konsep 'Motif to Fashion'",
    illustrationKey: "panel3",
    dialogues: [
      { char: "raka", text: "Teman-teman, bagaimana jika kita buat outer dan totebag kasual dengan perpaduan motif Kawung dan Mega Mendung?" },
      { char: "nabila", text: "Ide bagus, Raka! Kita juga bisa menambahkan aksesoris seperti syal dan dasi kupu-kupu agar koleksinya lengkap." },
      { char: "dimas", text: "Setuju! Outer kasual dan totebag sangat diminati pelajar maupun mahasiswa, jadi peluang pasarnya tinggi." },
      { char: "guru", text: "Rencana yang cerdas! Kalian berhasil memadukan pelestarian budaya dengan kebutuhan pasar masa kini." }
    ],
    interactiveType: "transformasiDesain"
  },
  {
    pageNumber: 4,
    shortTitle: "Membuat Sketsa Produk",
    stepLabel: "4. Membuat Sketsa Produk Fesyen",
    tagline: "Tuangkan ide kreatifmu dalam bentuk sketsa, warna, dan tata letak motif.",
    panelCaption: "PANEL 4 — Menggambar Sketsa Busana & Pola Ragam Hias",
    illustrationKey: "panel4",
    dialogues: [
      { char: "nabila", text: "Aku menggambar sketsa potongan outer dan gaun modern dulu di buku sketsa sebelum mewarnainya." },
      { char: "raka", text: "Aku bantu mengatur letak motif Kawung di bagian kerah dan saku totebag agar terlihat seimbang." },
      { char: "dimas", text: "Di tablet ini, aku mencoba simulasi kombinasi warna biru indigo dan emas mustard agar tampilannya kontras." },
      { char: "guru", text: "Perhatikan proporsi ukuran motif terhadap bidang kain ya, supaya ragam hiasnya menjadi pusat perhatian." }
    ],
    interactiveType: "sketsaPreview"
  },
  {
    pageNumber: 5,
    shortTitle: "Bahan, Alat & HPP",
    stepLabel: "5. Memilih Bahan, Teknik & Estimasi Biaya",
    tagline: "Kenali kain, alat, teknik pembuatan, serta perhitungan harga jual produk.",
    panelCaption: "PANEL 5A — Pemilihan Bahan Kain & Teknik Kriya Tekstil",
    illustrationKey: "panel6_bahan",
    dialogues: [
      { char: "guru", text: "Dalam kewirausahaan fesyen, pemilihan bahan seperti katun, sutra, atau tenun harus disesuaikan dengan teknik membatik, menyulam, mencetak, atau menempel." },
      { char: "raka", text: "Untuk outer dan totebag kasual, kain katun primisima dan kanvas katun nyaman dipakai serta mudah menyerap warna." },
      { char: "nabila", text: "Kita padukan teknik cap motif dengan sulaman tangan di bagian tepi agar detailnya lebih eksklusif." },
      { char: "dimas", text: "Saya juga sudah menghitung rincian modal kain, benang, dan ongkos produksi supaya harga jualnya tetap terjangkau!" }
    ],
    interactiveType: "kalkulatorHPP"
  },
  {
    pageNumber: 6,
    shortTitle: "Proses Kreasi & Video",
    stepLabel: "6. Proses Kreasi & Dokumentasi Konten",
    tagline: "Wujudkan rancangan menjadi produk nyata dan bagikan proses kreatifmu!",
    panelCaption: "PANEL 5B — Merekam Tutorial Pembuatan Produk Fesyen",
    illustrationKey: "panel5",
    dialogues: [
      { char: "dimas", text: "Kamera ponsel di tripod sudah siap merekam! Silakan mulai presentasinya, Nabila dan Raka." },
      { char: "nabila", text: "Halo teman-teman, beginilah cara membuat produk fesyen kita! Dimulai dari memotong pola kain bermotif Nusantara." },
      { char: "raka", text: "Setelah pola disatukan dan dijahit rapi, kita tambahkan aplikasi motif Kawung pada bagian depan outer dan totebag." },
      { char: "guru", text: "Dokumentasi proses produksi seperti ini sangat bagus sebagai konten promosi digital untuk menarik minat pembeli." }
    ],
    interactiveType: "langkahProduksi"
  },
  {
    pageNumber: 7,
    shortTitle: "Kuis Tantangan",
    stepLabel: "7. Kuis Tantangan Kreativitas",
    tagline: "Seberapa jauh kamu mengenal ragam hias Nusantara & kewirausahaan fesyen?",
    panelCaption: "PANEL 6 — Kuis Interaktif Seru Bersama Ibu Guru",
    illustrationKey: "panel6",
    dialogues: [
      { char: "guru", text: "Saatnya kuis seru! Perhatikan layar di depan kelas: Dari daerah manakah asal motif Mega Mendung?" },
      { char: "raka", text: "Saya tahu, Bu Aldriana Lobo! Motif Mega Mendung berasal dari Cirebon, Jawa Barat!" },
      { char: "nabila", text: "Ayo teman-teman pembaca komik, giliran kalian menjawab tantangan kuis di bawah ini!" },
      { char: "dimas", text: "Kumpulkan skor tertinggi untuk membuktikan pemahaman kita tentang ragam hias Nusantara!" }
    ],
    interactiveType: "quiz"
  },
  {
    pageNumber: 8,
    shortTitle: "Expo Nusantara",
    stepLabel: "8. Expo Nusantara: Motif to Fashion",
    tagline: "Pamerkan produk fesyen ragam hias Nusantara dengan strategi pemasaran kreatif.",
    panelCaption: "PANEL 7 — Pameran Karya Kelas 'Expo Nusantara'",
    illustrationKey: "panel7",
    dialogues: [
      { char: "guru", text: "Wah, karya teman-teman kreatif dan rapi sekali! Penataan stan Expo Nusantara ini juga sangat menarik." },
      { char: "dimas", text: "Terima kasih, Bu! Kami menyertakan label kisah filosofi motif di setiap kemasan produk agar pembeli tahu maknanya." },
      { char: "raka", text: "Selain pameran di sekolah, kami juga menyiapkan katalog digital untuk pemesanan pre-order." },
      { char: "nabila", text: "Senang sekali melihat rancangan sketsa kita akhirnya terwujud menjadi produk fesyen siap pakai!" }
    ],
    interactiveType: "expoShowcase"
  },
  {
    pageNumber: 9,
    shortTitle: "Peragaan Busana",
    stepLabel: "9. Peragaan Busana & Apresiasi Karya",
    tagline: "Tampilkan percaya diri karya fesyen budaya bangsa di hadapan publik.",
    panelCaption: "PANEL 8 — Mini Runway Fesyen Ragam Hias Nusantara",
    illustrationKey: "panel8",
    dialogues: [
      { char: "nabila", text: "Inilah karya fesyen ragam hias Nusantara kami! Perpaduan outer batik modern dan totebag etnik yang nyaman dipakai sehari-hari." },
      { char: "raka", text: "Dengan memakai produk lokal bermotif Nusantara, generasi muda ikut bangga melestarikan warisan budaya." },
      { char: "dimas", text: "Karya ini juga menjadi bukti bahwa pelajar SMA Kelas X mampu menciptakan peluang wirausaha kreatif!" },
      { char: "guru", text: "Luar biasa! Kreatif, bernilai jual, dan melestarikan budaya! Ibu sangat bangga dengan kerja sama kalian bertiga." }
    ],
    interactiveType: "apresiasi"
  },
  {
    pageNumber: 10,
    shortTitle: "Galeri & Refleksi Tugas",
    stepLabel: "10. Galeri Karya, Refleksi Diri & Kirim Tugas",
    tagline: "Kreasikan Motifmu, Wujudkan Fesyen Nusantara! Lengkapi refleksi & tugasmu.",
    panelCaption: "PENUTUP — Galeri Karya & Refleksi Pembelajaran PKWU Kelas X",
    illustrationKey: "panel11_galeri",
    dialogues: [
      { char: "guru", text: "Selamat telah menyelesaikan seluruh perjalanan belajar Motif to Motif! Sekarang tuliskan refleksi diri dan unggah foto karya fesyen kalian." },
      { char: "nabila", text: "Dari proyek ini aku belajar bahwa setiap garis motif Nusantara menyimpan cerita luhur yang bisa diolah menjadi desain modern." },
      { char: "raka", text: "Aku juga jadi paham bagaimana merancang produk yang bukan hanya indah, tetapi juga fungsional bagi konsumen." },
      { char: "dimas", text: "Jangan lupa klik tombol Kirim Tugas dan mengisi kotak refleksi di bawah " }
    ],
    interactiveType: "refleksiTugas"
  }
];