import React from 'react';
import { MapPin, DollarSign, Edit3, Building2, Briefcase } from 'lucide-react';

const JobCard = ({ job, onEdit }) => {
  // Format numeric salary to Indonesian Rupiah representation
  const formatRupiah = (num) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(num);
  };

  const isOpen = job.status === 'Open';

  return (
    <article className="bg-white rounded-2xl border border-[#e6e6e6] p-5 hover:border-[#4a154b] hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group">
      <div>
        {/* Header: Title & Company */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-base font-bold text-[#1d1d1d] group-hover:text-[#4a154b] transition-colors line-clamp-1">
              {job.title}
            </h3>
            <p className="text-xs font-medium text-[#696969] flex items-center gap-1 mt-1">
              <Building2 size={13} className="text-[#696969]" />
              {job.company}
            </p>
          </div>

          <span
            className={`px-3 py-1 rounded-full text-xs font-bold border shrink-0 ${
              isOpen
                ? 'bg-emerald-50 text-[#007a5a] border-[#007a5a]/30'
                : 'bg-rose-50 text-rose-600 border-rose-200'
            }`}
          >
            {job.status}
          </span>
        </div>

        {/* Location & Salary Info */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-xs font-medium">
          <div className="flex items-center gap-1 text-[#696969]">
            <MapPin size={14} className="text-[#696969]" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-1 text-[#007a5a] font-bold">
            <DollarSign size={14} />
            <span>{formatRupiah(job.salary)} / bln</span>
          </div>
        </div>

        {/* Tags / Badges */}
        <div className="flex flex-wrap items-center gap-1.5 mb-4">
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#f9f0ff] text-[#4a154b] border border-[#4a154b]/20 flex items-center gap-1">
            <Briefcase size={11} />
            {job.workType || 'Full-Time'}
          </span>
          {job.tags && job.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Action: Edit Button */}
      <div className="pt-3 border-t border-[#e6e6e6] flex items-center justify-between gap-2 mt-2">
        <span className="text-[11px] text-[#696969] font-medium">
          ID: #{job.id}
        </span>
        <button
          onClick={() => onEdit(job)}
          className="px-4 py-1.5 rounded-full bg-[#f9f0ff] hover:bg-[#4a154b] text-[#4a154b] hover:text-white font-semibold text-xs transition-all duration-200 flex items-center gap-1.5 shadow-xs cursor-pointer"
        >
          <Edit3 size={13} />
          Edit Lowongan
        </button>
      </div>
    </article>
  );
};

export default JobCard;
