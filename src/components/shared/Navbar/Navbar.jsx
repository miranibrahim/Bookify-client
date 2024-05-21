"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Brand Name */}
        <div className="text-white text-2xl font-bold">Bookify</div>

        {/* Links - Hidden on small screens and visible on medium and larger screens */}
        <div className="hidden md:flex md:items-center md:space-x-6 text-lg">
          <Link href="/">
            <button className="text-white">Home</button>
          </Link>
          <Link href="/addBooks">
            <button className="text-white">Add Books</button>
          </Link>
        </div>

        {/* Mobile Menu Button - Visible on small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Conditionally rendered based on isOpen state */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-16 right-0 bg-gray-800 w-48 p-4 md:hidden`}
      >
        <div>
          <Link href="/">
            <button className="text-white">Home</button>
          </Link>
        </div>
        <div>
          <Link href="/addBooks">
            <button className="text-white">Add Books</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
