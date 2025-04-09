// src/components/Header.jsx
import React from 'react';
import { FaSearch, FaCrown } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <FaCrown className="text-pink-500 text-xl" />
        <span className="text-xl font-bold text-gray-800">Cheffy</span>
      </div>
      <div className="flex-1 mx-6">
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="What would you like to cook?"
            className="w-full py-2 px-4 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-pink-500">
            What to cook
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-500">
            Recipes
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-500">
            Ingredients
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-500">
            Occasions
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-500">
            About Us
          </a>
        </nav>
        <div className="flex space-x-3">
          <button className="text-gray-600 hover:text-pink-500">Login</button>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600">
            Subscribe
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;