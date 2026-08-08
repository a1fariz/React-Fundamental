import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';

export default function FloatingFrapCTA({ wishlistCount, onOpenWishlist, onScrollToCatalog }) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
      {/* Primary: Wishlist floating button */}
      <button
        onClick={onOpenWishlist}
        className="frap-btn flex items-center justify-center relative group"
        title="Buka Wishlist"
        aria-label="Buka halaman wishlist"
      >
        <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'fill-white' : ''} text-white`} />

        {wishlistCount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 bg-[#c99b41] text-black font-extrabold text-[10px] min-w-5 h-5 px-1 rounded-full flex items-center justify-center shadow">
            {wishlistCount}
          </span>
        )}

        {/* Tooltip */}
        <span className="absolute right-[68px] bg-[#12342d] text-white text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-white/10">
          Wishlist ({wishlistCount})
        </span>
      </button>

      {/* Secondary: View Catalog pill */}
      <button
        onClick={onScrollToCatalog}
        className="flex items-center gap-1.5 bg-white hover:bg-stone-50 text-[#12342d] border border-stone-200 text-xs font-bold px-3.5 py-2 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 active:scale-95"
        aria-label="Lihat katalog produk"
      >
        <ShoppingBag className="w-3.5 h-3.5 text-[#00754a]" />
        <span className="hidden sm:inline">Lihat Menu</span>
      </button>
    </div>
  );
}
