import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import JobList from './components/JobList';
import JobModal from './components/JobModal';
import About from './components/About';
import Footer from './components/Footer';
import { jobsData } from './data/jobs';
import './App.css';

function App() {
  const [jobs] = useState(jobsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [activeTab, setActiveTab] = useState('explore'); // 'explore' | 'saved' | 'about'
  const [selectedJobForModal, setSelectedJobForModal] = useState(null);

  // Bookmark / Saved jobs state
  const [savedJobIds, setSavedJobIds] = useState([]);

  const handleToggleSave = (jobId) => {
    setSavedJobIds(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId) 
        : [...prev, jobId]
    );
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('Semua');
  };

  // Filtered jobs based on search term & category selection
  const filteredJobs = useMemo(() => {
    let sourceJobs = jobs;

    if (activeTab === 'saved') {
      sourceJobs = sourceJobs.filter(job => savedJobIds.includes(job.id));
    }

    return sourceJobs.filter(job => {
      const matchesCategory = selectedCategory === 'Semua' || job.category.toLowerCase() === selectedCategory.toLowerCase();
      
      const query = searchTerm.toLowerCase().trim();
      const matchesSearch = !query || 
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query) ||
        job.tags.some(tag => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [jobs, activeTab, savedJobIds, selectedCategory, searchTerm]);

  return (
    <div className="app-wrapper">
      {/* Header Component */}
      <Header 
        bookmarkCount={savedJobIds.length}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Page Routing View */}
      {activeTab === 'about' ? (
        /* About Us Page */
        <main className="main-content">
          <About onExploreJobs={() => setActiveTab('explore')} />
        </main>
      ) : (
        /* Explore / Saved Jobs Pages */
        <>
          {activeTab === 'explore' && (
            <Hero 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              totalJobs={jobs.length}
            />
          )}

          <main className="main-content">
            <JobList 
              jobs={filteredJobs}
              savedJobIds={savedJobIds}
              onToggleSave={handleToggleSave}
              onViewDetail={(job) => setSelectedJobForModal(job)}
              searchTerm={searchTerm}
              selectedCategory={selectedCategory}
              onResetFilters={handleResetFilters}
              activeTab={activeTab}
            />
          </main>
        </>
      )}

      {/* Detail Modal */}
      {selectedJobForModal && (
        <JobModal 
          job={selectedJobForModal}
          onClose={() => setSelectedJobForModal(null)}
          isSaved={savedJobIds.includes(selectedJobForModal.id)}
          onToggleSave={handleToggleSave}
        />
      )}

      {/* Footer Component */}
      <Footer 
        totalJobs={jobs.length} 
        onNavigateAbout={() => setActiveTab('about')}
        onNavigateJobs={() => setActiveTab('explore')}
      />
    </div>
  );
}

export default App;
