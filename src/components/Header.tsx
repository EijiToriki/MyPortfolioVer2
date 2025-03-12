import React from 'react';

export function Header() {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-10">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Portfolio</h1>
        <div className="flex gap-6">
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
          <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
        </div>
      </nav>
    </header>
  );
}