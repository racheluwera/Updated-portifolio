"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold">MyPortfolio</Link>
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><Link href="#about">About</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col items-center bg-white w-full py-4 space-y-4">
          <li><Link href="#about">About</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
