import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Dashboard from './components/Dashboard';
import ProductFilter from './components/ProductFilter';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';
import FloatingFrapCTA from './components/FloatingFrapCTA';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SkeletonGrid from './components/SkeletonGrid';

import { initialProducts, CATEGORIES, STATUS_OPTIONS } from './data/products';
import { AlertCircle, Heart, Search } from 'lucide-react';
import { useLocalStorage } from './hooks/useLocalStorage';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function initProductsWithWishlist() {
  try {
    const saved = JSON.parse(localStorage.getItem('alapay-wishlist') || '[]');
    if (!Array.isArray(saved) || saved.length === 0) return initialProducts;
    return initialProducts.map((p) => ({
      ...p,
      isWishlist: saved.includes(p.id) ? true : p.isWishlist,
    }));
  } catch {
    return initialProducts;
  }
}

// ─── Toast ────────────────────────────────────────────────────────────────────

function Toast({ message, type }) {
  if (!message) return null;
  const isAdd = type === 'add';
  return (
    <div className="fixed top-[84px] right-4 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl shadow-xl border text-sm font-semibold max-w-xs animate-slideDown bg-[#12342d] border-white/10 text-white">
      <span className={`w-2 h-2 rounded-full shrink-0 ${isAdd ? 'bg-[#00754a]' : 'bg-[#c99b41]'}`} />
      <span>{message}</span>
    </div>
  );
}

// ─── Empty States ─────────────────────────────────────────────────────────────

function EmptyWishlist({ onGoToCatalog }) {
  return (
    <div className="sb-card p-14 text-center bg-white space-y-5 max-w-md mx-auto my-12 animate-fadeIn">
      <div className="w-20 h-20 rounded-full bg-rose-50 flex items-center justify-center mx-auto">
        <Heart className="w-9 h-9 text-rose-300" />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-black tracking-[-0.04em] text-stone-900">Wishlist Kosong</h3>
        <p className="text-sm text-stone-500 leading-relaxed">
          Kamu belum menambahkan produk apapun ke wishlist. Temukan produk favoritmu di katalog!
        </p>
      </div>
      <button
        onClick={onGoToCatalog}
        className="sb-btn sb-btn-primary px-6 py-2.5 text-sm font-bold"
      >
        Jelajahi Katalog
      </button>
    </div>
  );
}

