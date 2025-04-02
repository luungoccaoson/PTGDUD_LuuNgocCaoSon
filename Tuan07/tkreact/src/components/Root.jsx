
import React, { useEffect, useState } from 'react'

import iconSearch from '../img/Lab_03/search.png';

export default function root() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() =>{
    fetch('https://67e368a62ae442db76d0012e.mockapi.io/overView')
      .then((res) => res.json())
      .then((dt) => {
        setData(dt)
        setLoading(false)
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      })
  }, [])

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
        <div className="grid grid-cols-[0.7fr_2fr] gap-1 bg-blue-500 p-1"> 
              <div className="bg-white bg-opacity-80 p-4"> 
                  Menu
              </div>
            

            <div className="grid grid-rows-[0.7fr_2fr_5fr] gap-1">
              <div className='flex bg-white bg-opacity-80 p-4 justify-between text-center text-xl font-semibold'>
                  <h1 className='text-pink-500 font-bold text-2xl'>Dashboard</h1>
                  <div className='flex gap-2'>
                    <div className='flex bg-gray-200 gap-1 rounded-lg'>
                        <img src={iconSearch} className='w-8 px-1 py-2 cursor-pointer' alt="" />
                       <input className='border-none outline-none py-1 ' type="text" name="" id="" placeholder='Search...'/>
                    </div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                  </div>
              </div>

              <div className="flex flex-col bg-white bg-opacity-80 p-4">
                <div className='text-left'>
                  <img src="" alt="" />
                  <h3 className="text-pink-500 text-2xl font-bold">Overview</h3>
                </div>
                <div className='flex flex-wap p-2'>
                    {data.map((item, index) => (
                      <div key={index}>
                          <h2>{item.title}</h2>
                          <p></p>
                      </div>
                    ))}
                </div>
                
                
              </div>

              <div className="bg-white bg-opacity-80 p-4">
                <h3 className="text-xl font-bold">Noi dung</h3>
                
              </div>
            </div>
        </div>
    </>
  )
}
