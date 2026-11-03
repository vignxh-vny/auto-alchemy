import React from 'react';

/**
 * Logo Component
 * 
 * Note per design guidelines:
 * Do not recreate or redesign the logo. Use a plain text wordmark until
 * the official logo file (SVG/PNG) is provided by the studio owner.
 * Drop the official logo asset here once received.
 */
interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`font-head text-[22px] font-semibold uppercase tracking-[0.04em] text-text ${className}`}>
      {/* SLOT: Replace plain text with real logo SVG/Image when available */}
      Auto Alchemy
    </span>
  );
}

