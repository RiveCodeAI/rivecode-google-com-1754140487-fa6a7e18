import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="relative max-w-[584px] w-full mx-auto mb-8">
      <div className="flex items-center w-full px-4 h-[46px] rounded-full border border-search-border hover:shadow-md focus-within:shadow-md">
        <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          className="flex-1 outline-none text-base"
          aria-label="Suche"
        />
        <button className="ml-3">
          <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        </button>
      </div>
      <a href="#" className="absolute right-0 -bottom-8 text-sm text-blue-600 hover:underline">
        Erweiterte Suche
      </a>
    </div>
  );
};

export default SearchBar;