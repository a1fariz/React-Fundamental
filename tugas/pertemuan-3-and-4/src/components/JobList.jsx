import React from 'react';
import JobCard from './JobCard';
import { Briefcase, SlidersHorizontal, RefreshCw, BookmarkCheck } from 'lucide-react';

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
    <section className="job-list-section" id="jobs">
      <div className="job-list-container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header-left">
            <h2 className="section-title">
              {activeTab === 'saved' ? 'Pekerjaan Tersimpan' : 'Daftar Lowongan Kerja'}
            </h2>
            <p className="section-subtitle">
              {activeTab === 'saved'
                ? `Kamu menyimpan ${jobs.length} lowongan pekerjaan favorit.`
                : `Menampilkan ${jobs.length} posisi pekerjaan tersedia.`
              }
            </p>
          </div>

          {(searchTerm || selectedCategory !== 'Semua') && activeTab === 'explore' && (
            <button className="reset-filter-btn" onClick={onResetFilters}>
              <RefreshCw size={14} />
              Reset Filter
            </button>
          )}
        </div>

        {/* Active Filter Tags */}
        {(searchTerm || selectedCategory !== 'Semua') && activeTab === 'explore' && (
          <div className="active-filters-bar">
            <span>Filter Aktif:</span>
            {selectedCategory !== 'Semua' && (
              <span className="active-filter-badge">Kategori: {selectedCategory}</span>
            )}
            {searchTerm && (
              <span className="active-filter-badge">Cari: "{searchTerm}"</span>
            )}
          </div>
        )}

        {/* Job Cards Grid */}
        {jobs.length > 0 ? (
          <div className="jobs-grid">
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
          <div className="empty-state">
            <div className="empty-icon-wrapper">
              {activeTab === 'saved' ? <BookmarkCheck size={48} /> : <Briefcase size={48} />}
            </div>
            <h3>
              {activeTab === 'saved'
                ? 'Belum ada pekerjaan tersimpan'
                : 'Lowongan pekerjaan tidak ditemukan'}
            </h3>
            <p>
              {activeTab === 'saved'
                ? 'Klik ikon bookmark pada kartu pekerjaan untuk menyimpannya di sini.'
                : 'Coba ubah kata kunci pencarian atau ganti kategori filter yang kamu pilih.'}
            </p>
            {activeTab === 'explore' && (
              <button className="btn-primary" onClick={onResetFilters}>
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
