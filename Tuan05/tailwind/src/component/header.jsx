import { useState } from 'react'
import './header.css'

import hinh from "../img/Lab02/Group 15.png"
import hinh1 from "../img/Lab02/Archive check.png"
import hinh2 from "../img/Lab02/Avatar 35.png"
import search from "../img/Lab_03/search.png"

export default function header() {
   var arr = ['What to cook','Recipes','Ingredients','Occasions','About Us'];
  var input_recipe = "relative mr-[5px]"
  var input_recipe_i = "absolute left-[10px] top-[52%] transform -translate-y-1/2"

  return (
    <>
      <div class="container">
        <header className="flex items-center justify-between px-[20px] py-[10px] border-solid border-[#dadada] border-[0.7px] [box-shadow:silver_0px_2px_2px_0px] mb-[2px]">

          <img className="icon" src= {hinh} alt="Logo" />
          
          <div className={input_recipe}>
            <i className={input_recipe_i}><img className='iconSearch' src={search} alt=""/></i>
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
          <div className={input_recipe}>             
            <i className={input_recipe_i}><img src={hinh1} alt="Icon" /></i>
            <input type="button" className="w-[200px] p-[5px] text-lg border-none rounded-[10px] bg-[rgb(252,_233,_236)] text-[#d35d8a] flex items-center justify-center button-recipe" value="Your Recipe Box" />
          </div>
          <img src={hinh2} alt="User Avatar" />   
        </header>
        
      </div>
    </>
  );
}

