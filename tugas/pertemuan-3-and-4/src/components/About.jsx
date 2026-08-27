import React from 'react';
import { Briefcase, Target, ShieldCheck, Zap, Users, Heart, ArrowRight, Award } from 'lucide-react';

const About = ({ onExploreJobs }) => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* About Hero Section */}
      <section className="relative bg-gradient-to-br from-[#f9f0ff]/90 via-white to-[#f4ede4]/90 text-[#1d1d1d] py-16 md:py-20 overflow-hidden border-b border-[#e6e6e6]">
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f9f0ff] border border-[#4a154b]/20 text-[#4a154b] text-xs font-semibold tracking-wide uppercase">
            <Briefcase size={16} />
            <span>Tentang CareerHub</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#4a154b] tracking-tight leading-tight">
            Menghubungkan Talenta Terbaik <br className="hidden sm:inline" />
            <span className="text-[#611f69]">
              dengan Masa Depan Cerah
            </span>
          </h1>

          <p className="text-[#696969] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            CareerHub didirikan untuk mentransformasi pengalaman mencari kerja di Indonesia menjadi lebih transparan, mudah, dan menyenangkan bagi pencari kerja serta perusahaan.
          </p>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-12 md:py-16 -mt-6 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Vision Card */}
            <div className="bg-[#4a154b] text-white rounded-3xl p-8 shadow-xl border border-[#4a154b] flex flex-col justify-between space-y-4 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center border border-white/20">
                <Target size={26} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Visi Kami</h3>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Menjadi platform pengembangan karier dan pencarian kerja nomor 1 di Asia Tenggara yang menjembatani kesenjangan antara talenta berbakat dan peluang kerja impian.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-[#f9f0ff] text-[#1d1d1d] rounded-3xl p-8 shadow-xl border border-[#4a154b]/20 flex flex-col justify-between space-y-4 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#4a154b] text-white flex items-center justify-center shadow-md">
                <Users size={26} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#4a154b] mb-2">Misi Kami</h3>
                <p className="text-[#696969] text-sm leading-relaxed">
                  Menyediakan akses lowongan kerja berkualitas, mempermudah proses melamar tanpa hambatan, serta memberdayakan setiap profesional untuk mencapai potensi maksimalnya.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Key Advantages / Why Choose Us */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4a154b] tracking-tight">
              Mengapa Memilih CareerHub?
            </h2>
            <p className="text-[#696969] text-sm sm:text-base">
              Keunggulan utama yang membedakan platform kami dari yang lain.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white rounded-2xl p-6 border border-[#e6e6e6] shadow-xs hover:border-[#4a154b] hover:shadow-md transition-all duration-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#f9f0ff] text-[#4a154b] flex items-center justify-center font-bold">
                <Zap size={22} />
              </div>
              <h4 className="text-base font-bold text-[#1d1d1d]">Proses Cepat & Transparan</h4>
              <p className="text-[#696969] text-xs leading-relaxed">
                Status lamaran dan konfirmasi dikirimkan secara langsung ke email kamu tanpa menunggu lama.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#e6e6e6] shadow-xs hover:border-[#4a154b] hover:shadow-md transition-all duration-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#f9f0ff] text-[#4a154b] flex items-center justify-center font-bold">
                <ShieldCheck size={22} />
              </div>
              <h4 className="text-base font-bold text-[#1d1d1d]">Perusahaan Terverifikasi</h4>
              <p className="text-[#696969] text-xs leading-relaxed">
                Semua lowongan berasal dari perusahaan terpercaya yang telah melewati verifikasi tim kami.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#e6e6e6] shadow-xs hover:border-[#4a154b] hover:shadow-md transition-all duration-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#f9f0ff] text-[#4a154b] flex items-center justify-center font-bold">
                <Award size={22} />
              </div>
              <h4 className="text-base font-bold text-[#1d1d1d]">Informasi Gaji Jelas</h4>
              <p className="text-[#696969] text-xs leading-relaxed">
                Setiap lowongan dilengkapi informasi rentang gaji transparan untuk membantu keputusan kariermu.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#e6e6e6] shadow-xs hover:border-[#4a154b] hover:shadow-md transition-all duration-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#f9f0ff] text-[#4a154b] flex items-center justify-center font-bold">
                <Heart size={22} />
              </div>
              <h4 className="text-base font-bold text-[#1d1d1d]">Ramah Pengguna</h4>
              <p className="text-[#696969] text-xs leading-relaxed">
                Antarmuka bersih, responsif, dan mudah digunakan di HP, Tablet, maupun Desktop.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Statistics Banner */}
      <section className="bg-[#4a154b] text-white py-12 border-y border-[#4a154b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">10.000+</h3>
              <p className="text-[#f9f0ff]/80 text-xs font-semibold uppercase tracking-wider mt-1">Talenta Terhubung</p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">500+</h3>
              <p className="text-[#f9f0ff]/80 text-xs font-semibold uppercase tracking-wider mt-1">Perusahaan Mitra</p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">98%</h3>
              <p className="text-[#f9f0ff]/80 text-xs font-semibold uppercase tracking-wider mt-1">Tingkat Kepuasan</p>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#4a154b] to-[#611f69] rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Siap Menemukan Karier Impianmu?</h2>
          <p className="text-[#f9f0ff]/90 text-sm sm:text-base max-w-xl mx-auto">
            Jelajahi ratusan lowongan kerja terbaru dari perusahaan startup dan korporasi terkemuka.
          </p>
          <button 
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#f9f0ff] text-[#4a154b] font-bold text-sm transition-all shadow-md hover:scale-105 cursor-pointer"
            onClick={onExploreJobs}
          >
            Lihat Lowongan Pekerjaan
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

    </div>
  );
};

export default About;

