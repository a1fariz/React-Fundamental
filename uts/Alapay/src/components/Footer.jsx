import React from 'react';

function FooterLink({ children }) {
  return (
    <li>
      <span className="text-white/55 hover:text-white transition-colors cursor-pointer text-sm leading-relaxed">
        {children}
      </span>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#12342d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#00754a] grid place-items-center text-white shadow-sm">
                <span className="text-sm font-black tracking-[-0.08em]">AP</span>
              </div>
              <div>
                <span className="block font-extrabold text-lg tracking-[-0.04em]">Alapay</span>
                <p className="text-[11px] text-white/45 font-semibold">Product catalog</p>
              </div>
            </div>
            <p className="text-sm text-white/55 leading-relaxed">
              Katalog digital untuk produk kopi, minuman, dan pastry dengan fitur dashboard,
              pencarian, filter, wishlist, dan detail produk.
            </p>
            <p className="text-xs text-[#c99b41] font-bold">Pelatihan React Fundamental 2026</p>
          </div>

          {/* Tentang */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">Tentang</h4>
            <ul className="space-y-2">
              <FooterLink>Brand Alapay</FooterLink>
              <FooterLink>Kualitas Produk</FooterLink>
              <FooterLink>Layanan Pelanggan</FooterLink>
              <FooterLink>Komunitas</FooterLink>
            </ul>
          </div>

          {/* Kategori */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">Kategori Menu</h4>
            <ul className="space-y-2">
              <FooterLink>Espresso &amp; Coffee</FooterLink>
              <FooterLink>Cold Brew</FooterLink>
              <FooterLink>Tea &amp; Refreshers</FooterLink>
              <FooterLink>Bakery &amp; Food</FooterLink>
            </ul>
          </div>

          {/* UTS Card */}
          <div className="bg-white/6 border border-white/10 rounded-2xl p-5 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-[#c99b41]">UTS React</h4>
            <p className="text-sm text-white/55 leading-relaxed">
              Dibuat dengan React, Vite, Tailwind CSS, data lokal, reusable components, dan event handling.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-sm text-white/35">
          <p>© 2026 Alapay Store &bull; Project UTS React Fundamental.</p>
          <div className="flex items-center gap-5">
            <span className="hover:text-white/70 cursor-pointer transition-colors">Privasi</span>
            <span className="hover:text-white/70 cursor-pointer transition-colors">Syarat &amp; Ketentuan</span>
            <span className="hover:text-white/70 cursor-pointer transition-colors">Cookie</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
