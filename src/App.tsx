import React from 'react';
import TopNavigation from './components/TopNavigation';
import GoogleLogo from './components/GoogleLogo';
import SearchBar from './components/SearchBar';
import SearchButtons from './components/SearchButtons';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNavigation />
      <main className="flex-grow flex flex-col items-center justify-center pb-40">
        <GoogleLogo />
        <SearchBar />
        <SearchButtons />
      </main>
      <Footer />
    </div>
  );
};

export default App;