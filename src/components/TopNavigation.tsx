import React from 'react';

const TopNavigation: React.FC = () => {
  return (
    <nav className="flex justify-end items-center p-4 space-x-4">
      <a href="#" className="text-sm text-gray-600 hover:underline">Gmail</a>
      <a href="#" className="text-sm text-gray-600 hover:underline">Bilder</a>
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Anmelden
      </button>
    </nav>
  );
};

export default TopNavigation;