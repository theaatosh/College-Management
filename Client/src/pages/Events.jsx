import React, { useState } from 'react'
import { EventCard } from '../components/EventCard'

export const Events = () => {
      const [events,setEvents]=useState([
            {
                title:"Debate competition",
                image_url:"/Images/events1.png",
                color:"#fca5a5"
            },
            {
                title:"Debate competition",
                image_url:"/Images/events1.png",
                color:'#0088204D'
            },
            {
                title:"Debate competition",
                image_url:"/Images/events1.png",
                color:"#0501FC4D"
            },
            {
                title:"Debate competition",
                image_url:"/Images/events1.png",
                color:"#0501FC4D"
            }
        ])
  return (
    <div>
      <div className='w-full h-[42rem]  flex flex-col space-y-4 bg-white backdrop-blur-[0.9rem] '>
              <div>
            <h1 className='text-[3rem] font-semibold text-center mt-4'>Events</h1>
            <p className='text-[1rem] italic text-center'>Stay Updated with Our Latest Activities </p>
      
            </div>
            <h1 className='text-[1.8rem] font-semibold text-center mt-4'>Upcoming Events</h1>
            <div className=' w-[90%]  m-auto flex  space-x-10 items-center justify-center '>
              {events&& 
              events.map((elem,index)=>{
                  return(
                      <EventCard key={index} elem={elem}/>
                  )
              })
              }

            </div>
              <div className='flex items-center justify-center'>
                <button className='bg-[#08075981] px-14 py-3 rounded-xl'>View All</button>
              </div>
          </div>
    </div>
  )
}

