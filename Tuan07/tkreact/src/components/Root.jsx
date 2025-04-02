
import React from 'react'

export default function root() {
  return (
    <>
        <div className="grid grid-cols-[0.7fr_2fr] gap-1 bg-blue-500 p-1"> 
              <div className="bg-white bg-opacity-80 p-4"> 
                  Menu
              </div>
            

            <div className="grid grid-rows-[0.7fr_2fr_5fr] gap-1">
              <div className='bg-white bg-opacity-80 p-4 justify-between text-center text-xl font-semibold'>
                  <h1>Dashboard</h1>
                  <div className='flex gap-2'>
                    <div>
                        <img src="" alt="" />
                       <input type="text" name="" id="" />
                    </div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                  </div>
              </div>

              <div className="bg-white bg-opacity-80 p-4">
                <h3 className="text-xl font-bold">Overview</h3>
                
              </div>

              <div className="bg-white bg-opacity-80 p-4">
                <h3 className="text-xl font-bold">Noi dung</h3>
                
              </div>
            </div>
        </div>
    </>
  )
}
