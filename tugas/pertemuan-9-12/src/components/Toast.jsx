import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

const Toast = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <aside
      aria-label="Notification"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#4a154b] text-white px-5 py-3 rounded-2xl shadow-xl border border-white/20 animate-bounce"
    >
      <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
      <span className="text-xs sm:text-sm font-semibold">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
        aria-label="Tutup notifikasi"
      >
        <X size={14} />
      </button>
    </aside>
  );
};

export default Toast;
