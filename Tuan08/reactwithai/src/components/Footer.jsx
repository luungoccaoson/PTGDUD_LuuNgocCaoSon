// src/components/Footer.jsx
import React from 'react';
import { FaCrown } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-400 mb-4">
            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-2 px-4 rounded-l-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300 text-white"
            />
            <button className="bg-pink-500 text-white py-2 px-4 rounded-r-md hover:bg-pink-600">
              Send
            </button>
          </div>
        </div>

        {/* Learn More Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Learn More</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                Our Cooks
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                See Our Features
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                Gift Subscription
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                Send Us Feedback
              </a>
            </li>
          </ul>
        </div>

        {/* Recipes Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recipes</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                What to Cook This Week
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                Pasta
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                Dinner
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                Healthy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                Vegetarian
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                Vegan
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                Christmas
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <FaCrown className="text-pink-500 text-xl" />
          <span className="text-xl font-bold">Cheffy</span>
          <span className="text-gray-400">© 2023 Cheffy Company</span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-pink-500">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-500">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;