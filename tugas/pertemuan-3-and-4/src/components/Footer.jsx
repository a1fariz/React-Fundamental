import React from 'react';
import { Briefcase, Globe, Share2, MessageSquare, Mail } from 'lucide-react';

const Footer = ({ totalJobs, onNavigateAbout, onNavigateJobs }) => {
  return (
    <footer className="site-footer" id="about">
      <div className="footer-container">
        {/* Footer Main Content Grid */}
        <div className="footer-grid">
          
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <Briefcase className="footer-brand-icon" size={24} />
              <span className="footer-brand-text">CareerHub</span>
            </div>
            <p className="footer-desc">
              CareerHub adalah platform pencarian kerja modern dan terpercaya untuk menghubungkan talenta terbaik Indonesia dengan perusahaan impian.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Website" onClick={(e) => e.preventDefault()}>
                <Globe size={18} />
              </a>
              <a href="#" className="social-icon" aria-label="Share" onClick={(e) => e.preventDefault()}>
                <Share2 size={18} />
              </a>
              <a href="#" className="social-icon" aria-label="Community" onClick={(e) => e.preventDefault()}>
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Nav Links Column 1 */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigasi Utama</h4>
            <ul className="footer-links">
              <li>
                <a href="#jobs" onClick={(e) => { e.preventDefault(); onNavigateJobs && onNavigateJobs(); }}>
                  Daftar Lowongan ({totalJobs})
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); onNavigateAbout && onNavigateAbout(); }}>
                  Tentang CareerHub
                </a>
              </li>
              <li>
                <a href="#jobs" onClick={(e) => { e.preventDefault(); onNavigateJobs && onNavigateJobs(); }}>
                  Panduan Karier
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Links Column 2 */}
          <div className="footer-col">
            <h4 className="footer-heading">Kategori Populer</h4>
            <ul className="footer-links">
              <li><a href="#jobs" onClick={(e) => { e.preventDefault(); onNavigateJobs && onNavigateJobs(); }}>Frontend Developer</a></li>
              <li><a href="#jobs" onClick={(e) => { e.preventDefault(); onNavigateJobs && onNavigateJobs(); }}>Backend Engineer</a></li>
              <li><a href="#jobs" onClick={(e) => { e.preventDefault(); onNavigateJobs && onNavigateJobs(); }}>UI/UX Product Designer</a></li>
              <li><a href="#jobs" onClick={(e) => { e.preventDefault(); onNavigateJobs && onNavigateJobs(); }}>Mobile App Developer</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="footer-col newsletter-col">
            <h4 className="footer-heading">Langganan Info Lowongan</h4>
            <p className="newsletter-text">Dapatkan pembaruan lowongan kerja terbaru langsung di inbox email kamu setiap minggu.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <div className="newsletter-input-wrapper">
                <Mail size={16} className="newsletter-icon" />
                <input type="email" placeholder="Email kamu..." required />
              </div>
              <button type="submit" className="btn-newsletter">Subscribe</button>
            </form>
          </div>

        </div>

        {/* Footer Bottom Copyright */}
        <div className="footer-bottom">
          <p>© 2026 CareerHub | React Fundamental • Tugas Pertemuan 3 & 4</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
