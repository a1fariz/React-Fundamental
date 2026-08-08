import React from 'react';
import { Heart, LayoutDashboard, Search } from 'lucide-react';

export default function Navbar({
  wishlistCount,
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  onOpenWishlist,
  searchRef,
}) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 text-stone-900 backdrop-blur-xl sb-nav-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <button
            onClick={() => setActiveTab('dashboard')}
            className="flex items-center gap-3 group text-left"
            aria-label="Kembali ke dashboard"
          >
            <div className="w-11 h-11 rounded-2xl bg-[#12342d] text-white grid place-items-center shadow-sm group-hover:bg-[#00754a] transition-colors">
              <span className="text-sm font-black tracking-[-0.08em]">AP</span>
            </div>
            <div>
              <span className="block font-extrabold text-xl tracking-[-0.04em] text-stone-950">Alapay</span>
              <p className="text-[11px] text-stone-500 font-semibold">Product catalog</p>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-1 rounded-full bg-stone-100 p-1 border border-stone-200">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-white text-[#12342d] shadow-sm'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </span>
            </button>

            <button
              onClick={() => setActiveTab('catalog')}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                activeTab === 'catalog'
                  ? 'bg-white text-[#12342d] shadow-sm'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              Produk
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block w-48 lg:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              ref={searchRef}
              placeholder="Cari produk..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-stone-50 text-stone-900 placeholder-stone-400 rounded-full text-sm border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#00754a]/25 focus:border-[#00754a] transition-all"
            />
          </div>

          <button
            onClick={onOpenWishlist}
            className="relative sb-btn bg-[#12342d] hover:bg-[#00754a] text-white px-4 py-2.5 text-sm flex items-center gap-2 shadow-sm"
            title="Lihat Wishlist"
          >
            <Heart className={`w-4 h-4 ${wishlistCount > 0 ? 'fill-white' : ''}`} />
            <span className="hidden sm:inline">Wishlist</span>
            {wishlistCount > 0 && (
              <span className="bg-white text-[#12342d] font-extrabold text-[11px] min-w-5 h-5 px-1 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
