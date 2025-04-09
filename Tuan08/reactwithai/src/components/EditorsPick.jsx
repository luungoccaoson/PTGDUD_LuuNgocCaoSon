// src/components/EditorsPick.jsx
import React from 'react';
import { FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EditorsPick = () => {
  const editorsPicks = [
    {
      title: 'Stuffed sticky rice ball',
      time: '34 minutes',
      author: 'Jennifer King',
      description: 'Stuffed sticky rice ball: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      title: 'Strawberry smoothie',
      time: '40 minutes',
      author: 'Matthew Martinez',
      description: 'Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      title: 'Latte Art',
      time: '18 minutes',
      author: 'Sarah Hill',
      description: 'Latte Art is the skillful craft of creating captivating designs on the surface of a latte...',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      title: 'Butter fried noodles',
      time: '15 minutes',
      author: 'Julia Lopez',
      description: 'Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
  ];

  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-pink-500 mb-2">Editor's Pick</h2>
      <p className="text-gray-600 mb-6">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
      <div className="grid grid-cols-2  gap-5">
        {editorsPicks.map((recipe, index) => (
          <Link to={`/recipe/${index + 8}`} key={index}> {/* Offset index by 8 to avoid ID conflicts with previous sections */}
            <div className="flex bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-5/11 h-40 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">{recipe.title}</h3>
                  <FaBookmark className="text-pink-500 cursor-pointer" />
                </div>
                <p className="text-gray-600 mt-1">{recipe.time}</p>
                <div className="flex items-center mt-2">
                  <img
                    src="https://via.placeholder.com/30"
                    alt={recipe.author}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-gray-600 text-sm">{recipe.author}</span>
                </div>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">{recipe.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default EditorsPick;