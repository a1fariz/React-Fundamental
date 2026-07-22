import React, { useState } from 'react';
import { Briefcase, Bookmark, Menu, X } from 'lucide-react';

const Header = ({ bookmarkCount, activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Brand Logo & Name */}
        <div className="header-brand" onClick={() => setActiveTab('explore')}>
          <div className="brand-icon-wrapper">
            <Briefcase className="brand-icon" size={22} />
          </div>
          <div className="brand-text">
            <h1 className="brand-title">CareerHub</h1>
            <p className="brand-slogan">Find Your Dream Job</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <button 
            className={`nav-link ${activeTab === 'explore' ? 'active' : ''}`}
            onClick={() => setActiveTab('explore')}
          >
            Lowongan Pekerjaan
          </button>
          <button 
            className={`nav-link ${activeTab === 'saved' ? 'active' : ''}`}
            onClick={() => setActiveTab('saved')}
          >
            <Bookmark size={16} />
            Pekerjaan Tersimpan
            {bookmarkCount > 0 && (
              <span className="bookmark-badge">{bookmarkCount}</span>
            )}
          </button>
          <button 
            className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            Tentang Kami
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <button 
            className={`mobile-nav-link ${activeTab === 'explore' ? 'active' : ''}`}
            onClick={() => { setActiveTab('explore'); setMobileMenuOpen(false); }}
          >
            Lowongan Pekerjaan
          </button>
          <button 
            className={`mobile-nav-link ${activeTab === 'saved' ? 'active' : ''}`}
            onClick={() => { setActiveTab('saved'); setMobileMenuOpen(false); }}
          >
            <Bookmark size={18} />
            Pekerjaan Tersimpan ({bookmarkCount})
          </button>
          <button 
            className={`mobile-nav-link ${activeTab === 'about' ? 'active' : ''}`}
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
