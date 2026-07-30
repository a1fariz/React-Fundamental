import React, { useState } from "react";
import Header from "./components/Header";
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import BookDetailModal from "./components/BookDetailModal";
import AddBookModal from "./components/AddBookModal";
import Toast from "./components/Toast";

const initialBooks = [
  {
    id: 1,
    judul: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    kategori: "Novel",
    tahunTerbit: 2005,
    status: "Tersedia",
    rak: "Rak A-01",
    halaman: "529 hal",
    rating: "4.9",
    sinopsis: "Kisah inspiratif tentang sepuluh anak dari keluarga miskin di Belitung yang berjuang menuntut ilmu di sekolah Muhammadiyah tengah keterbatasan fasilitas.",
  },
  {
    id: 2,
    judul: "Atomic Habits",
    penulis: "James Clear",
    kategori: "Self-Help",
    tahunTerbit: 2018,
    status: "Dipinjam",
    rak: "Rak B-03",
    halaman: "352 hal",
    rating: "4.8",
    sinopsis: "Panduan praktis membentuk kebiasaan baik dan menghapus kebiasaan buruk dengan sistem perubahan 1% setiap harinya secara konsisten.",
  },
  {
    id: 3,
    judul: "Sapiens: Riwayat Singkat Umat Manusia",
    penulis: "Yuval Noah Harari",
    kategori: "Sejarah",
    tahunTerbit: 2011,
    status: "Tersedia",
    rak: "Rak C-05",
    halaman: "512 hal",
    rating: "4.7",
    sinopsis: "Penelusuran sejarah perkembangan Homo Sapiens dari era revolusi kognitif, pertanian, hingga revolusi sains modern yang mengubah tatanan dunia.",
  },
  {
    id: 4,
    judul: "Laut Bercerita",
    penulis: "Leila S. Chudori",
    kategori: "Novel",
    tahunTerbit: 2017,
    status: "Dipinjam",
    rak: "Rak A-04",
    halaman: "379 hal",
    rating: "4.9",
    sinopsis: "Novel yang menarasikan perjuangan mahasiswa aktivis era 1998 dan duka mendalam keluarga korban penghilangan paksa yang mencari keadilan.",
  },
  {
    id: 5,
    judul: "The Psychology of Money",
    penulis: "Morgan Housel",
    kategori: "Keuangan",
    tahunTerbit: 2020,
    status: "Tersedia",
    rak: "Rak D-02",
    halaman: "256 hal",
    rating: "4.8",
    sinopsis: "19 cerita pendek yang mengeksplorasi hubungan psikologis manusia dengan uang, keputusan finansial, risiko, dan kebiasaan pengelolaan kekayaan.",
  },
  {
    id: 6,
    judul: "Clean Code: Refactoring & Design",
    penulis: "Robert C. Martin",
    kategori: "Teknologi",
    tahunTerbit: 2008,
    status: "Tersedia",
    rak: "Rak T-01",
    halaman: "464 hal",
    rating: "4.6",
    sinopsis: "Buku wajib rekayasa perangkat lunak yang mengajarkan prinsip penulisan kode bersih, refactoring, pengujian otomatis, serta perancangan sistem yang ramah pemeliharaan.",
  },
  {
    id: 7,
    judul: "Filosofi Teras",
    penulis: "Henry Manampiring",
    kategori: "Filsafat",
    tahunTerbit: 2018,
    status: "Dipinjam",
    rak: "Rak F-02",
    halaman: "346 hal",
    rating: "4.8",
    sinopsis: "Penerapan filsafat Stoikisme kuno dalam kehidupan modern untuk mengolah emosi negatif, mengendalikan pikiran, serta meraih kedamaian batin.",
  },
  {
    id: 8,
    judul: "Dune",
    penulis: "Frank Herbert",
    kategori: "Sci-Fi",
    tahunTerbit: 1965,
    status: "Tersedia",
    rak: "Rak S-03",
    halaman: "688 hal",
    rating: "4.7",
    sinopsis: "Mahakarya fiksi ilmiah epik berlatar planet Arrakis yang menceritakan intrik politik, agama, dan ekologi dalam perebutan komoditas rempah melange.",
  },
  {
    id: 9,
    judul: "Educated: Terdidik",
    penulis: "Tara Westover",
    kategori: "Memoar",
    tahunTerbit: 2018,
    status: "Dipinjam",
    rak: "Rak M-01",
    halaman: "400 hal",
    rating: "4.7",
    sinopsis: "Memoar nyata seorang wanita yang tumbuh terisolasi dari masyarakat dan sekolah formal, lalu mendidik dirinya sendiri hingga meraih gelar doktor dari Cambridge.",
  },
  {
    id: 10,
    judul: "The Alchemist (Sang Alkemis)",
    penulis: "Paulo Coelho",
    kategori: "Novel",
    tahunTerbit: 1988,
    status: "Tersedia",
    rak: "Rak A-08",
    halaman: "208 hal",
    rating: "4.8",
    sinopsis: "Kisah perjalanan kembara seorang gembala muda bernama Santiago dari Spanyol menuju piramida Mesir demi menemukan Takdir Pribadinya.",
  },
];

