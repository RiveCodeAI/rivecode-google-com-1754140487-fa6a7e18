import React from 'react';

const SearchButtons: React.FC = () => {
  return (
    <div className="flex justify-center space-x-3">
      <button className="px-4 py-2 bg-button-bg hover:border-gray-300 hover:shadow-sm text-sm text-gray-800 rounded">
        Google Suche
      </button>
      <button className="px-4 py-2 bg-button-bg hover:border-gray-300 hover:shadow-sm text-sm text-gray-800 rounded">
        Auf gut Glück!
      </button>
    </div>
  );
};

export default SearchButtons;