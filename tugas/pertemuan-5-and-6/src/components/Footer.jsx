import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Layanan: ["Koleksi Buku", "Pinjam Buku", "Pengembalian", "Keanggotaan"],
    Kategori: ["Novel", "Self-Help", "Teknologi", "Sejarah", "Filsafat"],
    Informasi: ["Tentang Kami", "Panduan Pengguna", "Kebijakan Privasi", "Syarat & Ketentuan"],
  };

  return (
    <footer id="tentang" className="bg-ink text-canvas-soft border-t border-ink-mid/40">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-brand flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-on-primary"
                >
                  <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                </svg>
              </div>
              <span className="text-canvas font-bold text-lg tracking-tight">
                LibraryHub
              </span>
            </div>
            <p className="text-body-mid text-xs leading-relaxed mb-4">
              Sistem manajemen perpustakaan digital modern untuk memudahkan aksesibilitas dan pencarian buku bagi civitas akademika dan pembaca umum.
            </p>
          </div>

          {/* Nav Categories */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-canvas text-xs font-bold uppercase tracking-widest mb-3">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-body-mid text-xs hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Box */}
        <div className="mt-10 p-5 bg-ink-soft rounded-brand border border-ink-mid/40">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-canvas font-bold text-sm mb-1">
                Langganan Buletin Perpustakaan
              </h4>
              <p className="text-body-mid text-xs">
                Dapatkan informasi koleksi buku terbaru dan rekomendasi bacaan setiap bulan.
              </p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                id="newsletter-email"
                type="email"
                placeholder="Masukkan email Anda..."
                className="flex-1 sm:w-52 px-3 py-2 bg-ink text-canvas-soft placeholder-body-mid rounded-brand border border-ink-mid/60 text-xs focus:outline-none focus:border-primary"
              />
              <button className="bg-primary text-on-primary px-4 py-2 rounded-brand text-xs font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap">
                Langganan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-ink-mid/40 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-body-mid text-xs">
          <p>© {currentYear} LibraryHub. Seluruh hak cipta dilindungi.</p>
          <p className="flex items-center gap-1">
            Dibuat menggunakan React dan Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
