import React from 'react';
import { Briefcase } from 'lucide-react';

const Footer = ({ totalJobs }) => {
  return (
    <footer className="bg-[#4a154b] text-[#f9f0ff]/80 border-t border-[#4a154b] pt-12 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Footer Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white text-[#4a154b] flex items-center justify-center shadow-md">
              <Briefcase size={20} />
            </div>
            <div>
              <span className="text-lg font-extrabold text-white tracking-tight">CareerHub</span>
              <p className="text-xs text-[#f9f0ff]/70">Platform Manajemen & Pencarian Lowongan Kerja</p>
            </div>
          </div>

          <div className="text-xs text-center sm:text-right font-medium">
            <p className="text-white font-bold">{totalJobs} Lowongan Tersedia</p>
            <p className="text-[#f9f0ff]/70 mt-0.5">Materi Bab 9-12: Filter, Sort, Pagination & Editing</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#f9f0ff]/70 font-medium">
          <p>CareerHub - React Fundamental</p>
          <div className="flex items-center gap-1 text-[#f9f0ff]/90">
            <span>Dibuat menggunakan React & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
