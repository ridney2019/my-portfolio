"use client";

import Link from 'next/link';
import { useState } from 'react';

const GlobalNav = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">
          <Link href="/">Ridney Silva</Link>
        </h1>
        <nav>
          <ul className="flex space-x-6 text-gray-700">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <button
                onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                className="relative"
              >
                <span>Products</span>
                <svg
                  className="w-4 h-4 ml-1 inline"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
                {isSubmenuOpen && (
                  <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                    <li>
                      <Link href="/products/iphone" className="block px-4 py-2 hover:bg-gray-100">iPhone</Link>
                    </li>
                    <li>
                      <Link href="/products/ipad" className="block px-4 py-2 hover:bg-gray-100">iPad</Link>
                    </li>
                    <li>
                      <Link href="/products/mac" className="block px-4 py-2 hover:bg-gray-100">Mac</Link>
                    </li>
                  </ul>
                )}
              </button>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default GlobalNav;
