import React from 'react';
import LanguageSelector from './LanguageSelector';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-100">
      <div className="border-b border-gray-300">
        <div className="px-8 py-3">
          <LanguageSelector />
        </div>
      </div>
      <div className="px-8 py-3 flex justify-between items-center text-sm text-gray-600">
        <div className="flex space-x-6">
          <a href="#" className="hover:underline">Werbeprogramme</a>
          <a href="#" className="hover:underline">Unternehmensangebote</a>
          <a href="#" className="hover:underline">Über Google</a>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:underline">Datenschutzerklärung</a>
          <a href="#" className="hover:underline">Nutzungsbedingungen</a>
          <span>© 2025</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;