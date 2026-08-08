import React from 'react';
import { CheckCircle2, Heart, Layers, Package, TrendingUp, XCircle } from 'lucide-react';

export default function Dashboard({ products, categories, onNavigateToCatalog, onFilterCategory, onFilterStatus }) {
  const totalProducts = products.length;
  const availableProducts = products.filter((product) => product.stock > 0).length;
  const outOfStockProducts = products.filter((product) => product.stock === 0).length;
  const wishlistProducts = products.filter((product) => product.isWishlist).length;
  const totalCategories = categories.filter((category) => category !== 'Semua').length;
  const categoryCounts = categories
    .filter((category) => category !== 'Semua')
    .map((category) => ({
      category,
      count: products.filter((product) => product.category === category).length,
    }));
  const bestSellersCount = products.filter((product) => product.status === 'Best Seller').length;
  const newProductsCount = products.filter((product) => product.status === 'Produk Baru').length;
  const discountProductsCount = products.filter((product) => product.status === 'Diskon').length;

  const statCards = [
    {
      label: 'Total Produk',
      value: totalProducts,
      description: 'Varian menu aktif',
      icon: Package,
    },
    {
      label: 'Produk Tersedia',
      value: availableProducts,
      description: `${Math.round((availableProducts / totalProducts) * 100)}% stok siap`,
      icon: CheckCircle2,
      onClick: () => onFilterStatus?.('Ready Stock'),
    },
    {
      label: 'Stok Habis',
      value: outOfStockProducts,
      description: 'Perlu restok',
      icon: XCircle,
      onClick: () => onFilterStatus?.('Stok Habis'),
    },
    {
      label: 'Wishlist',
      value: wishlistProducts,
      description: 'Produk favorit',
      icon: Heart,
      onClick: () => onNavigateToCatalog('wishlist'),
    },
    {
      label: 'Kategori',
      value: totalCategories,
      description: 'Segmentasi produk',
      icon: Layers,
    },
  ];

  return (
    <div id="dashboard-summary" className="space-y-8 animate-fadeIn scroll-mt-28">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00754a]">Ringkasan</span>
          <h2 className="mt-1 text-3xl sm:text-4xl font-black tracking-[-0.05em] text-stone-950">Dashboard produk</h2>
          <p className="mt-2 text-sm text-stone-500">Monitoring katalog, stok, status, dan kategori.</p>
        </div>
        <button
          onClick={onNavigateToCatalog}
          className="sb-btn sb-btn-primary px-5 py-3 text-sm shadow-sm"
        >
          Lihat Semua Produk
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {statCards.map((card) => {
          const Icon = card.icon;
          const clickableClass = card.onClick ? 'cursor-pointer' : '';

          return (
            <button
              key={card.label}
              onClick={card.onClick}
              className={`sb-card p-5 text-left flex flex-col gap-5 ${clickableClass}`}
              type="button"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400">{card.label}</span>
                <div className="w-10 h-10 rounded-2xl bg-stone-50 border border-stone-100 text-[#12342d] grid place-items-center">
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div>
                <div className="text-4xl font-black tracking-[-0.06em] text-stone-950">{card.value}</div>
                <p className="mt-1 text-xs font-semibold text-stone-500">{card.description}</p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 sb-card p-6 space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-black tracking-[-0.04em] text-stone-950">Distribusi kategori</h3>
              <p className="mt-1 text-sm text-stone-500">Klik kategori untuk membuka filter katalog.</p>
            </div>
            <TrendingUp className="w-5 h-5 text-[#00754a]" />
          </div>

          <div className="space-y-4">
            {categoryCounts.map(({ category, count }) => {
              const percentage = Math.round((count / totalProducts) * 100);

              return (
                <button
                  key={category}
                  onClick={() => onFilterCategory(category)}
                  className="w-full text-left space-y-2 rounded-2xl p-3 hover:bg-stone-50 transition-colors"
                >
                  <div className="flex justify-between gap-4 text-sm">
                    <span className="font-bold text-stone-800">{category}</span>
                    <span className="font-bold text-[#00754a]">{count} produk · {percentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#00754a] rounded-full" style={{ width: `${percentage}%` }} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-4 sb-card-dark p-6 text-white space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#c99b41]">Status</span>
            <h3 className="mt-2 text-2xl font-black tracking-[-0.05em]">Ringkasan katalog</h3>
            <p className="mt-2 text-sm text-white/65">Status utama produk yang sedang berjalan.</p>
          </div>

          <div className="space-y-3">
            {[
              ['Best Seller', bestSellersCount],
              ['Produk Baru', newProductsCount],
              ['Promo Diskon', discountProductsCount],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between rounded-2xl bg-white/8 border border-white/10 p-4">
                <span className="text-sm font-semibold text-white/75">{label}</span>
                <span className="text-lg font-black text-white">{value}</span>
              </div>
            ))}
          </div>

          <button
            onClick={onNavigateToCatalog}
            className="w-full sb-btn bg-white text-[#12342d] hover:bg-stone-100 py-3 text-sm"
          >
            Buka Katalog
          </button>
        </div>
      </div>
    </div>
  );
}
