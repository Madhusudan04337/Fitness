import React from 'react';

interface FoldSectionProps {
  id: string;
  pageIndex?: number;
  totalPages?: number;
  category?: string;
  title?: string;
  nextId?: string;
  nextLabel?: string;
  children: React.ReactNode;
  showBottomArrow?: boolean;
  className?: string;
}

export default function FoldSection({
  id,
  children,
  className = '',
}: FoldSectionProps) {
  return (
    <div
      id={id}
      className={`relative w-full bg-[var(--theme-bg)] transition-colors duration-300 ${className}`}
    >
      <div className="relative w-full">
        {children}
      </div>
    </div>
  );
}
