import React from 'react';
import { MapPin, DollarSign, Clock, Bookmark, ArrowUpRight, Briefcase } from 'lucide-react';

const JobCard = ({ job, isSaved, onToggleSave, onViewDetail }) => {
  return (
    <article className="bg-white rounded-2xl border border-[#e6e6e6] p-5 hover:border-[#4a154b] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group">
      
      <div>
        {/* Top Header Card */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-white text-lg shadow-sm shrink-0" 
              style={{ background: job.logoBg }}
            >
              <span>{job.logoText}</span>
            </div>

            <div>
              <h3 
                className="text-base font-bold text-[#1d1d1d] group-hover:text-[#4a154b] transition-colors cursor-pointer line-clamp-1"
                onClick={() => onViewDetail(job)}
              >
                {job.title}
              </h3>
              <p className="text-xs font-medium text-[#696969]">{job.company}</p>
            </div>
          </div>

          <button 
            className={`p-2 rounded-xl border transition-all duration-200 shrink-0 cursor-pointer ${
              isSaved 
                ? 'bg-[#f9f0ff] border-[#4a154b]/30 text-[#4a154b]' 
                : 'border-[#e6e6e6] text-[#696969] hover:text-[#4a154b] hover:border-[#4a154b]/30 hover:bg-[#f9f0ff]/50'
            }`}
            onClick={() => onToggleSave(job.id)}
            title={isSaved ? "Hapus dari Simpanan" : "Simpan Lowongan"}
            aria-label="Bookmark job"
          >
            <Bookmark size={18} fill={isSaved ? "currentColor" : "none"} />
          </button>
        </div>

        {/* Meta Info Badges */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-xs font-medium text-[#696969]">
          <div className="flex items-center gap-1">
            <MapPin size={14} className="text-[#696969]" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-0.5 text-[#007a5a] font-bold">
            <DollarSign size={14} />
            <span>{job.salary}</span>
          </div>
        </div>

        {/* Tags & Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
            job.status 
              ? 'bg-emerald-50 text-[#007a5a] border-[#007a5a]/30' 
              : 'bg-rose-50 text-rose-600 border-rose-200'
          }`}>
            {job.status ? 'Open' : 'Closed'}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#f9f0ff] text-[#4a154b] border border-[#4a154b]/20">
            {job.workType}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#f4ede4] text-[#1d1d1d] flex items-center gap-1 border border-[#e6e6e6]">
            <Briefcase size={12} />
            {job.experience}
          </span>
        </div>

        {/* Skills Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {job.tags.slice(0, 4).map((skill, index) => (
            <span 
              key={index} 
              className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-50 text-[#696969] border border-[#e6e6e6]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Footer Action */}
      <div className="pt-3 border-t border-[#e6e6e6] flex items-center justify-between gap-2 mt-auto">
        <div className="flex items-center gap-1 text-xs font-medium text-[#696969]">
          <Clock size={13} />
          <span>{job.postedDate}</span>
        </div>

        <button 
          className="px-3.5 py-1.5 rounded-full bg-[#f9f0ff] hover:bg-[#4a154b] text-[#4a154b] hover:text-white font-semibold text-xs transition-all duration-200 flex items-center gap-1 cursor-pointer"
          onClick={() => onViewDetail(job)}
        >
          Lihat Detail
          <ArrowUpRight size={14} />
        </button>
      </div>
    </article>
  );
};

export default JobCard;

