import React from 'react';
import { Search, Building2, Users, Award, X } from 'lucide-react';
import { jobCategories } from '../data/jobs';

const Hero = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, totalJobs }) => {
  return (
    <section className="relative bg-gradient-to-br from-[#f9f0ff]/80 via-white to-[#f4ede4]/80 text-[#1d1d1d] py-12 md:py-16 overflow-hidden border-b border-[#e6e6e6]">
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8">
        
        {/* Hero Title & Description */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f9f0ff] border border-[#4a154b]/20 text-[#4a154b] text-xs font-semibold tracking-wide uppercase">
            <span>🚀 Temukan Karir Terbaikmu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4a154b] tracking-tight leading-tight">
            Temukan Karier Impianmu
          </h2>
          <p className="text-[#696969] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            CareerHub membantu kamu menemukan berbagai lowongan pekerjaan dari perusahaan terbaik di Indonesia.
          </p>
        </div>

        {/* Search Bar Input */}
        <div className="max-w-2xl mx-auto">
          <div className="relative flex items-center">
            <Search className="absolute left-4 text-[#696969] pointer-events-none" size={20} />
            <input
              type="text"
              placeholder="Cari lowongan pekerjaan atau nama perusahaan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 sm:py-4 bg-white text-[#1d1d1d] rounded-full border border-[#e6e6e6] shadow-md placeholder-[#696969]/70 font-medium text-sm sm:text-base focus:border-[#4a154b] focus:ring-2 focus:ring-[#4a154b]/20 focus:outline-none transition-all duration-200"
            />
            {searchTerm && (
              <button 
                className="absolute right-4 text-[#696969] hover:text-[#4a154b] p-1 rounded-full hover:bg-[#f9f0ff] transition-colors"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#696969]">
            Kategori:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {jobCategories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#4a154b] text-white font-bold shadow-sm'
                    : 'bg-white hover:bg-[#f9f0ff] text-[#696969] hover:text-[#4a154b] border border-[#e6e6e6]'
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Simple Stats Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-3xl mx-auto">
          <div className="bg-white border border-[#e6e6e6] p-4 rounded-2xl flex items-center justify-center gap-3.5 text-left shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#f9f0ff] text-[#4a154b] flex items-center justify-center shrink-0">
              <Building2 size={20} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#4a154b] leading-tight">{totalJobs}+</h4>
              <p className="text-xs text-[#696969] font-medium">Lowongan Kerja</p>
            </div>
          </div>

          <div className="bg-white border border-[#e6e6e6] p-4 rounded-2xl flex items-center justify-center gap-3.5 text-left shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#f9f0ff] text-[#4a154b] flex items-center justify-center shrink-0">
              <Users size={20} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#4a154b] leading-tight">50+</h4>
              <p className="text-xs text-[#696969] font-medium">Perusahaan Mitra</p>
            </div>
          </div>

          <div className="bg-white border border-[#e6e6e6] p-4 rounded-2xl flex items-center justify-center gap-3.5 text-left shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#f9f0ff] text-[#4a154b] flex items-center justify-center shrink-0">
              <Award size={20} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#4a154b] leading-tight">100%</h4>
              <p className="text-xs text-[#696969] font-medium">Terverifikasi</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

