import React from 'react';
import { ArrowRight, BarChart3, CheckCircle2, PackageSearch } from 'lucide-react';

export default function HeroBanner({ onExploreClick, totalProducts, availableProducts }) {
  const availabilityRate = Math.round((availableProducts / totalProducts) * 100);

  return (
    <section className="relative overflow-hidden border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-xs font-bold text-[#12342d] border border-stone-200 shadow-sm">
              <PackageSearch className="w-4 h-4 text-[#00754a]" />
              Katalog lokal untuk UTS React Fundamental
            </div>

            <div className="space-y-5">
              <h1 className="text-display-xl text-stone-950 max-w-4xl">
                Kelola katalog produk dengan tampilan rapi dan profesional.
              </h1>
              <p className="text-body-md text-stone-600 max-w-2xl">
                Dashboard, pencarian, filter, wishlist, status stok, dan detail produk dibuat dalam satu pengalaman yang konsisten dan responsif.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onExploreClick}
                className="sb-btn sb-btn-primary px-6 py-3 text-sm gap-2"
              >
                Lihat Katalog
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#dashboard-summary"
                className="sb-btn sb-btn-outline px-6 py-3 text-sm"
              >
                Lihat Statistik
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sb-card p-5 sm:p-6 bg-white">
              <div className="flex items-center justify-between pb-5 border-b border-stone-100">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-stone-400">Overview</p>
                  <h2 className="mt-1 text-2xl font-extrabold tracking-[-0.04em] text-stone-950">Alapay Catalog</h2>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#12342d] text-white grid place-items-center">
                  <BarChart3 className="w-6 h-6" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 py-5">
                <div className="rounded-2xl bg-stone-50 border border-stone-100 p-4">
                  <p className="text-xs text-stone-500 font-semibold">Total Produk</p>
                  <p className="mt-2 text-3xl font-black tracking-[-0.05em] text-stone-950">{totalProducts}</p>
                </div>
                <div className="rounded-2xl bg-[#e8f3ef] border border-[#d4e9e2] p-4">
                  <p className="text-xs text-[#00754a] font-semibold">Siap Dipesan</p>
                  <p className="mt-2 text-3xl font-black tracking-[-0.05em] text-[#12342d]">{availableProducts}</p>
                </div>
              </div>

              <div className="rounded-2xl bg-[#12342d] p-4 text-white">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 grid place-items-center">
                      <CheckCircle2 className="w-5 h-5 text-[#c99b41]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Ketersediaan stok</p>
                      <p className="text-xs text-white/65">Berdasarkan data produk lokal</p>
                    </div>
                  </div>
                  <span className="text-2xl font-black tracking-[-0.05em] text-[#c99b41]">{availabilityRate}%</span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full bg-[#c99b41]" style={{ width: `${availabilityRate}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
