import React from 'react';
import { MapPin, DollarSign, Clock, Bookmark, ArrowUpRight, Briefcase } from 'lucide-react';

const JobCard = ({ job, isSaved, onToggleSave, onViewDetail }) => {
  return (
    <article className="job-card">
      {/* Top Header Card */}
      <div className="card-top">
        <div className="company-logo-wrapper" style={{ background: job.logoBg }}>
          <span className="logo-text">{job.logoText}</span>
        </div>

        <div className="card-header-info">
          <div className="card-title-row">
            <h3 className="job-title" onClick={() => onViewDetail(job)}>{job.title}</h3>
            <button 
              className={`bookmark-btn ${isSaved ? 'saved' : ''}`}
              onClick={() => onToggleSave(job.id)}
              title={isSaved ? "Hapus dari Simpanan" : "Simpan Lowongan"}
              aria-label="Bookmark job"
            >
              <Bookmark size={18} fill={isSaved ? "currentColor" : "none"} />
            </button>
          </div>
          <p className="company-name">{job.company}</p>
        </div>
      </div>

      {/* Meta Info Badges */}
      <div className="card-meta">
        <div className="meta-item">
          <MapPin size={15} className="meta-icon" />
          <span>{job.location}</span>
        </div>
        <div className="meta-item font-semibold text-emerald">
          <DollarSign size={15} className="meta-icon" />
          <span>{job.salary}</span>
        </div>
      </div>

      {/* Tags & Badges */}
      <div className="card-tags-row">
        <span className={`work-type-tag tag-${job.workType.toLowerCase()}`}>
          {job.workType}
        </span>
        <span className="experience-tag">
          <Briefcase size={12} style={{ marginRight: '4px', display: 'inline' }} />
          {job.experience}
        </span>
      </div>

      {/* Skills Badges */}
      <div className="card-skills">
        {job.tags.slice(0, 4).map((skill, index) => (
          <span key={index} className="skill-chip">
            {skill}
          </span>
        ))}
      </div>

      {/* Bottom Footer Action */}
      <div className="card-bottom">
        <div className="posted-time">
          <Clock size={13} />
          <span>{job.postedDate}</span>
        </div>

        <button 
          className="btn-detail"
          onClick={() => onViewDetail(job)}
        >
          Lihat Detail
          <ArrowUpRight size={16} />
        </button>
      </div>
    </article>
  );
};

export default JobCard;
