import React from 'react';
import { Briefcase, Target, ShieldCheck, Zap, Users, Heart, ArrowRight, Award } from 'lucide-react';

const About = ({ onExploreJobs }) => {
  return (
    <div className="about-page">
      {/* About Hero */}
      <section className="about-hero">
        <div className="about-container">
          <div className="about-badge">
            <Briefcase size={16} />
            <span>Tentang CareerHub</span>
          </div>
          <h1 className="about-title">
            Menghubungkan Talenta Terbaik <br />
            dengan Masa Depan Cerah
          </h1>
          <p className="about-subtitle">
            CareerHub didirikan untuk mentransformasi pengalaman mencari kerja di Indonesia menjadi lebih transparan, mudah, dan menyenangkan bagi pencari kerja serta perusahaan.
          </p>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="about-values-section">
        <div className="about-container">
          <div className="values-grid">
            <div className="value-card card-aubergine">
              <div className="value-icon-box icon-white">
                <Target size={24} />
              </div>
              <h3>Visi Kami</h3>
              <p>
                Menjadi platform pengembangan karier dan pencarian kerja nomor 1 di Asia Tenggara yang menjembatani kesenjangan antara talenta berbakat dan peluang kerja impian.
              </p>
            </div>

            <div className="value-card card-cream">
              <div className="value-icon-box icon-aubergine">
                <Users size={24} />
              </div>
              <h3>Misi Kami</h3>
              <p>
                Menyediakan akses lowongan kerja berkualitas, mempermudah proses melamar tanpa hambatan, serta memberdayakan setiap profesional untuk mencapai potensi maksimalnya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Advantages / Why Choose Us */}
      <section className="about-features-section">
        <div className="about-container">
          <h2 className="section-title text-center">Mengapa Memilih CareerHub?</h2>
          <p className="section-subtitle text-center">Keunggulan utama yang membedakan platform kami dari yang lain.</p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Zap size={22} />
              </div>
              <h4>Proses Cepat & Transparan</h4>
              <p>Status lamaran dan konfirmasi dikirimkan secara langsung ke email kamu tanpa menunggu lama.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <ShieldCheck size={22} />
              </div>
              <h4>Perusahaan Terverifikasi</h4>
              <p>Semua lowongan berasal dari perusahaan terpercaya yang telah melewati verifikasi tim kami.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Award size={22} />
              </div>
              <h4>Informasi Gaji Jelas</h4>
              <p>Setiap lowongan dilengkapi informasi rentang gaji transparan untuk membantu keputusan kariermu.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Heart size={22} />
              </div>
              <h4>Ramah Pengguna</h4>
              <p>Antarmuka bersih, responsif, dan mudah digunakan di HP, Tablet, maupun Desktop.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Banner */}
      <section className="about-stats-section">
        <div className="about-container">
          <div className="about-stats-grid">
            <div className="about-stat-item">
              <h3>10.000+</h3>
              <p>Talenta Terhubung</p>
            </div>
            <div className="about-stat-item">
              <h3>500+</h3>
              <p>Perusahaan Mitra</p>
            </div>
            <div className="about-stat-item">
              <h3>98%</h3>
              <p>Tingkat Kepuasan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Call to Action */}
      <section className="about-cta-section">
        <div className="about-container">
          <div className="about-cta-card">
            <h2>Siap Menemukan Karier Impianmu?</h2>
            <p>Jelajahi ratusan lowongan kerja terbaru dari perusahaan startup dan korporasi terkemuka.</p>
            <button className="btn-primary" onClick={onExploreJobs}>
              Lihat Lowongan Pekerjaan
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
