'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  id?: string;
  title?: string;
  note?: string;
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  hideSectionHeader?: boolean;
}

export default function BeforeAfterSlider({
  id = 'work',
  title = 'Our work',
  note = 'Sample visual. Real before and after photos will replace this.',
  beforeImage = '/work/before-paint.jpg',
  afterImage = '/work/after-paint.jpg',
  beforeLabel = 'Before',
  afterLabel = 'After',
  hideSectionHeader = false,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  return (
    <section className="work bg-panel border-y border-line" id={id}>
      <div className="wrap">
        {!hideSectionHeader && (
          <h2 className="font-head text-[clamp(38px,5vw,60px)] uppercase font-semibold leading-none mb-14 tracking-[0.01em]">
            {title}
          </h2>
        )}

        <div className="cmp" id={`cmp-${id}`}>
          {/* After layer */}
          <div className="layer after">
            {afterImage && (
              <Image
                src={afterImage}
                alt="After detailing transformation"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1160px"
                className="object-cover object-center pointer-events-none"
              />
            )}
          </div>

          {/* Before layer with dynamic clip-path */}
          <div
            className="layer before"
            id={`before-${id}`}
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            {beforeImage && (
              <Image
                src={beforeImage}
                alt="Before detailing state"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1160px"
                className="object-cover object-center pointer-events-none"
              />
            )}
          </div>

          {/* Labels */}
          <span className="lbl l1">{beforeLabel}</span>
          <span className="lbl l2">{afterLabel}</span>

          {/* Native range input for accessibility and touch/mouse interaction */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            id={`range-${id}`}
            aria-label="Compare before and after"
            aria-valuenow={sliderPosition}
            aria-valuemin={0}
            aria-valuemax={100}
          />

          {/* Divider bar and drag handle */}
          <div
            className="bar"
            id={`bar-${id}`}
            style={{ left: `${sliderPosition}%` }}
          />
        </div>

        {note && (
          <p className="note text-muted text-[14px] mt-7">
            {note}
          </p>
        )}
      </div>
    </section>
  );
}
