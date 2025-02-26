import { useState } from 'react'
import './bai01.css'

import hinh from "../img/Lab02/Group 15.png"
import hinh1 from "../img/Lab02/Archive check.png"
import hinh2 from "../img/Lab02/Avatar 35.png"
import hinh3 from "../img/Lab02/List 2.png"
import hinh4 from "../img/Lab02/Image 105.png"
import hinh5 from "../img/Lab02/slider 2.png"
import sao5 from '../img/Lab02/Rating 18.png';
import sao4 from '../img/Lab02/Rating 17.png';
import sao3 from '../img/Lab02/Rating 19.png';
import sao2 from '../img/Lab02/Rating 20.png';
import sao1 from '../img/Lab02/Rating 16.png';

function bai01() {
    const [isOpenType, setIsOpenType] = useState(true);
    const [isOpenTime, setIsOpenTime] = useState(true);
    const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div class="container">
        <header className="flex-container">
          <div>
            <img className="icon" src= {hinh} alt="Logo" />
          </div>
          <input type="text" className="search-input" placeholder="Tìm kiếm..." />
          <nav className="menu">
            <ul>
              <li><a href="#">What to cook</a></li>
              <li><a href="#">Recipes</a></li>
              <li><a href="#">Ingredients</a></li>
              <li><a href="#">Occasions</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </nav>
          <div className="input-recipe">             
            <i><img src={hinh1} alt="Icon" /></i>
            <input type="button" className="button-recipe" value="Your Recipe Box" />
          </div>
          <div className="user-icon">
            <img src={hinh2} alt="User Avatar" />
          </div>    
        </header>

        <div className="body-container">
          <section>
            <div class="type">
                <div className='filter'>
                    <img src={hinh3} alt="Icon"/>
                    <h3>Filters</h3> 
                </div> <br />
                <div >
                    <div class="filter-header" onClick={() => setIsOpenType(!isOpenType)}>
                        <span className="filter-title">Type</span>
                        <span className="filter-icon">{isOpenType ? "▼" : "▲"}</span>
                    </div>
                    {isOpenType && (
                    <div class="checkbox-container">
                        <div class="checkbox-column">                        
                            <label><input type="checkbox" name="cooking-method" value="pan-fried"/> Pan-fried</label>                       
                            <label><input type="checkbox" name="cooking-method" value="grilled" checked/> Grilled</label>
                            <label><input type="checkbox" name="cooking-method" value="sauteed"/> Sauteed</label>
                            <label><input type="checkbox" name="cooking-method" value="steamed"/> Steamed</label>
                        </div>
                        <div class="checkbox-column">                      
                            <label><input type="checkbox" name="cooking-method" value="stir-fried"/> Stir-fried</label>
                            <label><input type="checkbox" name="cooking-method" value="roasted" checked/> Roasted</label>
                            <label><input type="checkbox" name="cooking-method" value="baked"/> Baked</label>                        
                            <label><input type="checkbox" name="cooking-method" value="stewed"/> Stewed</label>
                        </div>
                    </div>
                    )}
                </div>
            </div>
            
            <div className="type">
                <div class="filter-header" onClick={() => setIsOpenTime(!isOpenTime)}>
                    <span className="filter-title">Time</span>
                    <span className="filter-icon">{isOpenTime ? "▼" : "▲"}</span>
                </div>
                {isOpenTime && (
                    <div className="time-container">
                        <img src={hinh5} alt="" className="time-image" />
                        <p className="time-marker time-30">30 minutes</p>
                        <p className="time-marker time-50">50 minutes</p>
                    </div>
                )}
            </div>
            <div className="type">
                <div className="filter-header" onClick={() => setIsOpen(!isOpen)}>
                    <span className="filter-title">Rating</span>
                    <span className="filter-icon">{isOpen ? "▼" : "▲"}</span>
                </div>
                {isOpen && (
                    <div className="rating-container">
                        <label><input type="checkbox" /><span className="stars"><img src={sao5} alt="" /></span></label>
                        <label><input type="checkbox" /><span className="stars"><img src={sao4} alt="" /></span></label>
                        <label><input type="checkbox" checked /><span className="stars"><img src={sao3} alt="" /></span></label>
                        <label><input type="checkbox" checked /><span className="stars"><img src={sao2} alt="" /></span></label>
                        <label><input type="checkbox" checked /><span className="stars"><img src={sao1} alt="" /></span></label>
                    </div>
                )}
            </div>
            <div className='type'>
                <button type="button">Apply</button>
            </div>
          </section>

          <aside>
              <h2>Sorry, no result were found for "cakescascsa"</h2>
              <img src={hinh4} alt="" />
              <p>We have all your Indenpendence Day sweets covered.</p> <br />
              <div className='list_btn'>
                <button type="button" class="ctm-btn btn1">Sweet Cake</button>
                <button type="button" class="ctm-btn btn2">Black Cake</button>
                <button type="button" class="ctm-btn btn3">Pozole Verde</button>
                <button type="button" class="ctm-btn btn4">Healthy food</button>
              </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default bai01;
