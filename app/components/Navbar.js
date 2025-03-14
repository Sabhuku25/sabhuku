"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="relative h-12 w-12 hover:opacity-90 transition-opacity">
              <Image
                src="/images/logo.png"
                alt="Sabhuku Corporation Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
              About Us
            </Link>
            <Link href="/work-with-us" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
              Work With Us
            </Link>
            <Link href="/invest" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
              Invest In Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            About Us
          </Link>
          <Link href="/work-with-us" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            Work With Us
          </Link>
          <Link href="/invest" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            Invest In Us
          </Link>
          <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
} 