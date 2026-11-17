// Pusat Data GHOF KNOWLEDGE (Sistem File Statis Permanen)
const DEFAULT_DATA = {
  announcement: {
    active: false,
    text: "🔥 PROMO PEMBUKAAN GHOF RUSSIAN CLASS! Kelas Berbayar hanya Rp39.000/bulan (minimal 3 bulan = Rp117.000) dari harga normal Rp59.000/bulan! Periode: 15 Nov 2026 – 28 Nov 2027. Daftar sekarang!"
  },
  owner: {
    name: "LABIIB AL GHOFFUUR",
    title: "Mntr.Br, Bs, Bt",
    role: "CEO GHOF KNOWLEDGE • Mentor Bahasa Rusia, Spanyol & Turki",
    photo: "ceo-profile.png",
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
      logo: "class-free.png",
      active: true,
      description: "Cocok untuk kamu yang ingin mencoba dan mengenal dasar-dasar bahasa Rusia dari nol sebelum masuk ke kelas intensif.",
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
      period: "Min. berlangganan 3 bulan (Total Rp 117.000)",
      logo: "class-premium.png",
      active: true,
      description: "Pembelajaran lengkap dan terstruktur dari level A1 hingga Lanjutan dengan pendampingan langsung oleh mentor serta sertifikat resmi.",
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
      id: "eb-rusia",
      title: "E-book Belajar Bahasa Rusia",
      language: "Bahasa Rusia",
      price: "Rp 39.500 - Rp 67.999",
      bestseller: false,
      active: true,
      cover: "ebook-rusia.png",
      description: "hubungi admin untuk konfirmasi E-book yang di pilih sama anda dan anda bisa request materi."
    },
    {
      id: "eb-jepang",
      title: "E-book Belajar Bahasa Jepang",
      language: "Bahasa Jepang",
      price: "Rp 59.999 - Rp 115.000",
      bestseller: true,
      active: true,
      cover: "ebook-jepang.jpg",
      description: "hubungi admin untuk konfirmasi E-book yang di pilih sama anda dan anda bisa request materi."
    },
    {
      id: "eb-korea",
      title: "E-book Belajar Bahasa Korea",
      language: "Bahasa Korea",
      price: "Rp 49.000 - Rp 79.999",
      bestseller: true,
      active: true,
      cover: "ebook-korea.png",
      description: "Panduan cepat membaca aksara Hangeul, tata bahasa dasar, serta frasa percakapan praktis untuk pemula."
    },
    {
      id: "eb-inggris",
      title: "E-book Belajar Bahasa Inggris",
      language: "Bahasa Inggris",
      price: "Rp 25.000 - Rp 59.999",
      bestseller: false,
      active: true,
      cover: "ebook-inggris.png",
      description: "hubungi admin untuk konfirmasi E-book yang di pilih sama anda dan anda bisa request materi."
    },
    {
      id: "eb-turki",
      title: "E-book Belajar Bahasa Turki",
      language: "Bahasa Turki",
      price: "Rp 29.999 - Rp 42.000",
      bestseller: false,
      active: true,
      cover: "ebook-turki.png",
      description: "hubungi admin untuk konfirmasi E-book yang di pilih sama anda dan anda bisa request materi."
    }
  ],
  webServices: [
    {
      id: "web-1",
      category: "Website Sekolah & Lembaga Pendidikan",
      price: "Mulai Rp 350.000",
      image: "web-sekolah.png",
      active: true,
      description: "Website profil sekolah, pesantren, atau lembaga kursus lengkap dengan informasi PPDB, galeri kegiatan, profil pengajar, dan pengumuman akademik."
    },
    {
      id: "web-2",
      category: "Website Toko Online / Jualan & Katalog",
      price: "Mulai Rp 550.000",
      image: "web-toko.png",
      active: true,
      description: "Katalog produk modern untuk UMKM dan bisnis online dengan fitur keranjang/pemesanan langsung ke WhatsApp, label promo, dan tampilan mobile-friendly."
    },
    {
      id: "web-3",
      category: "Website Portofolio & Personal Branding",
      price: "Mulai Rp 50.000",
      image: "web-portofolio.png",
      active: true,
      description: "Tampilkan CV, karya, sertifikat, dan layanan profesional kamu dalam satu halaman elegan yang siap memukau klien maupun rekruter."
    },
    {
      id: "web-4",
      category: "Website Company Profile & Organisasi",
      price: "Mulai Rp 600.000",
      image: "web-company.png",
      active: true,
      description: "Bangun kredibilitas perusahaan, komunitas, atau startup dengan halaman profil resmi, layanan unggulan, testimoni klien, dan integrasi kontak."
    }
  ],
  payments: [
    { id: "pay-1", name: "QRIS (Semua E-Wallet & M-Banking)", number: "LABIIB CELL", holder: "LABIIB CELL", qrisImage: "qris-labiib.png" },
    { id: "pay-2", name: "DANA", number: "08979517541", holder: "GHOF KNOWLEDGE / Admin", qrisImage: "" },
    { id: "pay-3", name: "SeaBank", number: "901591983419", holder: "GHOF KNOWLEDGE / Admin", qrisImage: "" },
    { id: "pay-4", name: "ShopeePay", number: "08979517541", holder: "GHOF KNOWLEDGE / Admin", qrisImage: "" }
  ],
  contacts: [
    { id: "c-1", platform: "WhatsApp", value: "08979517541", link: "https://wa.me/628979517541", icon: "fa-brands fa-whatsapp" },
    { id: "c-2", platform: "Instagram", value: "@xiaobi_03", link: "https://instagram.com/xiaobi_03", icon: "fa-brands fa-instagram" },
    { id: "c-X", platform: "AIverse.indonesia", value: "AI education", link: "https://labiibalghoffuur.github.io/AIverse.indonesia/#beranda", icon: "icon-font-awesome" },
    { id: "c-3", platform: "Gmail", value: "anakbahasainternational@gmail.com", link: "mailto:anakbahasainternational@gmail.com", icon: "fa-solid fa-envelope" }
  ],
  reviews: [
    {
      id: "rev-1",
      name: "Nadia Putri Ramadhani",
      category: "Kursus Bahasa Rusia",
      rating: 5,
      comment: "Awalnya mengira huruf Sirilik Rusia itu susah banget, tapi cara Kak Labiib menjelaskan super pelan dan gampang dipahami!"
    },
    {
      id: "rev-2",
      name: "Rizky Pratama",
      category: "E-Book Bahasa",
      rating: 5,
      comment: "E-book bahasanya rapi banget susunannya, nggak bikin pusing dan gampang dipraktikkan."
    }
  ],
  faqs: [
    {
      id: "faq-1",
      question: "Apakah pemula yang belum bisa baca huruf Rusia (Sirilik) bisa ikut kursus?",
      answer: "Sangat bisa! Pembelajaran dimulai dari nol, mulai dari pengenalan alfabet Sirilik hingga percakapan sehari-hari."
    },
    {
      id: "faq-2",
      question: "Bagaimana cara mendapatkan E-Book setelah melakukan pembayaran?",
      answer: "Setelah memilih e-book dan klik Lanjutkan Chat Admin, kirim bukti pembayaran via WhatsApp dan file PDF akan langsung dikirimkan."
    }
  ]
};

function getSiteData() {
  try {
    const saved = localStorage.getItem("ghof_knowledge_data_v3");
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {}
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}
