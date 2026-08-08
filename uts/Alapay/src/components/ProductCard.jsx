import React from 'react';
import { AlertCircle, Eye, Heart, Star } from 'lucide-react';

export default function ProductCard({ product, onToggleWishlist, onOpenDetail }) {
  const {
    id,
    name,
    category,
    price,
    rating,
    reviewCount,
    stock,
    status,
    description,
    image,
    isWishlist,
  } = product;

  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(price);

  const statusClass = {
    'Best Seller': 'bg-[#e8f3ef] text-[#006241]',
    'Produk Baru': 'bg-blue-50 text-blue-700',
    Diskon: 'bg-amber-50 text-amber-700',
    'Stok Habis': 'bg-red-50 text-red-700',
    'Stok Terbatas': 'bg-orange-50 text-orange-700',
    'Ready Stock': 'bg-stone-100 text-stone-700',
  }[status] || 'bg-stone-100 text-stone-700';

  return (
    <article className="sb-card group overflow-hidden bg-white">
      <div className="relative h-56 bg-stone-100 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
        <div className="absolute inset-x-0 top-0 p-3 flex items-start justify-between gap-3">
          <span className={`text-[11px] font-extrabold px-3 py-1.5 rounded-full shadow-sm ${statusClass}`}>
            {status}
          </span>
          <button
            onClick={() => onToggleWishlist(id)}
            className={`w-10 h-10 rounded-full grid place-items-center shadow-sm border transition-all ${
              isWishlist
                ? 'bg-[#12342d] text-white border-[#12342d]'
                : 'bg-white/95 text-stone-500 border-white/80 hover:text-[#12342d]'
            }`}
            title={isWishlist ? 'Hapus dari Wishlist' : 'Tambah ke Wishlist'}
          >
            <Heart className={`w-4 h-4 ${isWishlist ? 'fill-white' : ''}`} />
          </button>
        </div>
      </div>

      <div className="p-5 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#00754a]">{category}</span>
            <span className="flex items-center gap-1 text-xs font-bold text-stone-600">
              <Star className="w-3.5 h-3.5 fill-[#c99b41] text-[#c99b41]" />
              {rating}
              <span className="text-stone-400 font-semibold">({reviewCount})</span>
            </span>
          </div>

          <button
            onClick={() => onOpenDetail(product)}
            className="text-left"
          >
            <h3 className="text-lg font-black tracking-[-0.035em] text-stone-950 group-hover:text-[#00754a] transition-colors line-clamp-1">
              {name}
            </h3>
          </button>

          <p className="text-sm text-stone-500 line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex items-end justify-between gap-4 pt-4 border-t border-stone-100">
          <div>
            <p className="text-lg font-black tracking-[-0.04em] text-stone-950">{formattedPrice}</p>
            {stock > 0 ? (
              <p className={`mt-1 text-xs font-bold ${stock < 10 ? 'text-orange-600' : 'text-[#00754a]'}`}>
                {stock} unit tersedia
              </p>
            ) : (
              <p className="mt-1 text-xs font-bold text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                Stok habis
              </p>
            )}
          </div>

          <button
            onClick={() => onOpenDetail(product)}
            className="sb-btn sb-btn-outline px-4 py-2 text-xs gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <Eye className="w-3.5 h-3.5" />
            Detail
          </button>
        </div>
      </div>
    </article>
  );
}
