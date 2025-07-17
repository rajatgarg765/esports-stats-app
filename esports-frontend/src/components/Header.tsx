import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          EsportsStatsHub
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-gray-300">
                Events
              </Link>
            </li>
            <li>
              <Link to="/teams" className="hover:text-gray-300">
                Teams
              </Link>
            </li>
            <li>
              <Link to="/players" className="hover:text-gray-300">
                Players
              </Link>
            </li>
            {/* Add more nav links as features are added */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;