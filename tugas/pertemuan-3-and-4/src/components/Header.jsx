import React, { useState } from 'react';
import { Briefcase, Bookmark, Menu, X } from 'lucide-react';

const Header = ({ bookmarkCount, activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e6e6e6] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <div 
          className="flex items-center gap-3 cursor-pointer group select-none" 
          onClick={() => setActiveTab('explore')}
        >
          <div className="w-10 h-10 rounded-xl bg-[#4a154b] flex items-center justify-center text-white shadow-md shadow-[#4a154b]/20 group-hover:bg-[#611f69] group-hover:scale-105 transition-all duration-200">
            <Briefcase size={20} />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-[#4a154b] tracking-tight leading-none transition-colors">
              CareerHub
            </h1>
            <p className="text-xs font-medium text-[#696969] mt-0.5">Find Your Dream Job</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <button 
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'explore' 
                ? 'bg-[#f9f0ff] text-[#4a154b] font-bold shadow-xs' 
                : 'text-[#1d1d1d] hover:text-[#4a154b] hover:bg-[#f9f0ff]/60'
            }`}
            onClick={() => setActiveTab('explore')}
          >
            Lowongan Pekerjaan
          </button>
          
          <button 
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'saved' 
                ? 'bg-[#f9f0ff] text-[#4a154b] font-bold shadow-xs' 
                : 'text-[#1d1d1d] hover:text-[#4a154b] hover:bg-[#f9f0ff]/60'
            }`}
            onClick={() => setActiveTab('saved')}
          >
            <Bookmark size={16} className={activeTab === 'saved' ? 'fill-[#4a154b]' : ''} />
            Pekerjaan Tersimpan
            {bookmarkCount > 0 && (
              <span className="bg-[#4a154b] text-white text-xs font-bold px-2 py-0.5 rounded-full ml-0.5">
                {bookmarkCount}
              </span>
            )}
          </button>

          <button 
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'about' 
                ? 'bg-[#f9f0ff] text-[#4a154b] font-bold shadow-xs' 
                : 'text-[#1d1d1d] hover:text-[#4a154b] hover:bg-[#f9f0ff]/60'
            }`}
            onClick={() => setActiveTab('about')}
          >
            Tentang Kami
          </button>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden p-2 rounded-lg text-[#1d1d1d] hover:text-[#4a154b] hover:bg-[#f9f0ff] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#e6e6e6] px-4 pt-2 pb-4 space-y-1.5 shadow-lg">
          <button 
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between ${
              activeTab === 'explore' 
                ? 'bg-[#f9f0ff] text-[#4a154b]' 
                : 'text-[#1d1d1d] hover:bg-[#f9f0ff]'
            }`}
            onClick={() => { setActiveTab('explore'); setMobileMenuOpen(false); }}
          >
            Lowongan Pekerjaan
          </button>

          <button 
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between ${
              activeTab === 'saved' 
                ? 'bg-[#f9f0ff] text-[#4a154b]' 
                : 'text-[#1d1d1d] hover:bg-[#f9f0ff]'
            }`}
            onClick={() => { setActiveTab('saved'); setMobileMenuOpen(false); }}
          >
            <div className="flex items-center gap-2">
              <Bookmark size={18} />
              Pekerjaan Tersimpan
            </div>
            {bookmarkCount > 0 && (
              <span className="bg-[#4a154b] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {bookmarkCount}
              </span>
            )}
          </button>

          <button 
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold ${
              activeTab === 'about' 
                ? 'bg-[#f9f0ff] text-[#4a154b]' 
                : 'text-[#1d1d1d] hover:bg-[#f9f0ff]'
            }`}
            onClick={() => { setActiveTab('about'); setMobileMenuOpen(false); }}
          >
            Tentang Kami
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

