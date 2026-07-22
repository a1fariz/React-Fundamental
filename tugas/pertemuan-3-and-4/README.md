# CareerHub - Portal Lowongan Kerja Modern

> **Tugas Pertemuan 3 & 4 — Menggunakan pnpm & Vite serta Dasar-dasar React dan Komponen**  
> **Nama Peserta:** Alfarizi  
> **Materi:** React Fundamental  

---

## Tentang Project

**CareerHub** adalah aplikasi web portal pencarian kerja modern berbasis React yang dibuat sebagai penyelesaian tugas Pertemuan 3 & 4. Aplikasi ini dirancang dengan antarmuka yang bersih, responsif, dan mudah digunakan untuk membantu pencari kerja menemukan lowongan pekerjaan impian.

---

## Struktur Komponen React

Project ini dibangun dengan arsitektur komponen React yang rapi dan modular:

```text
src/
 ├── components/
 │    ├── Header.jsx    --> Logo brand CareerHub, slogan, navigasi & counter pekerjaan tersimpan
 │    ├── Hero.jsx      --> Banner utama, live search, filter kategori & statistik platform
 │    ├── JobList.jsx   --> Grid penampung daftar lowongan kerja
 │    ├── JobCard.jsx   --> Kartu informasi detail lowongan kerja
 │    ├── JobModal.jsx  --> Modal detail lowongan & formulir lamaran kerja interaktif
 │    ├── About.jsx     --> Halaman "Tentang Kami" (Visi, Misi, Keunggulan & Statistik)
 │    └── Footer.jsx    --> Footer & hak cipta © 2026 CareerHub | React Fundamental
 ├── data/
 │    └── jobs.js       --> Dataset lowongan kerja realistic
 ├── App.jsx            --> Komponen utama & alur navigasi tab
 ├── App.css            --> Styling CSS komponen
 └── index.css          --> Variable CSS global & reset style
```

---

## Fitur Utama

- **Live Search Real-time**: Cari pekerjaan berdasarkan nama posisi, nama perusahaan, lokasi, atau skill.
- **Filter Kategori**: Filter lowongan berdasarkan bidang (*Frontend, Backend, UI/UX, Mobile, DevOps, Fullstack*).
- **Modal Detail Pekerjaan & Form Lamaran**: Tampilan popup detail deskripsi, kualifikasi, benefit, serta formulir melamar pekerjaan langsung dengan notifikasi sukses.
- **Sistem Bookmark / Pekerjaan Tersimpan**: Pengguna dapat menyimpan lowongan favorit.
- **Halaman "Tentang Kami"**: Halaman terpisah berisi Visi, Misi, 4 Keunggulan utama, dan Statistik platform.
- **Fully Responsive**: Tampilan optimal di perangkat Mobile, Tablet, maupun Desktop.

---

## Teknologi yang Digunakan

- **Core**: React 19 + JavaScript (ES6+)
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **Icon Set**: lucide-react
- **Styling**: Vanilla CSS

---

## Cara Menjalankan Project Local

1. **Clone Repository & Masuk ke Folder Project:**
   ```bash
   git clone <repository-url>
   cd pertemuan-3-and-4
   ```

2. **Install Dependency menggunakan pnpm:**
   ```bash
   pnpm install
   ```

3. **Jalankan Server Development:**
   ```bash
   pnpm run dev
   ```
   Buka browser di `http://localhost:5173/`.

4. **Build untuk Production:**
   ```bash
   pnpm run build
   ```

---

© 2026 CareerHub | React Fundamental • Tugas Alfarizi
