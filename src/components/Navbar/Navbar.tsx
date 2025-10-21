'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/VEDnoBg.png" 
              alt="VED Logo" 
              width={60} 
              height={60} 
              className="hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 items-center">
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/notes" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Get Notes
              </Link>
            </li>
            <li>
              <Link href="/nav/about" className="text-gray-700 hover:text-blue-600 font-medium transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/nav/help" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Need Help?
              </Link>
            </li>
          </ul>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <SignedOut>
              <SignInButton>
                <button className="bg-white border border-gray-300 text-gray-800 rounded-full font-semibold text-sm px-5 h-10 hover:bg-gray-100 transition">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-full font-semibold text-sm px-5 h-10 shadow-lg hover:shadow-xl transition">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: 'w-10 h-10 rounded-full border-2 border-indigo-500',
                    userButtonTrigger: 'hover:scale-105 transition-transform',
                  },
                }}
              />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span 
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span 
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span 
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <ul className="space-y-3 pt-4 border-t">
            <li>
              <Link 
                href="/" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/notes" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition"
              >
                Get Notes
              </Link>
            </li>
            <li>
              <Link 
                href="/nav/about" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                href="/nav/help" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition"
              >
                Need Help?
              </Link>
            </li>
          </ul>

          {/* Mobile Auth Buttons */}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t">
            <SignedOut>
              <SignInButton>
                <button className="w-full bg-white border border-gray-300 text-gray-800 rounded-full font-semibold text-sm px-5 h-10 hover:bg-gray-100 transition">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-full font-semibold text-sm px-5 h-10 shadow-lg hover:shadow-xl transition">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <div className="flex justify-center pt-2">
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: 'w-10 h-10 rounded-full border-2 border-indigo-500',
                      userButtonTrigger: 'hover:scale-105 transition-transform',
                    },
                  }}
                />
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;