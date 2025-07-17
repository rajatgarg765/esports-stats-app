import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8 text-center text-sm">
      <div className="container mx-auto">
        &copy; {new Date().getFullYear()} EsportsStatsHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;