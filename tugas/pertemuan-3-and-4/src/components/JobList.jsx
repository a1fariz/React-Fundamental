import React from 'react';
import JobCard from './JobCard';
import { Briefcase, RefreshCw, BookmarkCheck } from 'lucide-react';

const JobList = ({ 
  jobs, 
  savedJobIds, 
  onToggleSave, 
  onViewDetail, 
  searchTerm, 
  selectedCategory, 
  onResetFilters,
  activeTab 
}) => {
  return (
    <section className="py-10 bg-white min-h-[500px]" id="jobs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#e6e6e6]">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4a154b] tracking-tight">
              {activeTab === 'saved' ? 'Pekerjaan Tersimpan' : 'Daftar Lowongan Kerja'}
            </h2>
            <p className="text-sm font-medium text-[#696969] mt-1">
              {activeTab === 'saved'
                ? `Kamu menyimpan ${jobs.length} lowongan pekerjaan favorit.`
                : `Menampilkan ${jobs.length} posisi pekerjaan tersedia.`
              }
            </p>
          </div>

          {(searchTerm || selectedCategory !== 'Semua') && activeTab === 'explore' && (
            <button 
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#f9f0ff] hover:bg-[#4a154b] text-[#4a154b] hover:text-white text-xs font-semibold transition-colors cursor-pointer self-start sm:self-auto" 
              onClick={onResetFilters}
            >
              <RefreshCw size={14} />
              Reset Filter
            </button>
          )}
        </div>

        {/* Active Filter Tags */}
        {(searchTerm || selectedCategory !== 'Semua') && activeTab === 'explore' && (
          <div className="flex flex-wrap items-center gap-2 pt-4 text-xs font-medium text-[#696969]">
            <span className="font-semibold text-[#696969]">Filter Aktif:</span>
            {selectedCategory !== 'Semua' && (
              <span className="px-3 py-1 rounded-full bg-[#f9f0ff] text-[#4a154b] font-semibold border border-[#4a154b]/20">
                Kategori: {selectedCategory}
              </span>
            )}
            {searchTerm && (
              <span className="px-3 py-1 rounded-full bg-[#e6e6e6] text-[#1d1d1d] font-semibold">
                Cari: "{searchTerm}"
              </span>
            )}
          </div>
        )}

        {/* Job Cards Grid */}
        {jobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                isSaved={savedJobIds.includes(job.id)}
                onToggleSave={onToggleSave}
                onViewDetail={onViewDetail}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-3xl border border-[#e6e6e6] p-10 sm:p-14 text-center max-w-lg mx-auto my-12 shadow-sm space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-[#f9f0ff] text-[#4a154b] flex items-center justify-center mx-auto border border-[#4a154b]/20">
              {activeTab === 'saved' ? <BookmarkCheck size={36} /> : <Briefcase size={36} />}
            </div>
            <h3 className="text-xl font-bold text-[#4a154b]">
              {activeTab === 'saved'
                ? 'Belum ada pekerjaan tersimpan'
                : 'Lowongan pekerjaan tidak ditemukan'}
            </h3>
            <p className="text-sm text-[#696969] leading-relaxed">
              {activeTab === 'saved'
                ? 'Klik ikon bookmark pada kartu pekerjaan untuk menyimpannya di sini.'
                : 'Coba ubah kata kunci pencarian atau ganti kategori filter yang kamu pilih.'}
            </p>
            {activeTab === 'explore' && (
              <button 
                className="px-5 py-2.5 rounded-full bg-[#4a154b] hover:bg-[#611f69] text-white font-semibold text-sm transition-colors shadow-md cursor-pointer"
                onClick={onResetFilters}
              >
                Tampilkan Semua Lowongan
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobList;

