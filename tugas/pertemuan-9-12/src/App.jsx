import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import JobList from './components/JobList';
import JobForm from './components/JobForm';
import Pagination from './components/Pagination';
import Toast from './components/Toast';
import Footer from './components/Footer';
import { initialJobs } from './data/jobs';

function App() {
  // Bab 12: State for jobs list and editing modal
  const [jobs, setJobs] = useState(initialJobs);
  const [editingJob, setEditingJob] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Bab 9: State for Search and Filter
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Semua');
  const [selectedStatus, setSelectedStatus] = useState('Semua');

  // Bab 10: State for Sorting
  const [sortOption, setSortOption] = useState('default'); // 'default' | 'name-asc' | 'salary-lowest' | 'salary-highest'

  // Bab 11: State for Pagination (5 jobs per page)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Handle Edit Action
  const handleOpenEdit = (job) => {
    setEditingJob(job);
  };

  const handleCloseEdit = () => {
    setEditingJob(null);
  };

  // Bab 12: Update job data without page reload using .map()
  const handleSaveJob = (updatedJob) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) => (job.id === updatedJob.id ? updatedJob : job))
    );
    setEditingJob(null);
    setToastMessage(`Lowongan "${updatedJob.title}" berhasil diperbarui.`);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  // Reset all filters & search
  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedLocation('Semua');
    setSelectedStatus('Semua');
    setSortOption('default');
    setCurrentPage(1);
  };

  // Setters that reset current page to 1 on filter/search change
  const handleSearchChange = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleLocationChange = (loc) => {
    setSelectedLocation(loc);
    setCurrentPage(1);
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    setCurrentPage(1);
  };

  const handleSortChange = (sort) => {
    setSortOption(sort);
    setCurrentPage(1);
  };

  // Bab 9 & Bab 10 Pipeline: Search -> Filter -> Sort
  const processedJobs = useMemo(() => {
    // 1. Bab 9: Filter by search keyword (job title), location, and status using .filter()
    let result = jobs.filter((job) => {
      const matchSearch = job.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase().trim());
      const matchLocation =
        selectedLocation === 'Semua' || job.location === selectedLocation;
      const matchStatus =
        selectedStatus === 'Semua' || job.status === selectedStatus;

      return matchSearch && matchLocation && matchStatus;
    });

    // 2. Bab 10: Sort by selected option using .sort()
    if (sortOption === 'name-asc') {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === 'salary-lowest') {
      result = [...result].sort((a, b) => a.salary - b.salary);
    } else if (sortOption === 'salary-highest') {
      result = [...result].sort((a, b) => b.salary - a.salary);
    }

    return result;
  }, [jobs, searchTerm, selectedLocation, selectedStatus, sortOption]);

  // Bab 11: Pagination calculation using Math.ceil()
  const totalPages = Math.ceil(processedJobs.length / itemsPerPage);

  // Slice paginated items for current view
  const paginatedJobs = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return processedJobs.slice(startIndex, startIndex + itemsPerPage);
  }, [processedJobs, currentPage, itemsPerPage]);

  const openJobsCount = jobs.filter((j) => j.status === 'Open').length;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased">
      {/* Header */}
      <Header totalJobs={jobs.length} openJobsCount={openJobsCount} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        {/* Banner Section */}
        <section className="mb-8 text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-[#4a154b] tracking-tight">
            Kelola & Temukan Lowongan Kerja
          </h2>
          <p className="text-sm sm:text-base text-[#696969]">
            Cari berdasarkan posisi pekerjaan, saring berdasarkan lokasi atau status, urutkan gaji, serta perbarui data lowongan secara langsung.
          </p>
        </section>

        {/* SearchBar Component (Search + Filter + Sorting Controls) */}
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={handleSearchChange}
          selectedLocation={selectedLocation}
          setSelectedLocation={handleLocationChange}
          selectedStatus={selectedStatus}
          setSelectedStatus={handleStatusChange}
          sortOption={sortOption}
          setSortOption={handleSortChange}
          onResetFilters={handleResetFilters}
          totalFiltered={processedJobs.length}
        />

        {/* JobList Component */}
        <JobList
          jobs={paginatedJobs}
          onEdit={handleOpenEdit}
          onResetFilters={handleResetFilters}
        />

        {/* Pagination Component */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </main>

      {/* JobForm Modal for Editing */}
      {editingJob && (
        <JobForm
          jobToEdit={editingJob}
          onSave={handleSaveJob}
          onClose={handleCloseEdit}
        />
      )}

      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage('')} />

      {/* Footer */}
      <Footer totalJobs={jobs.length} />
    </div>
  );
}

export default App;
