import React from 'react';
import { Clapperboard, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[#dddddd] bg-[#f7f7f7]">
      
      {/* 3-Column Footer Link Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Dukungan */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-[#222222]">Dukungan</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[#6a6a6a]">
              <li><a href="#" className="hover:underline">Pusat Bantuan MovieFlix</a></li>
              <li><a href="#" className="hover:underline">Panduan Pertemuan 1–7</a></li>
              <li><a href="#" className="hover:underline">Informasi Hak Cipta</a></li>
              <li><a href="#" className="hover:underline">Klaim Lisensi Film</a></li>
            </ul>
          </div>

          {/* Column 2: Koleksi Film */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-[#222222]">Koleksi & Kategori</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[#6a6a6a]">
              <li><a href="#" className="hover:underline">Film Sci-Fi Populer</a></li>
              <li><a href="#" className="hover:underline">Film Action & Drama</a></li>
              <li><a href="#" className="hover:underline">Film Sedang Tayang</a></li>
              <li><a href="#" className="hover:underline">Daftar Favorite Pilihan</a></li>
            </ul>
          </div>

          {/* Column 3: Tentang MovieFlix */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-[#222222]">MovieFlix Studio</h4>
            <p className="text-sm text-[#6a6a6a] leading-relaxed">
              MovieFlix adalah platform sederhana pengelola koleksi film favorit Anda yang dibuat dengan React & Tailwind CSS.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#222222] font-medium mt-1">
              <Clapperboard className="w-4 h-4 text-[#ff385c]" />
              <span>Version 1.0</span>
            </div>
          </div>

        </div>

        {/* Legal Sub-Band */}
        <div className="mt-12 pt-8 border-t border-[#dddddd] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6a6a6a]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} MovieFlix, Inc.</span>
            <span>·</span>
            <a href="#" className="hover:underline">Privasi</a>
            <span>·</span>
            <a href="#" className="hover:underline">Syarat & Ketentuan</a>
          </div>

          <div className="flex items-center gap-4 font-semibold text-[#222222]">
            <div className="flex items-center gap-1.5 cursor-pointer hover:underline">
              <Globe className="w-4 h-4" />
              <span>Bahasa Indonesia (ID)</span>
            </div>
            <span>IDR</span>
            <div className="flex items-center gap-1.5 text-[#6a6a6a]">
              <span>Dibuat oleh <strong className="text-[#222222] font-bold">Alfarizi</strong></span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
