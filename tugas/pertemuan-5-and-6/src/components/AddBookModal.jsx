import React, { useState } from "react";

const AddBookModal = ({ isOpen, onClose, onAddBook }) => {
  const [formData, setFormData] = useState({
    judul: "",
    penulis: "",
    kategori: "Novel",
    tahunTerbit: new Date().getFullYear(),
    status: "Tersedia",
    sinopsis: "",
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const categories = [
    "Novel",
    "Self-Help",
    "Sejarah",
    "Keuangan",
    "Teknologi",
    "Filsafat",
    "Sci-Fi",
    "Memoar",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!formData.judul.trim()) newErrors.judul = "Judul buku wajib diisi";
    if (!formData.penulis.trim()) newErrors.penulis = "Nama penulis wajib diisi";
    if (!formData.tahunTerbit || formData.tahunTerbit < 1800 || formData.tahunTerbit > 2030) {
      newErrors.tahunTerbit = "Tahun terbit tidak valid";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onAddBook({
      ...formData,
      tahunTerbit: parseInt(formData.tahunTerbit, 10),
    });

    // Reset form & close
    setFormData({
      judul: "",
      penulis: "",
      kategori: "Novel",
      tahunTerbit: new Date().getFullYear(),
      status: "Tersedia",
      sinopsis: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-canvas border border-mute rounded-brand shadow-2xl max-w-lg w-full overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-canvas-soft px-6 py-4 border-b border-mute flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-brand bg-primary text-on-primary flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-ink font-bold text-lg leading-tight">
              Tambah Buku Baru
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-body-mid hover:text-ink p-1.5 rounded-brand hover:bg-canvas transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4">
          {/* Judul Buku */}
          <div>
            <label className="block text-xs font-semibold text-ink uppercase tracking-wide mb-1.5">
              Judul Buku <span className="text-status-borrowed">*</span>
            </label>
            <input
              type="text"
              name="judul"
              placeholder="Contoh: Laskar Pelangi"
              value={formData.judul}
              onChange={handleChange}
              className={`w-full px-3.5 py-2.5 bg-canvas border rounded-brand text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                errors.judul ? "border-status-borrowed" : "border-mute focus:border-primary"
              }`}
            />
            {errors.judul && <p className="text-xs text-status-borrowed mt-1">{errors.judul}</p>}
          </div>

          {/* Penulis */}
          <div>
            <label className="block text-xs font-semibold text-ink uppercase tracking-wide mb-1.5">
              Nama Penulis <span className="text-status-borrowed">*</span>
            </label>
            <input
              type="text"
              name="penulis"
              placeholder="Contoh: Andrea Hirata"
              value={formData.penulis}
              onChange={handleChange}
              className={`w-full px-3.5 py-2.5 bg-canvas border rounded-brand text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                errors.penulis ? "border-status-borrowed" : "border-mute focus:border-primary"
              }`}
            />
            {errors.penulis && <p className="text-xs text-status-borrowed mt-1">{errors.penulis}</p>}
          </div>

          {/* Grid Kategori & Tahun */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Kategori */}
            <div>
              <label className="block text-xs font-semibold text-ink uppercase tracking-wide mb-1.5">
                Kategori
              </label>
              <select
                name="kategori"
                value={formData.kategori}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-canvas border border-mute rounded-brand text-sm text-ink focus:outline-none focus:border-primary"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Tahun Terbit */}
            <div>
              <label className="block text-xs font-semibold text-ink uppercase tracking-wide mb-1.5">
                Tahun Terbit <span className="text-status-borrowed">*</span>
              </label>
              <input
                type="number"
                name="tahunTerbit"
                value={formData.tahunTerbit}
                onChange={handleChange}
                className={`w-full px-3.5 py-2.5 bg-canvas border rounded-brand text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                  errors.tahunTerbit ? "border-status-borrowed" : "border-mute focus:border-primary"
                }`}
              />
              {errors.tahunTerbit && (
                <p className="text-xs text-status-borrowed mt-1">{errors.tahunTerbit}</p>
              )}
            </div>
          </div>

          {/* Status Awal */}
          <div>
            <label className="block text-xs font-semibold text-ink uppercase tracking-wide mb-1.5">
              Status Awal Buku
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-sm text-ink cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value="Tersedia"
                  checked={formData.status === "Tersedia"}
                  onChange={handleChange}
                  className="accent-primary"
                />
                <span className="font-medium text-status-available">Tersedia</span>
              </label>
              <label className="flex items-center gap-2 text-sm text-ink cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value="Dipinjam"
                  checked={formData.status === "Dipinjam"}
                  onChange={handleChange}
                  className="accent-primary"
                />
                <span className="font-medium text-status-borrowed">Dipinjam</span>
              </label>
            </div>
          </div>

          {/* Sinopsis */}
          <div>
            <label className="block text-xs font-semibold text-ink uppercase tracking-wide mb-1.5">
              Sinopsis / Deskripsi Singkat
            </label>
            <textarea
              name="sinopsis"
              rows={3}
              placeholder="Tulis ringkasan singkat isi buku (opsional)..."
              value={formData.sinopsis}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 bg-canvas border border-mute rounded-brand text-sm text-ink focus:outline-none focus:border-primary"
            />
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-mute flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-brand border border-mute text-ink text-sm font-semibold hover:bg-canvas-soft transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-brand bg-primary text-on-primary text-sm font-semibold hover:bg-orange-600 transition-colors shadow-sm"
            >
              Simpan Buku
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBookModal;
