import React, { useState } from 'react'
import { AwardCard } from '../components/awardCard'

export const AchieveAwards = () => {
    const [achieveAwards,setAchieveAwards]=useState([
        {
            title:"Top Honors of the day",
            image_url:"/Images/achieveAwards1.png",
            color:"#fca5a5"
        },
        {
            title:"A journey of excellence",
            image_url:"/Images/achieveAwards1.png",
            color:'#0088204D'
        },
        {
            title:"Our shining Stars",
            image_url:"/Images/achieveAwards1.png",
            color:"#0501FC4D"
        }
    ])
  return (
    <div className='w-full h-[38rem]  flex flex-col space-y-4 bg-gray-200 backdrop-blur-[0.9rem] '>
        <div>
      <h1 className='text-[3rem] font-semibold text-center mt-4'>Achievements and Awards</h1>
      <p className='text-[1rem] italic text-center'>Celebrating Success, Shaping the future</p>

        </div>
      <div className=' w-[90%] h-[90%] m-auto flex space-x-10 items-center justify-center '>
        {achieveAwards&& 
        achieveAwards.map((elem,index)=>{
            return(
                <AwardCard key={index} elem={elem}/>
            )
        })
        }
      </div>
    </div>
  )
}

