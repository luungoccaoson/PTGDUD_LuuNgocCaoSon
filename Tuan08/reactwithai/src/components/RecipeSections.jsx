// src/components/RecipeSections.jsx
import React from 'react';
import { FaBookmark } from 'react-icons/fa';

const RecipeSections = () => {
  // Data for "This Summer Recipes" section
  const summerRecipes = [
    {
      title: 'Italian-style tomato polad',
      time: '15 minutes',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      title: 'Spaghetti with vegetables and shrimp',
      time: '15 minutes',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      title: 'Lotus delight salad',
      time: '20 minutes',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      title: 'Snack cakes',
      time: '21 minutes',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
  ];

  // Data for "Recipes With Videos" section
  const videoRecipes = [
    {
      title: 'Salad with cabbage and shrimp',
      time: '32 minutes',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      title: 'Salad of cove beans, potatoes',
      time: '30 minutes',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      title: 'Sunny-side up fried egg',
      time: '15 minutes',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      title: 'Lotus delight salad',
      time: '20 minutes',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
  ];

  return (
    <div className="py-12 px-6">
      {/* This Summer Recipes Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-pink-500 mb-2">This Summer Recipes</h2>
        <p className="text-gray-600 mb-6">We have all your Independence Day sweets covered.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {summerRecipes.map((recipe, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">{recipe.title}</h3>
                  <FaBookmark className="text-pink-500 cursor-pointer" />
                </div>
                <p className="text-gray-600 mt-1">{recipe.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recipes With Videos Section */}
      <section>
        <h2 className="text-3xl font-bold text-pink-500 mb-2">Recipes With Videos</h2>
        <p className="text-gray-600 mb-6">Cooking Up Culinary Creations with Step-by-Step Videos</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {videoRecipes.map((recipe, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">{recipe.title}</h3>
                  <FaBookmark className="text-pink-500 cursor-pointer" />
                </div>
                <p className="text-gray-600 mt-1">{recipe.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RecipeSections;