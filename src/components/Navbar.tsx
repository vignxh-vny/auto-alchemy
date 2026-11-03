'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { siteData } from '@/data/site';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Our work', href: '/our-work' },
    { label: 'About', href: '/about' },
    { label: 'Pre-owned', href: '/pre-owned' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-20 bg-bg border-b border-line pt-[env(safe-area-inset-top,0px)]">
      <div className="wrap flex items-center justify-between h-[72px]">
        <Link
          href="/"
          className="brand flex items-center gap-3"
          aria-label={siteData.name}
          onClick={closeMenu}
        >
          <Logo />
          <span className="tag hidden sm:inline-block font-body text-[11px] font-medium text-red border border-red py-[2px] px-2 rounded-[2px] tracking-[0.03em] leading-normal">
            {siteData.conceptTag}
          </span>
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          className="burger md:hidden flex flex-col justify-center items-center w-11 h-11 bg-transparent border-0 cursor-pointer p-0"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="block w-[22px] h-[2px] bg-text my-[2.5px] transition-transform" />
          <span className="block w-[22px] h-[2px] bg-text my-[2.5px] transition-opacity" />
          <span className="block w-[22px] h-[2px] bg-text my-[2.5px] transition-transform" />
        </button>

        {/* Navigation Links */}
        <nav
          className={`links ${
            isOpen ? 'flex' : 'hidden'
          } md:flex items-center md:gap-8 absolute md:static top-full left-0 right-0 bg-bg md:bg-transparent border-b md:border-b-0 border-line flex-col md:flex-row items-stretch md:items-center px-6 md:px-0 py-2 md:py-0 pb-6 md:pb-0 z-20`}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`text-[17px] md:text-[15px] py-4 md:py-0 border-b md:border-b-0 border-line transition-colors duration-200 ${
                  isActive ? 'text-gold' : 'text-muted hover:text-text'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/book"
            onClick={closeMenu}
            className="btn btn-gold mt-5 md:mt-0 !h-[50px] md:!h-[42px] md:!px-5 md:text-[14px]"
          >
            Book appointment
          </Link>
        </nav>
      </div>
    </header>
  );
}
