// Pusat Data Default GHOF KNOWLEDGE
// File ini bisa diperbarui otomatis melalui tombol "Download data.js untuk GitHub" di halaman admin.html

const DEFAULT_DATA = {
  announcement: {
    active: true,
    text: "🔥 PROMO PEMBUKAAN GHOF RUSSIAN CLASS! Kelas Berbayar hanya Rp39.000/bulan (minimal 3 bulan = Rp117.000) dari harga normal Rp59.000/bulan! Periode: 15 Nov 2026 – 28 Nov 2027. Daftar sekarang!"
  },
  owner: {
    name: "LABIIB AL GHOFFUUR",
    title: "Mntr.Br, Bs, Bt",
    role: "Founder & CEO GHOF KNOWLEDGE • Mentor Bahasa Rusia, Spanyol & Turki",
    photo: "", // Kosongkan untuk avatar inisial/ikon elegan, atau upload melalui admin.html
    description: "Labiib Al Ghoffuur adalah pendiri GHOF KNOWLEDGE sekaligus mentor multibahasa yang berdedikasi membantu pelajar Indonesia menguasai bahasa asing secara terstruktur, praktis, dan menyenangkan. Dengan pendekatan belajar dari nol hingga percakapan aktif, GHOF KNOWLEDGE hadir sebagai jembatan menuju peluang pendidikan dan karier global.",
    goal: "Menciptakan ekosistem pembelajaran bahasa asing dan solusi digital yang mudah diakses, terjangkau, dan berdampak nyata bagi generasi muda Indonesia untuk bersaing di kancah internasional.",
    vision: "Menjadi platform edukasi multibahasa dan pengembangan digital terpercaya yang mencetak pembelajar global yang kompeten dan percaya diri.",
    mission: [
      "Menyediakan kurikulum bahasa Rusia, Spanyol, dan Turki yang sistematis dari tingkat dasar hingga lanjutan.",
      "Menghadirkan modul dan e-book pembelajaran berkualitas tinggi yang mudah dipahami.",
      "Membantu UMKM, institusi pendidikan, dan personal brand bertumbuh melalui layanan pembuatan website modern dan profesional."
    ]
  },
  courses: [
    {
      id: "kursus-gratis",
      name: "Kelas Gratis Bahasa Rusia (100% Gratis)",
      badge: "100% GRATIS",
      price: "Rp 0 (Gratis)",
      originalPrice: "",
      period: "Akses Dasar",
      logo: "",
      description: "Cocok untuk kamu yang ingin mencoba dan mengenal dasar-dasar bahasa Rusia dari nol sebelum masuk ke kelas intensif.",
      syllabus: [
        "Alfabet Rusia (Кириллица)",
        "Membaca dan pengucapan dasar",
        "Kosakata sehari-hari",
        "Salam dan perkenalan",
        "Percakapan & tata bahasa dasar"
      ],
      features: [
        "Materi dasar bahasa Rusia",
        "E-book materi dasar (PDF)",
        "Grup belajar WhatsApp terbatas",
        "Latihan sederhana",
        "Tanya jawab dasar"
      ],
      isFree: true
    },
    {
      id: "kursus-berbayar",
      name: "Kelas Berbayar Bahasa Rusia (Program Lengkap)",
      badge: "PROMO PEMBUKAAN",
      price: "Rp 39.000 / bulan",
      originalPrice: "Rp 59.000 / bulan",
      period: "Min. berlangganan 3 bulan (Total Rp 117.000) • Promo 15 Nov 2026 – 28 Nov 2027",
      logo: "",
      description: "Pembelajaran lengkap dan terstruktur dari level A1 hingga Lanjutan dengan pendampingan langsung oleh mentor serta sertifikat resmi.",
      syllabus: [
        "Kurikulum terstruktur A1 – Lanjutan",
        "Penguasaan Alfabet Sirilik & Fonetik",
        "Tata bahasa (Grammar) & Kasus Bahasa Rusia",
        "Latihan Listening & Speaking aktif",
        "Evaluasi berkala & praktik percakapan"
      ],
      features: [
        "E-book materi lengkap (PDF) & Modul A1–Lanjutan",
        "Audio pelafalan, video interaktif & latihan listening",
        "Koreksi tugas langsung dari mentor",
        "Pendampingan intensif di Grup Belajar Premium",
        "Sesi tanya jawab mendalam & Evaluasi berkala",
        "Sertifikat Penyelesaian Resmi GHOF Russian Class"
      ],
      isFree: false
    }
  ],
  ebooks: [
    {
      id: "eb-1",
      title: "Panduan Lengkap Alfabet Sirilik & Percakapan Dasar Rusia",
      language: "Bahasa Rusia",
      price: "Rp 45.000",
      bestseller: true,
      cover: "",
      description: "E-book praktis berisi cara baca huruf Sirilik, aturan pelafalan vokal-konsonan, 500+ kosakata harian, dan dialog praktis untuk pemula."
    },
    {
      id: "eb-2",
      title: "Kamus Saku & Frasa Harian Bahasa Spanyol untuk Pemula",
      language: "Bahasa Spanyol",
      price: "Rp 39.000",
      bestseller: true,
      cover: "",
      description: "Kumpulan ungkapan sehari-hari, tata bahasa inti, dan percakapan cepat bahasa Spanyol yang disusun sistematis agar mudah dihafal."
    },
    {
      id: "eb-3",
      title: "Langkah Cepat Menguasai Bahasa Turki Dasar (Level A1)",
      language: "Bahasa Turki",
      price: "Rp 42.000",
      bestseller: false,
      cover: "",
      description: "Materi komprehensif pengenalan bahasa Turki mulai dari harmoni vokal, imbuhan dasar, hingga percakapan perkenalan dan perjalanan."
    }
  ],
  webServices: [
    {
      id: "web-1",
      category: "Website Sekolah & Lembaga Pendidikan",
      price: "Mulai Rp 750.000",
      image: "",
      description: "Website profil sekolah, pesantren, atau lembaga kursus lengkap dengan informasi PPDB, galeri kegiatan, profil pengajar, dan pengumuman akademik."
    },
    {
      id: "web-2",
      category: "Website Toko Online / Jualan & Katalog",
      price: "Mulai Rp 650.000",
      image: "",
      description: "Katalog produk modern untuk UMKM dan bisnis online dengan fitur keranjang/pemesanan langsung ke WhatsApp, label promo, dan tampilan mobile-friendly."
    },
    {
      id: "web-3",
      category: "Website Portofolio & Personal Branding",
      price: "Mulai Rp 450.000",
      image: "",
      description: "Tampilkan CV, karya, sertifikat, dan layanan profesional kamu dalam satu halaman elegan yang siap memukau klien maupun rekruter."
    },
    {
      id: "web-4",
      category: "Website Company Profile & Organisasi",
      price: "Mulai Rp 850.000",
      image: "",
      description: "Bangun kredibilitas perusahaan, komunitas, atau startup dengan halaman profil resmi, layanan unggulan, testimoni klien, dan integrasi kontak."
    }
  ],
  payments: [
    { id: "pay-1", name: "DANA", number: "08979517541", holder: "GHOF KNOWLEDGE / Admin", qrisImage: "" },
    { id: "pay-2", name: "SeaBank", number: "901591983419", holder: "GHOF KNOWLEDGE / Admin", qrisImage: "" },
    { id: "pay-3", name: "ShopeePay", number: "08979517541", holder: "GHOF KNOWLEDGE / Admin", qrisImage: "" },
    { id: "pay-4", name: "SpeedCash", number: "08979517541", holder: "GHOF KNOWLEDGE / Admin", qrisImage: "" },
    { id: "pay-5", name: "QRIS (Semua E-Wallet & M-Banking)", number: "Scan QRIS via Admin", holder: "GHOF KNOWLEDGE", qrisImage: "" }
  ],
  contacts: [
    { id: "c-1", platform: "WhatsApp", value: "08979517541", link: "https://wa.me/628979517541", icon: "fa-brands fa-whatsapp" },
    { id: "c-2", platform: "Instagram", value: "@xiaobi_03", link: "https://instagram.com/xiaobi_03", icon: "fa-brands fa-instagram" },
    { id: "c-3", platform: "Gmail", value: "anakbahasainternational@gmail.com", link: "mailto:anakbahasainternational@gmail.com", icon: "fa-solid fa-envelope" }
  ],
  reviews: [
    {
      id: "rev-1",
      name: "Nadia Putri Ramadhani",
      category: "Kursus Bahasa Rusia",
      rating: 5,
      comment: "Awalnya mengira huruf Sirilik Rusia itu susah banget, tapi cara Kak Labiib menjelaskan super pelan dan gampang dipahami! Baru 2 minggu ikut kelas berbayar sudah bisa baca tulisan Rusia dan perkenalan diri."
    },
    {
      id: "rev-2",
      name: "Rizky Pratama",
      category: "E-Book Bahasa",
      rating: 5,
      comment: "E-book bahasa Rusia & Spanyolnya rapi banget susunannya, nggak bikin pusing. Kosakatanya langsung yang sering dipakai sehari-hari. Sangat worth it dengan harganya!"
    },
    {
      id: "rev-3",
      name: "Ahmad Fauzan (Owner Toko Digital)",
      category: "Jasa Pembuatan Web",
      rating: 5,
      comment: "Pesan website katalog jualan di GHOF KNOWLEDGE hasilnya elegan, responsif di HP, dan prosesnya cepat. Pelanggan saya sekarang jauh lebih gampang lihat daftar produk sebelum order ke WA."
    },
    {
      id: "rev-4",
      name: "Siti Aisyah",
      category: "Kursus Bahasa Rusia",
      rating: 5,
      comment: "Suka banget sama evaluasi berkala dan grup diskusinya. Mentornya responsif kalau kita tanya soal pelafalan, dan ada sertifikat resminya juga buat portofolio!"
    }
  ],
  faqs: [
    {
      id: "faq-1",
      question: "Apakah pemula yang belum bisa baca huruf Rusia (Sirilik) bisa ikut kursus?",
      answer: "Sangat bisa! Pembelajaran dimulai dari nol, mulai dari pengenalan alfabet Sirilik (Кириллица), cara membaca dan pelafalan yang benar, hingga percakapan sehari-hari."
    },
    {
      id: "faq-2",
      question: "Apa perbedaan Kelas Gratis dan Kelas Berbayar di GHOF Russian Class?",
      answer: "Kelas Gratis memberikan materi dasar, e-book dasar PDF, dan akses grup WhatsApp terbatas untuk mencoba. Sedangkan Kelas Berbayar mencakup kurikulum lengkap A1–Lanjutan, audio/video pembelajaran, koreksi tugas mentor, grup premium, evaluasi berkala, dan Sertifikat Resmi."
    },
    {
      id: "faq-3",
      question: "Bagaimana alur pembelian E-Book atau pendaftaran Kursus?",
      answer: "Sangat mudah: pilih paket kursus atau judul e-book yang diinginkan, pilih metode pembayaran (DANA, SeaBank, ShopeePay, SpeedCash, atau QRIS), lalu klik 'Lanjutkan Chat Admin'. Pesananmu akan otomatis terisi di WhatsApp admin untuk konfirmasi nomor rekening/QRIS dan pengiriman akses."
    },
    {
      id: "faq-4",
      question: "Berapa lama proses pembuatan website di GHOF KNOWLEDGE?",
      answer: "Tergantung tingkat kerumitan dan kelengkapan materi. Untuk Landing Page atau Portofolio biasanya selesai dalam 2–4 hari kerja, sedangkan Web Sekolah atau Katalog Toko Online berkisar 4–7 hari kerja."
    }
  ]
};

// Fungsi helper untuk memuat data (prioritas dari localStorage browser jika pernah diedit di admin, jika tidak pakai DEFAULT_DATA)
function getSiteData() {
  try {
    const saved = localStorage.getItem("ghof_knowledge_data_v2");
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.warn("Gagal membaca localStorage, menggunakan data default.", e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}
