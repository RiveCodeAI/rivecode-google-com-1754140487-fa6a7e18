import React from 'react';

const LanguageSelector: React.FC = () => {
  return (
    <div className="flex items-center text-sm text-gray-600">
      <span className="mr-3">Deutschland</span>
      <select 
        className="bg-transparent border-none focus:ring-0 cursor-pointer" 
        defaultValue="de"
      >
        <option value="de">Deutsch</option>
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
};

export default LanguageSelector;