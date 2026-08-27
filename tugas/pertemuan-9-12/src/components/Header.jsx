import React from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';

const Header = ({ totalJobs, openJobsCount }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#e6e6e6] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-3 select-none">
          <div className="w-10 h-10 rounded-xl bg-[#4a154b] flex items-center justify-center text-white shadow-md shadow-[#4a154b]/20">
            <Briefcase size={20} />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-[#4a154b] tracking-tight leading-none">
              CareerHub
            </h1>
            <p className="text-xs font-medium text-[#696969] mt-0.5">Job Management App</p>
          </div>
        </div>

        {/* Stats Pill */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f9f0ff] border border-[#4a154b]/20 text-[#4a154b] text-xs font-semibold">
            <CheckCircle size={14} />
            <span>{openJobsCount} Lowongan Aktif</span>
          </div>
          <div className="px-3.5 py-1 rounded-full bg-slate-100 border border-[#e6e6e6] text-[#1d1d1d] text-xs font-bold">
            Total: {totalJobs} Posisi
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
