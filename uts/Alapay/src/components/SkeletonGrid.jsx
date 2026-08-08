import React from 'react';

function SkeletonCard() {
  return (
    <div className="sb-card overflow-hidden bg-white animate-pulse">
      {/* Image placeholder */}
      <div className="h-56 bg-stone-100" />
      <div className="p-5 space-y-4">
        {/* Category + Rating row */}
        <div className="flex items-center justify-between">
          <div className="h-3 w-24 rounded-full bg-stone-100" />
          <div className="h-3 w-12 rounded-full bg-stone-100" />
        </div>
        {/* Title */}
        <div className="space-y-2">
          <div className="h-5 w-3/4 rounded-full bg-stone-100" />
          <div className="h-3 w-full rounded-full bg-stone-100" />
          <div className="h-3 w-2/3 rounded-full bg-stone-100" />
        </div>
        {/* Price + Button */}
        <div className="flex items-end justify-between pt-4 border-t border-stone-100">
          <div className="space-y-1.5">
            <div className="h-5 w-20 rounded-full bg-stone-100" />
            <div className="h-3 w-16 rounded-full bg-stone-100" />
          </div>
          <div className="h-9 w-20 rounded-full bg-stone-100" />
        </div>
      </div>
    </div>
  );
}

export default function SkeletonGrid({ count = 8 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
