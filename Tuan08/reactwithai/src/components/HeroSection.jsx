// src/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section
      className="relative h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')`,
      }}
    >
      <div className="absolute top-10 left-10 bg-white p-6 rounded-lg shadow-lg max-w-sm">
        <div className="bg-yellow-400 text-white text-sm font-semibold py-1 px-3 rounded-t-lg">
          Recipe of the Day
        </div>
        <div className="pt-4">
          <h2 className="text-2xl font-bold text-gray-800">Salad Caprese</h2>
          <p className="text-gray-600 mt-2">
            Classic Italian Salad Caprese - ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://via.placeholder.com/40"
              alt="Avatar"
              className="w-10 h-10 rounded-full mr-3"
            />
            <span className="text-gray-600">Salad Caprese</span>
          </div>
          <Link to="/recipe">
            <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600">
              View Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;