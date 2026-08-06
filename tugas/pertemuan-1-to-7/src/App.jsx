import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import StatsCard from './components/StatsCard';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieModal from './components/MovieModal';
import Footer from './components/Footer';
import { initialMovies } from './data/movies';

export function App() {
  // 1. State Data Film
  const [movies, setMovies] = useState(initialMovies);

  // 2. State Input Pencarian
  const [searchQuery, setSearchQuery] = useState('');

  // 3. State Filter Genre Dropdown
  const [selectedGenre, setSelectedGenre] = useState('All');

  // 4. State Top Nav Product Category Tab ('all', 'showing', 'favorite')
  const [activeCategory, setActiveCategory] = useState('all');

  // 5. State Selected Movie for Detail Modal
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Extract unique genres for dropdown
  const genres = useMemo(() => {
    const genreSet = new Set(movies.map((m) => m.genre));
    return Array.from(genreSet).sort();
  }, [movies]);

  // Event Handling: Toggle Favorite Status (🤍 <-> ❤️)
  const handleToggleFavorite = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, favorite: !movie.favorite } : movie
      )
    );

    // Keep selectedMovie synced if modal is open
    if (selectedMovie && selectedMovie.id === id) {
      setSelectedMovie((prev) => (prev ? { ...prev, favorite: !prev.favorite } : null));
    }
  };

  // 9. Statistik Film: Hitung secara otomatis dari data
  const totalMovies = movies.length;
  const showingCount = movies.filter((m) => m.showing).length;
  const favoriteCount = movies.filter((m) => m.favorite).length;

  // Filter Film berdasarkan Search Query, Dropdown Genre, dan Product Tab
  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      // Filter Judul Film
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase().trim());
      
      // Filter Genre Dropdown
      const matchesGenre =
        selectedGenre === 'All' || movie.genre === selectedGenre;

      // Filter Top Nav Category Tab
      let matchesCategory = true;
      if (activeCategory === 'showing') {
        matchesCategory = movie.showing === true;
      } else if (activeCategory === 'favorite') {
        matchesCategory = movie.favorite === true;
      }

      return matchesSearch && matchesGenre && matchesCategory;
    });
  }, [movies, searchQuery, selectedGenre, activeCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#222222] font-sans antialiased">
      
      {/* 1. Header Komponen */}
      <Header
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-10">
        
        {/* Section Header & Subtitle */}
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#222222] tracking-tight">
            Koleksi Film MovieFlix
          </h1>
          <p className="text-sm text-[#6a6a6a]">
            Jelajahi informasi film, pantau status tayang, dan simpan film favorit Anda. Klik kartu untuk melihat detail lengkap.
          </p>
        </div>

        {/* 9. Statistik Film Komponen */}
        <StatsCard
          totalMovies={totalMovies}
          showingCount={showingCount}
          favoriteCount={favoriteCount}
        />

        {/* 8. SearchBar & Filter Komponen */}
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          genres={genres}
        />

        {/* Info Jumlah Hasil Pencarian */}
        <div className="flex items-center justify-between text-xs text-[#6a6a6a] px-1 border-b border-[#ebebeb] pb-4">
          <div>
            Menampilkan <span className="font-bold text-[#222222]">{filteredMovies.length}</span> dari <span className="font-bold text-[#222222]">{totalMovies}</span> film
          </div>
          {(searchQuery || selectedGenre !== 'All' || activeCategory !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedGenre('All');
                setActiveCategory('all');
              }}
              className="text-[#ff385c] hover:text-[#e00b41] font-semibold underline underline-offset-2 transition-colors cursor-pointer"
            >
              Reset Semua Filter
            </button>
          )}
        </div>

        {/* 4 & 5. MovieList & MovieCard Komponen */}
        <MovieList
          movies={filteredMovies}
          onToggleFavorite={handleToggleFavorite}
          onSelectMovie={(movie) => setSelectedMovie(movie)}
          searchQuery={searchQuery}
        />

      </main>

      {/* Detail Movie Modal Popup */}
      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
        onToggleFavorite={handleToggleFavorite}
      />

      {/* 1. Footer Komponen */}
      <Footer />

    </div>
  );
}

export default App;