function App() {
  const [books, setBooks] = useState(initialBooks);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("Semua");
  const [categoryFilter, setCategoryFilter] = useState("Semua");
  const [sortOption, setSortOption] = useState("terbaru");
  const [viewMode, setViewMode] = useState("grid");
  const [favorites, setFavorites] = useState([1, 5]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // Modals & Toast State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [toast, setToast] = useState({ message: "", type: "info" });

  const triggerToast = (message, type = "info") => {
    setToast({ message, type });
  };

  // Borrow / Return Action Handler
  const handleBorrowReturn = (id) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => {
        if (book.id === id) {
          const isCurrentlyAvailable = book.status === "Tersedia";
          const newStatus = isCurrentlyAvailable ? "Dipinjam" : "Tersedia";
          triggerToast(
            isCurrentlyAvailable
              ? `Buku "${book.judul}" berhasil dipinjam.`
              : `Buku "${book.judul}" berhasil dikembalikan.`,
            isCurrentlyAvailable ? "info" : "success"
          );
          return { ...book, status: newStatus };
        }
        return book;
      })
    );
  };

  // Add Book Handler
  const handleAddBook = (newBook) => {
    const createdBook = {
      ...newBook,
      id: Date.now(),
      rak: `Rak ${newBook.kategori.charAt(0).toUpperCase()}-0${Math.floor(Math.random() * 9) + 1}`,
      halaman: "320 hal",
      rating: "5.0",
    };
    setBooks((prev) => [createdBook, ...prev]);
    triggerToast(`Buku "${newBook.judul}" berhasil ditambahkan ke koleksi.`, "success");
  };

  // Toggle Favorite Handler
  const handleToggleFavorite = (id) => {
    const targetBook = books.find((b) => b.id === id);
    setFavorites((prev) => {
      const isFav = prev.includes(id);
      if (isFav) {
        triggerToast(`Buku "${targetBook?.judul}" dihapus dari favorit.`, "info");
        return prev.filter((favId) => favId !== id);
      } else {
        triggerToast(`Buku "${targetBook?.judul}" disimpan ke favorit.`, "success");
        return [...prev, id];
      }
    });
  };

  // Reset Filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setStatusFilter("Semua");
    setCategoryFilter("Semua");
    setShowFavoritesOnly(false);
  };

  const selectedBook = books.find((b) => b.id === selectedBookId);

  return (
    <div className="min-h-screen flex flex-col bg-canvas font-body text-ink selection:bg-primary/20">
      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: "", type: "info" })}
      />

      {/* Header */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        onOpenAddModal={() => setIsAddModalOpen(true)}
        favoritesCount={favorites.length}
        showFavoritesOnly={showFavoritesOnly}
        setShowFavoritesOnly={setShowFavoritesOnly}
      />

      {/* Main Content */}
      <main className="flex-1">
        <BookList
          books={books}
          searchQuery={searchQuery}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onBorrowReturn={handleBorrowReturn}
          onOpenDetail={(id) => setSelectedBookId(id)}
          sortOption={sortOption}
          setSortOption={setSortOption}
          viewMode={viewMode}
          setViewMode={setViewMode}
          showFavoritesOnly={showFavoritesOnly}
          setShowFavoritesOnly={setShowFavoritesOnly}
          onResetFilters={handleResetFilters}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Detail Modal */}
      {selectedBookId && (
        <BookDetailModal
          book={selectedBook}
          onClose={() => setSelectedBookId(null)}
          onBorrowReturn={handleBorrowReturn}
          isFavorite={favorites.includes(selectedBookId)}
          onToggleFavorite={handleToggleFavorite}
        />
      )}

      {/* Add Book Modal */}
      <AddBookModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddBook={handleAddBook}
      />
    </div>
  );
}

export default App;
