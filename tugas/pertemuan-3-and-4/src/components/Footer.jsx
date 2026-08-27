import React from 'react';
import { Briefcase, Globe, Share2, MessageSquare, Mail } from 'lucide-react';

const Footer = ({ totalJobs, onNavigateAbout, onNavigateJobs }) => {
  return (
    <footer className="bg-[#4a154b] text-[#f9f0ff]/80 border-t border-[#4a154b] pt-14 pb-8" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Footer Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#4a154b] flex items-center justify-center shadow-md">
                <Briefcase size={20} />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">CareerHub</span>
            </div>
            <p className="text-[#f9f0ff]/80 text-xs sm:text-sm leading-relaxed max-w-sm">
              CareerHub adalah platform pencarian kerja modern dan terpercaya untuk menghubungkan talenta terbaik Indonesia dengan perusahaan impian.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-[#4a154b] border border-white/20 flex items-center justify-center text-white transition-colors" 
                aria-label="Website" 
                onClick={(e) => e.preventDefault()}
              >
                <Globe size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-[#4a154b] border border-white/20 flex items-center justify-center text-white transition-colors" 
                aria-label="Share" 
                onClick={(e) => e.preventDefault()}
              >
                <Share2 size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-[#4a154b] border border-white/20 flex items-center justify-center text-white transition-colors" 
                aria-label="Community" 
                onClick={(e) => e.preventDefault()}
              >
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Nav Links Column 1 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigasi Utama</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a 
                  href="#jobs" 
                  className="hover:text-white transition-colors"
                  onClick={(e) => { e.preventDefault(); onNavigateJobs && onNavigateJobs(); }}
                >
                  Daftar Lowongan ({totalJobs})
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="hover:text-white transition-colors"
                  onClick={(e) => { e.preventDefault(); onNavigateAbout && onNavigateAbout(); }}
                >
                  Tentang CareerHub
                </a>
              </li>
              <li>
                <a 
                  href="#jobs" 
                  className="hover:text-white transition-colors"
                  onClick={(e) => { e.preventDefault(); onNavigateJobs && onNavigateJobs(); }}
                >
                  Panduan Karier
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Links Column 2 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Kategori Populer</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#jobs" className="hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); onNavigateJobs && onNavigateJobs(); }}>Frontend Developer</a></li>
              <li><a href="#jobs" className="hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); onNavigateJobs && onNavigateJobs(); }}>Backend Engineer</a></li>
              <li><a href="#jobs" className="hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); onNavigateJobs && onNavigateJobs(); }}>UI/UX Product Designer</a></li>
              <li><a href="#jobs" className="hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); onNavigateJobs && onNavigateJobs(); }}>Mobile App Developer</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Langganan Info</h4>
            <p className="text-xs text-[#f9f0ff]/80 leading-relaxed">
              Dapatkan pembaruan lowongan kerja terbaru di inbox email kamu.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="email" 
                  placeholder="Email kamu..." 
                  required 
                  className="w-full pl-10 pr-3 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-300 text-xs focus:bg-white focus:text-[#1d1d1d] focus:placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-2 rounded-full bg-white hover:bg-[#f9f0ff] text-[#4a154b] font-bold text-xs transition-colors shadow-sm cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Footer Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-xs text-[#f9f0ff]/70 font-medium">
          <p>© 2026 CareerHub | React Fundamental • Tailwind CSS v4</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

