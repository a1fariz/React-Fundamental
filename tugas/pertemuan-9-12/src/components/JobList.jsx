import React from 'react';
import JobCard from './JobCard';
import { SearchX } from 'lucide-react';

const JobList = ({ jobs, onEdit, onResetFilters }) => {
  if (jobs.length === 0) {
    return (
      <div className="bg-white rounded-3xl border border-[#e6e6e6] p-10 sm:p-14 text-center max-w-lg mx-auto my-10 shadow-xs space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-[#f9f0ff] text-[#4a154b] flex items-center justify-center mx-auto border border-[#4a154b]/20">
          <SearchX size={36} />
        </div>
        <h3 className="text-xl font-bold text-[#4a154b]">
          Lowongan Tidak Ditemukan
        </h3>
        <p className="text-sm text-[#696969] leading-relaxed">
          Maaf, tidak ada lowongan pekerjaan yang cocok dengan kriteria pencarian atau filter yang kamu pilih.
        </p>
        <button
          onClick={onResetFilters}
          className="px-5 py-2.5 rounded-full bg-[#4a154b] hover:bg-[#611f69] text-white font-semibold text-xs sm:text-sm transition-colors shadow-md cursor-pointer"
        >
          Tampilkan Semua Lowongan
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default JobList;
