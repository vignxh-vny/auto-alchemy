'use client';

import React, { useState } from 'react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  return (
    <section className="work bg-panel border-y border-line" id="work">
      <div className="wrap">
        <h2 className="font-head text-[clamp(38px,5vw,60px)] uppercase font-semibold leading-none mb-14 tracking-[0.01em]">
          Our work
        </h2>
        <div className="cmp" id="cmp">
          {/* After layer */}
          <div className="layer after" />

          {/* Before layer with dynamic clip-path */}
          <div
            className="layer before"
            id="before"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          />

          {/* Labels */}
          <span className="lbl l1">Before</span>
          <span className="lbl l2">After</span>

          {/* Native range input for accessibility and touch/mouse interaction */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            id="range"
            aria-label="Compare before and after"
            aria-valuenow={sliderPosition}
            aria-valuemin={0}
            aria-valuemax={100}
          />

          {/* Divider bar and drag handle */}
          <div
            className="bar"
            id="bar"
            style={{ left: `${sliderPosition}%` }}
          />
        </div>
        <p className="note text-muted text-[14px] mt-7">
          Sample visual. Real before and after photos will replace this.
        </p>
      </div>
    </section>
  );
}

