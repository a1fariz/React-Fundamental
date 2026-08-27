import React, { useState } from 'react';
import { X, MapPin, DollarSign, Clock, Briefcase, CheckCircle2, Send, Bookmark } from 'lucide-react';

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
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#e6e6e6] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-[#e6e6e6] flex items-start justify-between gap-4 bg-[#f9f0ff]/30">
          <div className="flex items-center gap-3.5">
            <div 
              className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-white text-xl shadow-sm shrink-0"
              style={{ background: job.logoBg }}
            >
              {job.logoText}
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-[#4a154b] leading-tight">
                {job.title}
              </h2>
              <p className="text-xs sm:text-sm font-medium text-[#696969] mt-0.5">
                {job.company} • {job.location}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button 
              className={`p-2.5 rounded-full border transition-all duration-200 cursor-pointer ${
                isSaved 
                  ? 'bg-[#f9f0ff] border-[#4a154b]/30 text-[#4a154b]' 
                  : 'border-[#e6e6e6] text-[#696969] hover:text-[#4a154b] hover:border-[#4a154b]/30 hover:bg-[#f9f0ff]/50'
              }`}
              onClick={() => onToggleSave(job.id)}
              title={isSaved ? "Hapus dari Simpanan" : "Simpan Lowongan"}
            >
              <Bookmark size={18} fill={isSaved ? "currentColor" : "none"} />
            </button>
            <button 
              className="p-2.5 rounded-full border border-[#e6e6e6] text-[#696969] hover:text-[#1d1d1d] hover:bg-slate-100 transition-colors cursor-pointer"
              onClick={onClose} 
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-4 gap-2 p-3 sm:p-4 bg-[#f4ede4]/40 border-b border-[#e6e6e6] text-center">
          <div className="p-2 rounded-2xl bg-white border border-[#e6e6e6] shadow-xs">
            <span className="block text-[11px] font-medium text-[#696969]">Status Lowongan</span>
            <span className={`text-xs sm:text-sm font-extrabold leading-snug ${job.status ? 'text-[#007a5a]' : 'text-rose-600'}`}>
              {job.status ? 'Open' : 'Closed'}
            </span>
          </div>

          <div className="p-2 rounded-2xl bg-white border border-[#e6e6e6] shadow-xs">
            <span className="block text-[11px] font-medium text-[#696969]">Gaji Per Bulan</span>
            <span className="text-xs sm:text-sm font-extrabold text-[#007a5a] leading-snug">{job.salary}</span>
          </div>

          <div className="p-2 rounded-2xl bg-white border border-[#e6e6e6] shadow-xs">
            <span className="block text-[11px] font-medium text-[#696969]">Tipe Pekerjaan</span>
            <span className="text-xs sm:text-sm font-bold text-[#1d1d1d] leading-snug">{job.workType}</span>
          </div>

          <div className="p-2 rounded-2xl bg-white border border-[#e6e6e6] shadow-xs">
            <span className="block text-[11px] font-medium text-[#696969]">Pengalaman</span>
            <span className="text-xs sm:text-sm font-bold text-[#1d1d1d] leading-snug">{job.experience}</span>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {appliedSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#f9f0ff] text-[#007a5a] flex items-center justify-center mx-auto border border-[#007a5a]/20">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-extrabold text-[#4a154b]">Lamaran Berhasil Terkirim! 🎉</h3>
              <p className="text-[#696969] text-sm max-w-md mx-auto leading-relaxed">
                Terima kasih <strong className="text-[#1d1d1d]">{applicantName}</strong>! Lamaran kamu untuk posisi <strong className="text-[#1d1d1d]">{job.title}</strong> di <strong className="text-[#1d1d1d]">{job.company}</strong> telah diterima oleh tim HR.
              </p>
              <p className="text-xs text-[#696969]">
                Konfirmasi & langkah seleksi berikutnya akan dikirim via email ke <span className="font-semibold text-[#1d1d1d]">{applicantEmail}</span>.
              </p>
              <button 
                className="mt-4 px-6 py-2.5 rounded-full bg-[#4a154b] hover:bg-[#611f69] text-white font-bold text-sm transition-colors shadow-md cursor-pointer" 
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
            <form className="space-y-4" onSubmit={handleApplySubmit}>
              <div>
                <h3 className="text-lg font-bold text-[#4a154b]">Formulir Lamaran Pekerjaan</h3>
                <p className="text-xs text-[#696969]">Kirimkan data dirimu langsung ke {job.company}</p>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#1d1d1d]">Nama Lengkap *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Contoh: Alfarizi"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl border border-[#e6e6e6] text-sm focus:border-[#4a154b] focus:ring-2 focus:ring-[#4a154b]/20 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#1d1d1d]">Email Aktif *</label>
                <input 
                  type="email" 
                  required 
                  placeholder="nama@email.com"
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl border border-[#e6e6e6] text-sm focus:border-[#4a154b] focus:ring-2 focus:ring-[#4a154b]/20 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#1d1d1d]">Pesan Singkat / Cover Letter</label>
                <textarea 
                  rows={4}
                  placeholder="Ceritakan singkat latar belakang dan keahlian terbaikmu..."
                  value={coverNote}
                  onChange={(e) => setCoverNote(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl border border-[#e6e6e6] text-sm focus:border-[#4a154b] focus:ring-2 focus:ring-[#4a154b]/20 focus:outline-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button 
                  type="button" 
                  className="px-4 py-2.5 rounded-full border border-[#e6e6e6] hover:bg-slate-100 text-[#1d1d1d] text-sm font-semibold transition-colors cursor-pointer" 
                  onClick={() => setShowApplyForm(false)}
                >
                  Batal
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2.5 rounded-full bg-[#4a154b] hover:bg-[#611f69] text-white text-sm font-bold flex items-center gap-2 transition-colors shadow-md cursor-pointer"
                >
                  <Send size={16} />
                  Kirim Lamaran Sekarang
                </button>
              </div>
            </form>
          ) : (
            /* Job Details Mode */
            <>
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-[#4a154b] uppercase tracking-wider">Deskripsi Pekerjaan</h4>
                <p className="text-sm text-[#696969] leading-relaxed">{job.description}</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-[#4a154b] uppercase tracking-wider">Tanggung Jawab Utama</h4>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[#1d1d1d]">
                      <CheckCircle2 size={16} className="text-[#4a154b] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-[#4a154b] uppercase tracking-wider">Kualifikasi & Persyaratan</h4>
                <ul className="space-y-2">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[#1d1d1d]">
                      <CheckCircle2 size={16} className="text-[#1264a3] shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-[#4a154b] uppercase tracking-wider">Benefit & Fasilitas</h4>
                <ul className="space-y-2">
                  {job.benefits.map((ben, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[#1d1d1d]">
                      <CheckCircle2 size={16} className="text-[#007a5a] shrink-0 mt-0.5" />
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-[#4a154b] uppercase tracking-wider">Skills & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full text-xs font-semibold bg-[#f9f0ff] text-[#4a154b] border border-[#4a154b]/20">
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
          <div className="p-4 sm:p-5 border-t border-[#e6e6e6] bg-[#f9f0ff]/20 flex items-center justify-end gap-3">
            <button 
              className="px-4 py-2.5 rounded-full border border-[#e6e6e6] hover:bg-slate-100 text-[#1d1d1d] text-sm font-semibold transition-colors cursor-pointer" 
              onClick={onClose}
            >
              Tutup
            </button>
            <button 
              className="px-5 py-2.5 rounded-full bg-[#4a154b] hover:bg-[#611f69] text-white font-bold text-sm flex items-center gap-2 transition-colors shadow-md cursor-pointer" 
              onClick={() => setShowApplyForm(true)}
            >
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

