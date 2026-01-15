"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          <Image
            src="/icons/jesus-resurrected.jpg"
            alt="logo"
            width={36}
            height={36}
          />
          <p className="text-4px">Catholic Church Of Resurrection</p>
        </Link>
        {/* Mobile menu button, hidden on large screens */}
        <button
          className="lg:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {/* Replace with your icon component or div/span elements */}
          {isOpen ? "X" : "☰"}
        </button>

        {/* Menu links (desktop and mobile) */}
        <div
          className={`lg:flex items-center ${
            isOpen ? "block" : "hidden"
          } absolute lg:static top-16 left-0 w-full lg:w-auto bg-cyan-600 lg:bg-transparent p-4 lg:p-0`}
        >
          <ul>
            <Link href="/" className="text-black hover:text-white">
              Home
            </Link>
            <Link href="/about" className="text-black hover:text-white">
              About
            </Link>
            <Link href="/schedule" className="text-black hover:text-white">
              Mass
            </Link>
            <Link href="/" className="text-black hover:text-white">
              Photo Gallery
            </Link>
            <Link href="/contact" className="text-black hover:text-white">
              Contact us
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HamburgerMenu;
