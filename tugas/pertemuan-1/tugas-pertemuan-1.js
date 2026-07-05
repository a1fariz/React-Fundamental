// Tugas Pertemuan 1 - JavaScript Modern (ES6)
// Nama : Alfarizi
// Studi Kasus: Data Mahasiswa

// 1. pake const buat data yang ga berubah
const mahasiswa = {
  nama: "Alfarizi",
  nim: "2023001234",
  jurusan: "manajemen informatika",
  semester: 4,
  nilai: {
    matematika: 98,
    algoritma: 90,
    basis_data: 93,
    pemrograman_web: 92,
    jaringan_komputer: 80,
  },
};

// 2. Destructuring Assignment - ngambil data dari object mahasiswa
const { nama, nim, jurusan, semester, nilai } = mahasiswa;

// Destructuring nested object nilai
const { matematika, algoritma, basis_data, pemrograman_web, jaringan_komputer } = nilai;

// 3. Arrow Function - ngitung rata-rata nilai
const hitungRataRata = (nilaiMataKuliah) => {
  const total = Object.values(nilaiMataKuliah).reduce((acc, val) => acc + val, 0);
  const jumlahMataKuliah = Object.values(nilaiMataKuliah).length;
  return (total / jumlahMataKuliah).toFixed(2);
};

const rataRata = hitungRataRata(nilai);

// 4. Rest Operator - ngitung total seluruh nilai
const hitungTotalNilai = (...semuaNilai) => {
  return semuaNilai.reduce((acc, val) => acc + val, 0);
};

const totalNilai = hitungTotalNilai(
  matematika,
  algoritma,
  basis_data,
  pemrograman_web,
  jaringan_komputer
);

// 5. Spread Operator - nambahin properti status tanpa mengubah object asli
const mahasiswaAktif = {
  ...mahasiswa,
  status: "Aktif",
};

// 6. Template Literals - nampilkan output
// pake let karena nilai predikat bisa berubah sesuai kondisi
let predikat;

if (rataRata >= 90) {
  predikat = "A (Sangat Memuaskan)";
} else if (rataRata >= 80) {
  predikat = "B (Memuaskan)";
} else if (rataRata >= 70) {
  predikat = "C (Cukup)";
} else {
  predikat = "D (Kurang)";
}

// nampilin data mahasiswa pake template literals
console.log(`
Data Mahasiswa
Nama           : ${nama}
NIM            : ${nim}
Jurusan        : ${jurusan}
Semester       : ${semester}

Nilai Mata Kuliah
Matematika           : ${matematika}
Algoritma            : ${algoritma}
Basis Data           : ${basis_data}
Pemrograman Web      : ${pemrograman_web}
Jaringan Komputer    : ${jaringan_komputer}

Rekapitulasi Nilai
Total Nilai    : ${totalNilai}
Rata-rata      : ${rataRata}
Predikat       : ${predikat}

Status Mahasiswa (Spread Operator)
Status         : ${mahasiswaAktif.status}

Verifikasi object asli tidak berubah
mahasiswa.status : ${mahasiswa.status ?? "undefined"}
`);

// nampilin object hasil spread operator
console.log("Object mahasiswaAktif:");
console.log(mahasiswaAktif);
