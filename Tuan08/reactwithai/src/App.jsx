// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import RecipeSections from './components/RecipeSections';
import EditorsPick from './components/EditorsPick';
import Footer from './components/Footer'; // Import the new Footer component
import RecipePage from './components/RecipePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <RecipeSections />
                  <EditorsPick />
                </>
              }
            />
            <Route path="/recipe/:id" element={<RecipePage />} />
          </Routes>
        </main>
        <Footer /> {/* Add the Footer here */}
      </div>
    </Router>
  );
}

export default App;