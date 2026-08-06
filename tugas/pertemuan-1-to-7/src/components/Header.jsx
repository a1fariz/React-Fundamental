import React from 'react';
import { Film, Clapperboard, Globe, Menu, User, Sparkles } from 'lucide-react';

export function Header({ activeCategory, setActiveCategory }) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#dddddd] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo - Airbnb Rausch Style */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-[#ff385c] flex items-center justify-center text-white shadow-sm group-hover:bg-[#e00b41] transition-colors">
              <Clapperboard className="w-5 h-5 fill-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#ff385c] leading-none">
                movieflix
              </span>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-[#6a6a6a]">
                Collection
              </span>
            </div>
          </div>

          {/* Product Category Tabs - Airbnb Style Nav Tabs */}
          <nav className="hidden md:flex items-center gap-8 h-full">
            <button
              onClick={() => setActiveCategory('all')}
              className={`flex items-center gap-2 h-full border-b-2 font-medium text-sm transition-colors ${
                activeCategory === 'all'
                  ? 'border-[#222222] text-[#222222] font-semibold'
                  : 'border-transparent text-[#6a6a6a] hover:text-[#222222]'
              }`}
            >
              <Film className="w-4 h-4" />
              <span>Semua Film</span>
            </button>

            <button
              onClick={() => setActiveCategory('showing')}
              className={`flex items-center gap-2 h-full border-b-2 font-medium text-sm transition-colors ${
                activeCategory === 'showing'
                  ? 'border-[#222222] text-[#222222] font-semibold'
                  : 'border-transparent text-[#6a6a6a] hover:text-[#222222]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Sedang Tayang</span>
            </button>

            <button
              onClick={() => setActiveCategory('favorite')}
              className={`flex items-center gap-2 h-full border-b-2 font-medium text-sm transition-colors ${
                activeCategory === 'favorite'
                  ? 'border-[#ff385c] text-[#ff385c] font-semibold'
                  : 'border-transparent text-[#6a6a6a] hover:text-[#222222]'
              }`}
            >
              <span className="text-xs">❤️</span>
              <span>Favorite</span>
            </button>
          </nav>

          {/* Right Action Utilities - Airbnb User Menu */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f7f7f7] border border-[#dddddd] text-xs font-semibold text-[#222222]">
              <Sparkles className="w-3.5 h-3.5 text-[#ff385c]" />
              <span>Tugas 1-7</span>
            </div>

            <button 
              aria-label="Bahasa & Wilayah"
              className="p-2.5 rounded-full text-[#222222] hover:bg-[#f7f7f7] transition-colors"
            >
              <Globe className="w-4 h-4" />
            </button>

            {/* Profile Pill Menu */}
            <div className="flex items-center gap-2.5 p-1.5 pl-3 border border-[#dddddd] rounded-full hover:shadow-md transition-shadow cursor-pointer bg-white">
              <Menu className="w-4 h-4 text-[#222222]" />
              <div className="w-7 h-7 rounded-full bg-[#6a6a6a] flex items-center justify-center text-white text-xs font-bold">
                <User className="w-4 h-4" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
