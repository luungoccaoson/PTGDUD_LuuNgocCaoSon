// src/components/Body.js
import React, { useState } from 'react';
import './Body.css'; // Import file CSS
import cucumber from '../img/Lab_03/cucumber_salad_charry_tomatoes.png'
import italian from '../img/Lab_03/italian_style_tomato_salad.png'
import potato from '../img/Lab_03/Potato Salad.png'
import cabbage from '../img/Lab_03/Salad with cabbage.png'
import fiveColor from '../img/Lab_03/five_color_salad.png'
import corn from '../img/Lab_03/corn_salad.png'
import salad from '../img/Lab_03/salad_with_cabbage_and_shrimp.png'
import lotus from '../img/Lab_03/lotus_delight_salad.png'
import avocado from '../img/Lab_03/avacador_salad.png'

import chevronup from '../img/Lab_03/Chevron up large 1.png'
import filter from "../img/Lab02/List 2.png"
import timer from "../img/Lab02/slider 2.png"
import sao5 from '../img/Lab02/Rating 18.png';
import sao4 from '../img/Lab02/Rating 17.png';
import sao3 from '../img/Lab02/Rating 19.png';
import sao2 from '../img/Lab02/Rating 20.png';
import sao1 from '../img/Lab02/Rating 16.png';
import addlist from '../img/Lab_03/Icon Button 73.png';



export default function Body() {

    const [isOpenType, setIsOpenType] = useState(true);
    const [isOpenTime, setIsOpenTime] = useState(true);
    const [isOpen, setIsOpen] = useState(true);

  const [filters, setFilters] = useState({
    type: [],
    time: [30, 50],
    rating: 0,
  });
  

  const salads = [
    { id: 1, name: 'Cucumber salad, cherry tomatoes', time: '32 minutes', image: cucumber },
    { id: 2, name: 'Italian-style tomato salad', time: '32 minutes', image: italian },
    { id: 3, name: 'Potato Salad', time: '12 minutes', image: potato },
    { id: 4, name: 'Salad with cabbage and shrimp', time: '32 minutes', image: cabbage },
    { id: 5, name: 'Five-color salad', time: '32 minutes', image: fiveColor },
    { id: 6, name: 'Corn Salad', time: '32 minutes', image: corn },
    { id: 7, name: 'Salad with cabbage and shrimp', time: '32 minutes', image: salad },
    { id: 8, name: 'Lotus delight salad', time: '32 minutes', image: lotus },
    { id: 9, name: 'Avocado Salad', time: '12 minutes', image: avocado },
  ];

  return (
    <div className="body-container">
      <aside className="filters">
        <div className='filter'>
            <div className='fil'>
                <img src={filter} alt=""/>
                <h3>Filters</h3>
            </div>
            <div className="type">
                <div class="filter-header" onClick={() => setIsOpenType(!isOpenType)}>
                        <span className="filter-title">Type</span>
                        <span className="filter-icon">{isOpenType ? "▲" : "▼"}</span>
                </div>
                {isOpenType && (
                <div class="checkbox-container">
                    <div class="checkbox-column">                        
                        <label className='checkbox-item'><input type="checkbox" name="cooking-method" value="pan-fried"/> Pan-fried</label>                       
                        <label className='checkbox-item'><input type="checkbox" name="cooking-method" value="grilled" checked/> Grilled</label>
                        <label className='checkbox-item'><input type="checkbox" name="cooking-method" value="sauteed"/> Sauteed</label>
                        <label className='checkbox-item'><input type="checkbox" name="cooking-method" value="steamed"/> Steamed</label>
                    </div>
                    <div class="checkbox-column">                      
                        <label className='checkbox-item'><input type="checkbox" name="cooking-method" value="stir-fried"/> Stir-fried</label>
                        <label className='checkbox-item'><input type="checkbox" name="cooking-method" value="roasted" checked/> Roasted</label>
                        <label className='checkbox-item'><input type="checkbox" name="cooking-method" value="baked"/> Baked</label>                        
                        <label className='checkbox-item'><input type="checkbox" name="cooking-method" value="stewed"/> Stewed</label>
                    </div>
                </div>
                )}
            </div>
        </div>

        <div className="filter">
            <div class="filter-header" onClick={() => setIsOpenTime(!isOpenTime)}>
                <span className="filter-title">Time</span>
                <span className="filter-icon">{isOpenTime ? "▲" : "▼"}</span>
            </div>
            {isOpenTime && (
            <div>
                <div className="timer">
                    <p>30 minutes</p>
                    <p>50 minutes</p>
                </div>
                <img src={timer} alt="" className="time-image" />
            </div>
            )}
        </div>

        <div className="filter">
            <div className="filter-header" onClick={() => setIsOpen(!isOpen)}>
                <span className="filter-title">Rating</span>
                <span className="filter-icon">{isOpen ? "▲" : "▼"}</span>
            </div>
            {isOpen && (
            <div className="rating-container">
                <label className='checkbox-item'><input type="checkbox" /><span className="stars"><img src={sao5} alt="" /></span></label>
                <label className='checkbox-item'><input type="checkbox" /><span className="stars"><img src={sao4} alt="" /></span></label>
                <label className='checkbox-item'><input type="checkbox" checked /><span className="stars"><img src={sao3} alt="" /></span></label>
                <label className='checkbox-item'><input type="checkbox" checked /><span className="stars"><img src={sao2} alt="" /></span></label>
                <label className='checkbox-item'><input type="checkbox" checked /><span className="stars"><img src={sao1} alt="" /></span></label>
            </div>
            )}
        </div>
        <div className="filter">
            <button className='apply-button'>Apply</button>
        </div>
      </aside>

      <main className="main-content">
        <div className="category-header">
          <h1>Salad (32)</h1>
          <select>
            <option>A-Z</option>
          </select>
        </div>
        
        <div className="salad-grid">
          {salads.map((salad) => (
            <div key={salad.id} className="salad-card">
              <img src={salad.image} alt={salad.name} />
              <div className='name-food'>
                <h3>{salad.name}</h3>
                <img className='addlist' src={addlist} alt="" />
              </div>
              <p>{salad.time}</p>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button>⟨</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <span>...</span>
          <button>10</button>
          <button>⟩</button>
        </div>
      </main>
    </div>
  );
};
