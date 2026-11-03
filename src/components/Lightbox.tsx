'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { WorkItem } from '@/data/work';

interface LightboxProps {
  items: WorkItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const currentItem = currentIndex !== null ? items[currentIndex] : null;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      }
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, handleKeyDown]);

  if (!currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Work gallery preview"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-panel border border-line p-4 sm:p-6 rounded-[2px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between pb-4 border-b border-line mb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-head text-[22px] sm:text-[26px] uppercase font-semibold text-text">
                {currentItem.title}
              </h3>
              {currentItem.isSample && (
                <span className="font-body text-[11px] font-medium text-red border border-red py-[1px] px-2 rounded-[2px]">
                  Sample
                </span>
              )}
            </div>
            <p className="text-muted text-[13px] mt-1 m-0">
              {currentItem.service} • {currentItem.vehicle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close lightbox"
            className="w-10 h-10 flex items-center justify-center border border-line hover:border-gold hover:text-gold text-text rounded-[2px] transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Image Display */}
        <div className="relative aspect-[16/10] w-full bg-black border border-line overflow-hidden">
          <Image
            src={currentItem.image}
            alt={currentItem.title}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
        </div>

        {/* Footer controls */}
        <div className="flex items-center justify-between pt-4 mt-4 border-t border-line text-[14px]">
          <span className="text-muted">
            {currentIndex !== null ? currentIndex + 1 : 1} of {items.length}
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous image"
              className="btn btn-line !h-[38px] px-4 text-[13px]"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={onNext}
              aria-label="Next image"
              className="btn btn-line !h-[38px] px-4 text-[13px]"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

