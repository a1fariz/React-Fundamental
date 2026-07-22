import React from 'react';
import { Search, Building2, Users, Award } from 'lucide-react';
import { jobCategories } from '../data/jobs';

const Hero = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, totalJobs }) => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Hero Title & Description */}
        <h2 className="hero-title">Temukan Karier Impianmu</h2>
        <p className="hero-description">
          CareerHub membantu kamu menemukan berbagai lowongan pekerjaan dari perusahaan terbaik di Indonesia.
        </p>

        {/* Search Bar Input */}
        <div className="hero-search-box">
          <div className="search-input-wrapper">
            <Search className="search-icon" size={18} />
            <input
              type="text"
              placeholder="Cari lowongan pekerjaan atau nama perusahaan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button 
                className="clear-search-btn"
                onClick={() => setSearchTerm('')}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="hero-categories">
          <span className="category-label">Kategori:</span>
          <div className="category-pills">
            {jobCategories.map((cat) => (
              <button
                key={cat}
                className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Simple Stats Banner */}
        <div className="hero-stats">
          <div className="stat-card">
            <Building2 size={20} className="stat-icon" />
            <div className="stat-text">
              <h4>{totalJobs}+</h4>
              <p>Lowongan Kerja</p>
            </div>
          </div>

          <div className="stat-card">
            <Users size={20} className="stat-icon" />
            <div className="stat-text">
              <h4>50+</h4>
              <p>Perusahaan Mitra</p>
            </div>
          </div>

          <div className="stat-card">
            <Award size={20} className="stat-icon" />
            <div className="stat-text">
              <h4>100%</h4>
              <p>Terverifikasi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
