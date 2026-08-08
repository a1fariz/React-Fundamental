import React, { useState } from 'react';
import { Heart, Minus, Plus, Star, X } from 'lucide-react';

const SIZES = [
  { name: 'Tall', volume: '12 oz' },
  { name: 'Grande', volume: '16 oz' },
  { name: 'Venti', volume: '24 oz' },
  { name: 'Trenta', volume: '30 oz' },
];

const MILK_OPTIONS = ['Whole Milk', 'Oat Milk', 'Almond Milk', 'Non-Fat Milk'];
const ICE_OPTIONS = [
  { value: 'Normal Ice', label: 'Es Normal' },
  { value: 'Less Ice', label: 'Es Sedikit' },
  { value: 'Extra Ice', label: 'Es Banyak' },
  { value: 'No Ice', label: 'Tanpa Es' },
];

function StatusBadge({ status, stock }) {
  if (stock === 0) return <span className="inline-flex text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full">Stok Habis</span>;
  if (stock < 10) return <span className="inline-flex text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">Stok Terbatas</span>;
  return <span className="inline-flex text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">{status}</span>;
}

export default function ProductDetailModal({
  product,
  onClose,
  onToggleWishlist,
  onUpdateStock,
  onAddToCart,
}) {
  const [selectedSize, setSelectedSize] = useState('Grande');
  const [milkOption, setMilkOption] = useState('Whole Milk');
  const [iceLevel, setIceLevel] = useState('Normal Ice');

  if (!product) return null;

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
    calories,
    ingredients,
    isWishlist,
  } = product;

  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(price);

  const isBeverage = category !== 'Bakery & Food';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#f7f3ec] rounded-3xl max-w-3xl w-full shadow-2xl relative my-8 overflow-hidden border border-stone-200 animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
          aria-label="Tutup detail produk"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header band */}
        <div className="bg-[#12342d] text-white px-6 sm:px-8 pt-6 pb-7">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-white/45 font-medium mb-3">
            <span>Menu</span>
            <span>/</span>
            <span>{category}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-[-0.04em]">{name}</h2>
              <div className="flex items-center gap-3 text-sm">
                <span className="flex items-center gap-1 text-[#c99b41] font-bold">
                  <Star className="w-3.5 h-3.5 fill-[#c99b41]" />
                  {rating}
                  <span className="text-white/40 font-normal">({reviewCount} ulasan)</span>
                </span>
                {calories && (
                  <>
                    <span className="text-white/20">•</span>
                    <span className="text-white/50">{calories}</span>
                  </>
                )}
              </div>
            </div>

            <div className="text-left sm:text-right shrink-0">
              <div className="text-2xl sm:text-3xl font-black text-[#c99b41]">{formattedPrice}</div>
              <p className="text-xs text-white/40 mt-0.5">Termasuk pajak &amp; kemasan</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Image + Description grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
            <div className="md:col-span-5 rounded-2xl overflow-hidden shadow-sm h-52 bg-stone-200 relative">
              <img src={image} alt={name} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3">
                <StatusBadge status={status} stock={stock} />
              </div>
            </div>

            <div className="md:col-span-7 space-y-4">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400 mb-1">Deskripsi</h3>
                <p className="text-sm text-stone-700 leading-relaxed">{description}</p>
              </div>

              {/* Stock manager */}
              <div className="pt-3 border-t border-stone-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-stone-400 mb-0.5">Stok</p>
                    <span className={`text-sm font-bold ${stock > 0 ? 'text-emerald-700' : 'text-red-600'}`}>
                      {stock > 0 ? `${stock} unit tersedia` : 'Habis'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onUpdateStock(id, Math.max(0, stock - 1))}
                      className="w-8 h-8 rounded-full bg-white border border-stone-200 hover:bg-stone-100 active:scale-95 flex items-center justify-center transition-all"
                      aria-label="Kurangi stok"
                    >
                      <Minus className="w-3.5 h-3.5 text-stone-700" />
                    </button>
                    <span className="w-6 text-center text-sm font-bold text-stone-800">{stock}</span>
                    <button
                      onClick={() => onUpdateStock(id, stock + 1)}
                      className="w-8 h-8 rounded-full bg-white border border-stone-200 hover:bg-stone-100 active:scale-95 flex items-center justify-center transition-all"
                      aria-label="Tambah stok"
                    >
                      <Plus className="w-3.5 h-3.5 text-stone-700" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Size selector — beverages only */}
          {isBeverage && (
            <div className="space-y-3 pt-2 border-t border-stone-200">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400">Pilih Ukuran</h4>
                <span className="text-xs text-stone-500 font-semibold">{selectedSize}</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {SIZES.map((size) => {
                  const active = selectedSize === size.name;
                  return (
                    <button
                      key={size.name}
                      onClick={() => setSelectedSize(size.name)}
                      className={`py-3 px-2 rounded-2xl bg-white border text-center transition-all flex flex-col items-center gap-1 active:scale-95 ${
                        active
                          ? 'ring-2 ring-[#00754a] border-[#00754a] shadow-sm'
                          : 'border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black ${
                          active ? 'bg-[#00754a] text-white' : 'bg-stone-100 text-stone-600'
                        }`}
                      >
                        {size.name[0]}
                      </div>
                      <span className="text-xs font-bold text-stone-800">{size.name}</span>
                      <span className="text-[10px] text-stone-400">{size.volume}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Customization — beverages only */}
          {isBeverage && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-[0.12em] text-stone-400">Pilihan Susu</label>
                <select
                  value={milkOption}
                  onChange={(e) => setMilkOption(e.target.value)}
                  className="w-full p-2.5 bg-white border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00754a]/30 focus:border-[#00754a] transition-all"
                  aria-label="Pilihan susu"
                >
                  {MILK_OPTIONS.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-[0.12em] text-stone-400">Tingkat Es</label>
                <select
                  value={iceLevel}
                  onChange={(e) => setIceLevel(e.target.value)}
                  className="w-full p-2.5 bg-white border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00754a]/30 focus:border-[#00754a] transition-all"
                  aria-label="Tingkat es"
                >
                  {ICE_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Nutrition card */}
          {(ingredients || calories) && (
            <div className="bg-white rounded-2xl p-4 border border-stone-100 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400">Komposisi &amp; Nutrisi</h4>
              {ingredients && (
                <p className="text-sm text-stone-600">
                  <span className="font-semibold text-stone-800">Bahan:</span> {ingredients}
                </p>
              )}
              <div className="grid grid-cols-4 gap-2 pt-1 text-center">
                {[
                  { label: 'Kalori', value: calories },
                  { label: 'Gula', value: '22 g' },
                  { label: 'Lemak', value: '7 g' },
                  { label: 'Kafein', value: '150 mg' },
                ].map((item) => (
                  <div key={item.label} className="bg-stone-50 rounded-xl p-2 border border-stone-100">
                    <p className="text-[10px] text-stone-400 mb-0.5">{item.label}</p>
                    <p className="text-xs font-bold text-stone-800">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA footer */}
        <div className="px-6 sm:px-8 py-5 bg-white border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            onClick={() => onToggleWishlist(id)}
            className={`sb-btn px-5 py-2.5 text-sm font-semibold flex items-center justify-center gap-2 border transition-all ${
              isWishlist
                ? 'bg-[#12342d] text-[#c99b41] border-[#c99b41]/40'
                : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-300'
            }`}
          >
            <Heart className={`w-4 h-4 ${isWishlist ? 'fill-[#c99b41] text-[#c99b41]' : ''}`} />
            <span>{isWishlist ? 'Tersimpan di Wishlist' : 'Tambah ke Wishlist'}</span>
          </button>

          <button
            onClick={() => onAddToCart(name, selectedSize)}
            disabled={stock === 0}
            className={`flex-1 sb-btn py-2.5 text-sm font-bold flex items-center justify-center gap-2 shadow-sm ${
              stock > 0
                ? 'sb-btn-primary'
                : 'bg-stone-200 text-stone-400 cursor-not-allowed border-stone-200'
            }`}
          >
            {stock > 0 ? `Tambah ke Pesanan — ${formattedPrice}` : 'Stok Habis'}
          </button>
        </div>
      </div>
    </div>
  );
}