function EmptySearch({ onReset }) {
  return (
    <div className="sb-card p-12 text-center bg-white space-y-4 max-w-lg mx-auto my-12 animate-fadeIn">
      <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mx-auto">
        <Search className="w-7 h-7 text-stone-400" />
      </div>
      <div className="space-y-1.5">
        <h3 className="text-lg font-black tracking-[-0.04em] text-stone-800">Produk Tidak Ditemukan</h3>
        <p className="text-sm text-stone-500 leading-relaxed">
          Tidak ada produk yang cocok dengan pencarian atau filter yang dipilih.
        </p>
      </div>
      <button onClick={onReset} className="sb-btn sb-btn-primary px-6 py-2.5 text-sm font-bold">
        Reset Filter
      </button>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [products, setProducts] = useState(initProductsWithWishlist);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedStatus, setSelectedStatus] = useState('Semua Status');
  const [onlyWishlist, setOnlyWishlist] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toast, setToast] = useState(null); // { message, type }
  const [catalogLoading, setCatalogLoading] = useState(false);

  const searchRef = useRef(null);

  // ── Persist wishlist to localStorage ──────────────────────────────────────
  useEffect(() => {
    const wishlistIds = products.filter((p) => p.isWishlist).map((p) => p.id);
    localStorage.setItem('alapay-wishlist', JSON.stringify(wishlistIds));
  }, [products]);

  // ── Document title ─────────────────────────────────────────────────────────
  const wishlistCount = products.filter((p) => p.isWishlist).length;
  const availableCount = products.filter((p) => p.stock > 0).length;

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return products
      .filter((p) => {
        const matchesSearch =
          !query ||
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query);
        const matchesCategory = selectedCategory === 'Semua' || p.category === selectedCategory;
        const matchesStatus = selectedStatus === 'Semua Status' || p.status === selectedStatus;
        const matchesWishlist = !onlyWishlist || p.isWishlist;
        return matchesSearch && matchesCategory && matchesStatus && matchesWishlist;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return 0;
      });
  }, [products, searchQuery, selectedCategory, selectedStatus, onlyWishlist, sortBy]);

  useEffect(() => {
    if (activeTab === 'dashboard') {
      document.title = 'Dashboard — Alapay';
    } else if (onlyWishlist) {
      document.title = `Wishlist (${wishlistCount}) — Alapay`;
    } else {
      document.title = `Katalog (${filteredProducts.length}) — Alapay`;
    }
  }, [activeTab, onlyWishlist, filteredProducts.length, wishlistCount]);

  // ── Keyboard shortcut "/" → focus search ──────────────────────────────────
  useEffect(() => {
    const handler = (e) => {
      if (e.key === '/' && !['INPUT', 'SELECT', 'TEXTAREA'].includes(e.target.tagName)) {
        e.preventDefault();
        if (activeTab !== 'catalog') {
          setActiveTab('catalog');
          setOnlyWishlist(false);
        }
        setTimeout(() => searchRef.current?.focus(), 80);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [activeTab]);

  // ── Skeleton when switching to catalog tab ─────────────────────────────────
  const switchToCatalog = useCallback(() => {
    if (activeTab !== 'catalog') {
      setCatalogLoading(true);
      setActiveTab('catalog');
      setTimeout(() => setCatalogLoading(false), 500);
    }
    setOnlyWishlist(false);
  }, [activeTab]);

  // ── Toast helper ───────────────────────────────────────────────────────────
  const showToast = useCallback((message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  // ── Handlers (useCallback) ─────────────────────────────────────────────────
  const handleToggleWishlist = useCallback(
    (productId) => {
      setProducts((prev) =>
        prev.map((p) => {
          if (p.id !== productId) return p;
          const added = !p.isWishlist;
          showToast(
            added ? `❤️ "${p.name}" ditambahkan ke Wishlist.` : `"${p.name}" dihapus dari Wishlist.`,
            added ? 'add' : 'remove'
          );
          return { ...p, isWishlist: added };
        })
      );
      if (selectedProduct?.id === productId) {
        setSelectedProduct((prev) => ({ ...prev, isWishlist: !prev.isWishlist }));
      }
    },
    [selectedProduct, showToast]
  );

  const handleUpdateStock = useCallback(
    (productId, newStock) => {
      const getStatus = (cur) => {
        if (newStock === 0) return 'Stok Habis';
        if (newStock < 10) return 'Stok Terbatas';
        return cur === 'Stok Habis' || cur === 'Stok Terbatas' ? 'Ready Stock' : cur;
      };
      setProducts((prev) =>
        prev.map((p) =>
          p.id === productId ? { ...p, stock: newStock, status: getStatus(p.status) } : p
        )
      );
      if (selectedProduct?.id === productId) {
        setSelectedProduct((prev) => ({
          ...prev,
          stock: newStock,
          status: getStatus(prev.status),
        }));
      }
    },
    [selectedProduct]
  );

  const resetFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('Semua');
    setSelectedStatus('Semua Status');
    setOnlyWishlist(false);
  }, []);

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen flex flex-col app-shell text-stone-900 font-sans">
      {/* Toast */}
      <Toast message={toast?.message} type={toast?.type} />

      <Navbar
        wishlistCount={wishlistCount}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchRef={searchRef}
        onOpenWishlist={() => {
          setActiveTab('catalog');
          setOnlyWishlist(true);
        }}
      />

      <HeroBanner
        onExploreClick={() => {
          switchToCatalog();
          document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
        totalProducts={products.length}
        availableProducts={availableCount}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10 space-y-10">
        {/* Tab nav */}
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-[28px] bg-white/80 border border-stone-200 p-2 shadow-sm">
          <div className="px-3">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-stone-400">Navigation</p>
          </div>
          <div className="flex flex-wrap items-center justify-end gap-2">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`sb-btn px-5 py-2.5 text-sm ${
                activeTab === 'dashboard'
                  ? 'bg-[#12342d] text-white shadow-md'
                  : 'bg-transparent hover:bg-stone-100 text-stone-600'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={switchToCatalog}
              className={`sb-btn px-5 py-2.5 text-sm ${
                activeTab === 'catalog' && !onlyWishlist
                  ? 'bg-[#12342d] text-white shadow-md'
                  : 'bg-transparent hover:bg-stone-100 text-stone-600'
              }`}
            >
              Produk ({products.length})
            </button>
            <button
              onClick={() => {
                setActiveTab('catalog');
                setOnlyWishlist(true);
              }}
              className={`sb-btn px-5 py-2.5 text-sm flex items-center gap-1.5 ${
                activeTab === 'catalog' && onlyWishlist
                  ? 'bg-[#c99b41] text-white shadow-md'
                  : 'bg-transparent hover:bg-stone-100 text-stone-600'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${activeTab === 'catalog' && onlyWishlist ? 'fill-white' : ''}`} />
              <span>Wishlist ({wishlistCount})</span>
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'dashboard' ? (
          <Dashboard
            key="dashboard"
            products={products}
            categories={CATEGORIES}
            onNavigateToCatalog={(filterType) => {
              setActiveTab('catalog');
              setOnlyWishlist(filterType === 'wishlist');
            }}
            onFilterCategory={(category) => {
              setSelectedCategory(category);
              switchToCatalog();
            }}
            onFilterStatus={(status) => {
              setSelectedStatus(status);
              switchToCatalog();
            }}
          />
        ) : (
          <div key="catalog" id="catalog-section" className="space-y-8 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00754A]">
                  {onlyWishlist ? 'Favorit Saya' : 'Katalog Menu'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#006241]">
                  {onlyWishlist ? 'Daftar Wishlist Anda' : 'Koleksi Menu Alapay'}
                </h2>
              </div>
              <span className="text-xs text-stone-500 font-medium">
                Tekan <kbd className="px-1.5 py-0.5 bg-stone-100 border border-stone-200 rounded text-[11px] font-mono">/</kbd> untuk cari cepat
              </span>
            </div>

            <ProductFilter
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedStatus={selectedStatus}
              setSelectedStatus={setSelectedStatus}
              onlyWishlist={onlyWishlist}
              setOnlyWishlist={setOnlyWishlist}
              sortBy={sortBy}
              setSortBy={setSortBy}
              categories={CATEGORIES}
              statusOptions={STATUS_OPTIONS}
              totalResults={filteredProducts.length}
              products={products}
              searchRef={searchRef}
            />

            {/* Cards */}
            {catalogLoading ? (
              <SkeletonGrid count={8} />
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="animate-fadeIn card-stagger">
                    <ProductCard
                      product={product}
                      onToggleWishlist={handleToggleWishlist}
                      onOpenDetail={setSelectedProduct}
                    />
                  </div>
                ))}
              </div>
            ) : onlyWishlist ? (
              <EmptyWishlist onGoToCatalog={() => {
                setOnlyWishlist(false);
                setActiveTab('catalog');
              }} />
            ) : (
              <EmptySearch onReset={resetFilters} />
            )}
          </div>
        )}
      </main>

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onToggleWishlist={handleToggleWishlist}
          onUpdateStock={handleUpdateStock}
          onAddToCart={(productName, size) => {
            showToast(`✅ "${productName}" (${size}) berhasil ditambahkan.`, 'add');
            setSelectedProduct(null);
          }}
        />
      )}

      <ScrollToTop />

      <FloatingFrapCTA
        wishlistCount={wishlistCount}
        onOpenWishlist={() => {
          setActiveTab('catalog');
          setOnlyWishlist(true);
          document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onScrollToCatalog={switchToCatalog}
      />

      <Footer />
    </div>
  );
}
