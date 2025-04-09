// src/components/RecipePage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const RecipePage = () => {
  const { id } = useParams();
  const allRecipes = [
    { title: 'Italian-style tomato polad', time: '15 minutes' },
    { title: 'Spaghetti with vegetables and shrimp', time: '15 minutes' },
    { title: 'Lotus delight salad', time: '20 minutes' },
    { title: 'Snack cakes', time: '21 minutes' },
    { title: 'Salad with cabbage and shrimp', time: '32 minutes' },
    { title: 'Salad of cove beans, potatoes', time: '30 minutes' },
    { title: 'Sunny-side up fried egg', time: '15 minutes' },
    { title: 'Lotus delight salad', time: '20 minutes' },
    { title: 'Stuffed sticky rice ball', time: '34 minutes' }, // New recipes start here
    { title: 'Strawberry smoothie', time: '40 minutes' },
    { title: 'Latte Art', time: '18 minutes' },
    { title: 'Butter fried noodles', time: '15 minutes' },
  ];

  const recipe = allRecipes[id] || { title: 'Recipe Not Found', time: 'N/A' };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{recipe.title}</h1>
      <p className="mt-4">Cooking Time: {recipe.time}</p>
      <p className="mt-4">Here are the details for making this delicious recipe...</p>
    </div>
  );
};

export default RecipePage;