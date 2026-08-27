# CareerHub - Job Management App (Bab 9–12)

Aplikasi manajemen lowongan pekerjaan menggunakan **React 19** dan **Tailwind CSS v4** dengan implementasi materi:
- **Bab 9**: `filter()`, Search berdasarkan nama pekerjaan, Filter lokasi & status, Conditional rendering saat data tidak ditemukan.
- **Bab 10**: `sort()`, Sorting nama pekerjaan (A-Z), gaji terendah, dan gaji tertinggi.
- **Bab 11**: Pagination dengan `Math.ceil()` & `.map()`, kontrol Next/Previous, indikator nomor halaman aktif (maks. 5 data per halaman).
- **Bab 12**: Editing data lowongan dengan Modal Form, State management, dan `.map()` untuk update langsung tanpa reload.

## Struktur Komponen
- `Header.jsx`: Navigasi & statistik total lowongan aktif
- `SearchBar.jsx`: Input search, filter lokasi, filter status, sort dropdown & reset filter
- `JobList.jsx`: Wrapper list kartu lowongan & empty state
- `JobCard.jsx`: Kartu info lowongan + trigger tombol edit
- `JobForm.jsx`: Modal form pengeditan data lowongan (Job Title, Company, Location, Salary, Status)
- `Pagination.jsx`: Navigasi pagination 5 item per halaman
- `Footer.jsx`: Footer aplikasi
