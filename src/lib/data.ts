export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];
  
  export const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    Backend: ["Node.js", "Express",  "REST"],
    Database: ["PostgreSQL", "MySQL"],
    "AI / ML": ["Python", "PyTorch", "TensorFlow", "FastAPI"],
    Tools: ["Git", "Docker", "Vercel", "Github", "Linux"],
  };
  
  export const projects = [
    {
      slug: "abiochieve-id",
      title: "Abiochieve.id",
      tag: "Web App",
      year: "2026",
      summary: "Aplikasi Accelerating Research and Advancing Publications.",
      description:
        "Abiochieve.id adalah platform yang mempercepat riset dan publikasi ilmiah. Dirancang untuk peneliti dan akademisi, platform ini menyatukan manajemen referensi, kolaborasi tim, dan alur publikasi dalam satu tempat.",
      role: "Full-Stack Developer",
      duration: "3 bulan",
      stack: ["Node.js", "MySQL", "Tailwind", "React Vite"],
      features: [
        "Manajemen referensi & sitasi otomatis",
        "Kolaborasi tim real-time",
        "Dashboard publikasi & progres riset",
        "Integrasi dengan berbagai jurnal",
        "Ekspor format BibTeX & RIS",
      ],
      challenges:
        "Tantangan utama adalah menyatukan berbagai format referensi dari sumber berbeda dan menyajikannya secara konsisten untuk ribuan pengguna.",
      outcome:
        "Platform ini digunakan oleh 500+ peneliti aktif dengan waktu publikasi rata-rata turun 40%.",
      links: [{ label: "Kunjungi Situs", href: "https://abiochieve.id/" }],
     
    },
    {
      slug: "tv-lpk-sekai-mirai",
      title: "TV LPK SEKAI MIRAI",
      tag: "Web App",
      year: "2026",
      summary:
        "REST API berperforma tinggi untuk dashboard TV dengan caching MySQL.",
      description:
        "Backend API untuk dashboard TV LPK Sekai Mirai. Melayani konten dinamis (jadwal, pengumuman, media) ke layar TV di kantor dan area publik dengan latensi rendah.",
      role: "Web App",
      duration: "2 bulan",
      stack: ["Node.js", "MySQL", "Express"],
      features: [
        "API konten dinamis dengan caching berlapis",
        "Manajemen jadwal & playlist TV",
        "Autentikasi admin dengan JWT",
        "Optimasi query MySQL untuk data realtime",
        "Endpoint publik untuk konsumsi dashboard",
      ],
      challenges:
        "Menjaga performa API tetap stabil saat banyak TV menarik data secara bersamaan pada jam sibuk.",
      outcome:
        "API menangani 100+ permintaan per detik dengan waktu respons di bawah 50ms.",
      links: [
        { label: "Live Demo", href: "https://tv-dashboard-sekaimirai.vercel.app/" },
      ],
     
    },
  ];
  
  export const experiences = [
    {
      role: "Full-Stack Developer",
      company: "Anqa",
      period: "2024 — Sekarang",
      desc: "Membangun platform web untuk klien kreatif dengan fokus pada performa dan estetika.",
    },
    {
      role: "Backend Dev",
      company: "PT. Media Kreasi Abadi",
      period: "2022 — 2022",
      desc: "Mengembangkan RestFull API untuk produk SaaS.",
    },
    {
      role: "Pertukaran Mahasiswa Merdeka",
      company: "Universitas Pendidikan Indonesia",
      period: "2023 — 2024",
      desc: "Bertukar Sementara Bermakna Selamanya.",
    },
  ];
  
  export const achievements = [
    {
      title: "Best Capstone Project",
      org: "Universitas Teknologi",
      year: "2023",
      desc: "Penghargaan untuk proyek AI klasifikasi citra bertema seni tinta.",
    },
    {
      title: "Speaker — JSConf ID",
      org: "JSConf Indonesia",
      year: "2023",
      desc: "Membahas design system dan performa Next.js di aplikasi skala besar.",
    },
    {
      title: "Top 10 Hackathon",
      org: "Garuda Hacks",
      year: "2022",
      desc: "Membangun prototipe aplikasi kolaborasi real-time dalam 36 jam.",
    },
  ];
  
  export const contacts = [
    {
      label: "WhatsApp",
      href: "https://wa.me/6282229259743",
      handle: "+62 822-2925-9743",
    },
    {
      label: "Instagram",
      href: "https://instagram.com/anqayom",
      handle: "@anqayom",
    },
    {
      label: "Github",
      href: "https://github.com/anqalah",
      handle: "@anqalah",
    },
  ];