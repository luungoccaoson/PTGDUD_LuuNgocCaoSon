import { useState } from 'react'
import './header.css'

import hinh from "../img/Lab02/Group 15.png"
import hinh1 from "../img/Lab02/Archive check.png"
import hinh2 from "../img/Lab02/Avatar 35.png"
import search from "../img/Lab_03/search.png"

function header() {
   var arr = ['What to cook','Recipes','Ingredients','Occasions','About Us'];
   

  return (
    <>
      <div class="container">
        <header className="flex-container">
          <div>
            <img className="icon" src= {hinh} alt="Logo" />
          </div>
          <div className="input-recipe">
            <i><img className='iconSearch' src={search} alt=""/></i>
            <input type="text" className="search-input" placeholder="What would you like to cook?" />
          </div>
          
          <nav className="menu">
            <ul>
              {
                arr.map((item)=>{
                  return(
                    <li><a href="">{item}</a></li>
                  )
                })
              }
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
        
      </div>
    </>
  );
}

export default header;
