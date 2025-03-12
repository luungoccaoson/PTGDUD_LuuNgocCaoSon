import { useState } from 'react'
import "./body.css"

import avatar from "../img/Lab_02_b/avatar.png"
import h1 from "../img/Lab_03/Italian-style tomato.png";
import h2 from "../img/Lab_03/Vegetable and shrimp spaghetti.png";
import h3 from "../img/Lab_03/Lotus delight salad.png";
import h4 from "../img/Lab_03/Snack cakes.png";
import h5 from "../img/Lab_03/salad_with_cabbage_and_shrimp.png";
import h6 from "../img/Lab_03/Bean, shrimp, and potato salad.png";
import h7 from "../img/Lab_03/Sunny-side up fried eggs.png";
import h8 from "../img/Lab_03/Lotus delight salad_01.png";
import addList from "../img/Lab_03/Icon Button 73.png";

const data = [
    {
        image: h1,
        title: 'Italian-style tomato salad',
        time: '14 minutes',
    },
    {
        image: h2,
        title: 'Vegetable and shrimp spaghetti',
        time: '15 minutes',
    },
    {
        image: h3,
        title: 'Lotus delight salad',
        time: '20 minutes',
    },
    {
        image: h4,
        title: 'Snack cakes',
        time: '21 minutes',
    },
    {
        image: h5,
        title: 'Salad with cabbage and shrimp',
        time: '32 minutes',
    },
    {
        image: h6,
        title: 'Bean, shrimp, and potato salad',
        time: '32 minutes',
    },
    {
        image: h7,
        title: 'Sunny-side up fried eggs',
        time: '32 minutes',
    },
    {
        image: h8,
        title: 'Lotus delight salad',
        time: '32 minutes',
    },
];



export default function body() {
    var arr1 = ['Saved Recipes','Folder','Recipes by Genevieve']

    return (
        <>
            <div className="w-full flex flex-col items-start border-solid border-[#dadada] border-[0.7px] [box-shadow:silver_0px_2px_2px_0px] mb-[2px] body-container">
                <h1>Emma Gonzalez's Recipe Box</h1>
                <div className='p-[5px] m-[10px]'>
                    <div className='w-1/5 float-left'>             
                        <img src={avatar} alt="" />             
                    </div>
                    <div className='w-[79%] float-left text-justify text-[25px] content'>
                        <p>Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor 
                        at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks 
                        and food publications. Originally from East Los Angeles, Emma now resides in New York City, 
                        where she explores a wide range of culinary delights.</p>
                        <span>6.5k Subscribes</span>
                        <button>Share</button>
                    </div>
                </div>  
                <div className="w-full flex [border-bottom:0.2px_solid_gainsboro] [box-shadow:0_2px_ghostwhite] mb-[20px] btn-tabs">
                    <button className="tab1">Saved Recipes</button>
                    <button className="tab">Folders</button>
                    <button className="tab">Recipes by Genevieve</button>
                </div>
                <div className="list-food">
                    {data.map((food, index) => (
                        <div className="food">
                            <div className="food-image">
                                <img src={food.image} alt={food.title} />
                            </div>
                            <div className="food-content">
                                <div className="input-recipe">
                                    <h3 className="food-title">{food.title}</h3>
                                
                                </div>           
                                
                                <div className="food-footer">
                                    <span className="food-time">{food.time} minutes</span>
                                </div>
                            </div>
                      </div>
                    ))}
                </div>          
            </div>
        </>
    );
}