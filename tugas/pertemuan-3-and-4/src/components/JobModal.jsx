import React, { useState } from 'react';
import { X, MapPin, DollarSign, Clock, Briefcase, CheckCircle2, Send, Building2, Bookmark } from 'lucide-react';

const JobModal = ({ job, onClose, isSaved, onToggleSave }) => {
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [coverNote, setCoverNote] = useState('');
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  if (!job) return null;

  const handleApplySubmit = (e) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail) return;
    setAppliedSuccess(true);
    setTimeout(() => {
      // Auto reset after 3s
    }, 3000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-brand">
            <div className="modal-logo" style={{ background: job.logoBg }}>
              {job.logoText}
            </div>
            <div>
              <h2 className="modal-job-title">{job.title}</h2>
              <p className="modal-company">{job.company} • {job.location}</p>
            </div>
          </div>

          <div className="modal-header-actions">
            <button 
              className={`bookmark-btn ${isSaved ? 'saved' : ''}`}
              onClick={() => onToggleSave(job.id)}
              title={isSaved ? "Hapus dari Simpanan" : "Simpan Lowongan"}
            >
              <Bookmark size={18} fill={isSaved ? "currentColor" : "none"} />
            </button>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="modal-highlights">
          <div className="highlight-box">
            <DollarSign className="highlight-icon text-emerald" size={18} />
            <div>
              <span className="highlight-label">Gaji Per Bulan</span>
              <span className="highlight-value text-emerald font-bold">{job.salary}</span>
            </div>
          </div>

          <div className="highlight-box">
            <Briefcase className="highlight-icon" size={18} />
            <div>
              <span className="highlight-label">Tipe Pekerjaan</span>
              <span className="highlight-value">{job.workType}</span>
            </div>
          </div>

          <div className="highlight-box">
            <Clock className="highlight-icon" size={18} />
            <div>
              <span className="highlight-label">Pengalaman</span>
              <span className="highlight-value">{job.experience}</span>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-body">
          {appliedSuccess ? (
            <div className="apply-success-box">
              <CheckCircle2 size={64} className="text-emerald text-center" />
              <h3>Lamaran Berhasil Terkirim! 🎉</h3>
              <p>
                Terima kasih <strong>{applicantName}</strong>! Lamaran kamu untuk posisi <strong>{job.title}</strong> di <strong>{job.company}</strong> telah diterima oleh tim HR.
              </p>
              <p className="subtext">Konfirmasi & langkah seleksi berikutnya akan dikirim via email ke <span>{applicantEmail}</span>.</p>
              <button 
                className="btn-primary" 
                onClick={() => {
                  setAppliedSuccess(false);
                  setShowApplyForm(false);
                  onClose();
                }}
              >
                Kembali ke Daftar Pekerjaan
              </button>
            </div>
          ) : showApplyForm ? (
            /* Apply Form Mode */
            <form className="apply-form" onSubmit={handleApplySubmit}>
              <h3 className="form-title">Formulir Lamaran Pekerjaan</h3>
              <p className="form-subtitle">Kirimkan data dirimu langsung ke {job.company}</p>

              <div className="form-group">
                <label>Nama Lengkap *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Contoh: Alfarizi"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Email Aktif *</label>
                <input 
                  type="email" 
                  required 
                  placeholder="nama@email.com"
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Pesan Singkat / Cover Letter</label>
                <textarea 
                  rows={4}
                  placeholder="Ceritakan singkat latar belakang dan keahlian terbaikmu..."
                  value={coverNote}
                  onChange={(e) => setCoverNote(e.target.value)}
                ></textarea>
              </div>

              <div className="form-actions">
                <button 
                  type="button" 
                  className="btn-secondary" 
                  onClick={() => setShowApplyForm(false)}
                >
                  Batal
                </button>
                <button type="submit" className="btn-primary">
                  <Send size={16} />
                  Kirim Lamaran Sekarang
                </button>
              </div>
            </form>
          ) : (
            /* Job Details Mode */
            <>
              <div className="modal-section">
                <h4>Deskripsi Pekerjaan</h4>
                <p>{job.description}</p>
              </div>

              <div className="modal-section">
                <h4>Tanggung Jawab Utama</h4>
                <ul className="modal-list">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="list-icon" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4>Kualifikasi & Persyaratan</h4>
                <ul className="modal-list">
                  {job.requirements.map((req, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="list-icon icon-blue" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4>Benefit & Fasilitas</h4>
                <ul className="modal-list">
                  {job.benefits.map((ben, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="list-icon icon-emerald" />
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4>Skills & Technologies</h4>
                <div className="card-skills">
                  {job.tags.map((skill, idx) => (
                    <span key={idx} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer Actions */}
        {!showApplyForm && !appliedSuccess && (
          <div className="modal-footer">
            <button className="btn-secondary" onClick={onClose}>
              Tutup
            </button>
            <button className="btn-primary" onClick={() => setShowApplyForm(true)}>
              <Send size={16} />
              Lamar Pekerjaan Ini
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobModal;
