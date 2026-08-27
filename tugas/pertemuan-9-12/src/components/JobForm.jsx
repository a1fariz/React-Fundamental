import React, { useState, useEffect } from 'react';
import { X, Save, Building2, MapPin, DollarSign, Briefcase, CheckCircle } from 'lucide-react';
import { locationsList } from '../data/jobs';

const JobForm = ({ jobToEdit, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: 'Jakarta',
    salary: '',
    status: 'Open'
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (jobToEdit) {
      setFormData({
        title: jobToEdit.title || '',
        company: jobToEdit.company || '',
        location: jobToEdit.location || 'Jakarta',
        salary: jobToEdit.salary || '',
        status: jobToEdit.status || 'Open'
      });
    }
  }, [jobToEdit]);

  if (!jobToEdit) return null;

  const validate = (data = formData) => {
    const newErrors = {};
    if (!data.title.trim()) newErrors.title = 'Nama pekerjaan wajib diisi';
    if (!data.company.trim()) newErrors.company = 'Nama perusahaan wajib diisi';
    if (!data.salary || Number(data.salary) <= 0) {
      newErrors.salary = 'Gaji harus berupa angka positif lebih dari 0';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSalaryChange = (e) => {
    const value = e.target.value;
    const updated = { ...formData, salary: value };
    setFormData(updated);
    if (errors.salary) {
      if (value && Number(value) > 0) {
        setErrors((prev) => ({ ...prev, salary: undefined }));
      }
    }
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, title: value });
    if (errors.title && value.trim()) {
      setErrors((prev) => ({ ...prev, title: undefined }));
    }
  };

  const handleCompanyChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, company: value });
    if (errors.company && value.trim()) {
      setErrors((prev) => ({ ...prev, company: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    onSave({
      ...jobToEdit,
      title: formData.title.trim(),
      company: formData.company.trim(),
      location: formData.location,
      salary: Number(formData.salary),
      status: formData.status
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-[#e6e6e6] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-[#e6e6e6] flex items-center justify-between bg-[#f9f0ff]/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#4a154b] text-white flex items-center justify-center shadow-xs">
              <Briefcase size={20} />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-[#4a154b] leading-tight">
                Edit Lowongan Pekerjaan
              </h2>
              <p className="text-xs text-[#696969]">ID #{jobToEdit.id} - Perbarui informasi lowongan</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full border border-[#e6e6e6] text-[#696969] hover:text-[#1d1d1d] hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Tutup"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
          
          {/* Nama Pekerjaan */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-[#1d1d1d] flex items-center gap-1.5">
              <Briefcase size={14} className="text-[#4a154b]" />
              Nama Pekerjaan <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={handleTitleChange}
              placeholder="Contoh: Senior React Developer"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm font-medium focus:outline-none transition-all ${
                errors.title
                  ? 'border-rose-400 focus:border-rose-500 bg-rose-50/30'
                  : 'border-[#e6e6e6] focus:border-[#4a154b] focus:ring-2 focus:ring-[#4a154b]/20 bg-slate-50 focus:bg-white'
              }`}
            />
            {errors.title && <p className="text-[11px] text-rose-500 font-medium">{errors.title}</p>}
          </div>

          {/* Nama Perusahaan */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-[#1d1d1d] flex items-center gap-1.5">
              <Building2 size={14} className="text-[#4a154b]" />
              Nama Perusahaan <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={handleCompanyChange}
              placeholder="Contoh: PT Solusi Digital"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm font-medium focus:outline-none transition-all ${
                errors.company
                  ? 'border-rose-400 focus:border-rose-500 bg-rose-50/30'
                  : 'border-[#e6e6e6] focus:border-[#4a154b] focus:ring-2 focus:ring-[#4a154b]/20 bg-slate-50 focus:bg-white'
              }`}
            />
            {errors.company && <p className="text-[11px] text-rose-500 font-medium">{errors.company}</p>}
          </div>

          {/* Lokasi & Status */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Lokasi */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#1d1d1d] flex items-center gap-1.5">
                <MapPin size={14} className="text-[#4a154b]" />
                Lokasi
              </label>
              <select
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#e6e6e6] bg-slate-50 focus:bg-white text-sm font-medium focus:border-[#4a154b] focus:ring-2 focus:ring-[#4a154b]/20 focus:outline-none transition-all cursor-pointer"
              >
                {locationsList.filter(l => l !== 'Semua').map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            {/* Status Lowongan */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#1d1d1d] flex items-center gap-1.5">
                <CheckCircle size={14} className="text-[#007a5a]" />
                Status Lowongan
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#e6e6e6] bg-slate-50 focus:bg-white text-sm font-medium focus:border-[#4a154b] focus:ring-2 focus:ring-[#4a154b]/20 focus:outline-none transition-all cursor-pointer"
              >
                <option value="Open">Open (Dibuka)</option>
                <option value="Closed">Closed (Ditutup)</option>
              </select>
            </div>
          </div>

          {/* Gaji */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-[#1d1d1d] flex items-center gap-1.5">
              <DollarSign size={14} className="text-[#007a5a]" />
              Gaji Per Bulan (Rp) <span className="text-rose-500">*</span>
            </label>
            <input
              type="number"
              value={formData.salary}
              onChange={handleSalaryChange}
              placeholder="Contoh: 10000000"
              step="100000"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm font-medium focus:outline-none transition-all ${
                errors.salary
                  ? 'border-rose-400 focus:border-rose-500 bg-rose-50/30'
                  : 'border-[#e6e6e6] focus:border-[#4a154b] focus:ring-2 focus:ring-[#4a154b]/20 bg-slate-50 focus:bg-white'
              }`}
            />
            {errors.salary && <p className="text-[11px] text-rose-500 font-medium">{errors.salary}</p>}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#e6e6e6]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full border border-[#e6e6e6] hover:bg-slate-100 text-[#1d1d1d] text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-full bg-[#4a154b] hover:bg-[#611f69] text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors shadow-md cursor-pointer"
            >
              <Save size={15} />
              Simpan Perubahan
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default JobForm;
