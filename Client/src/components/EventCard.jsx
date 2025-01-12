import React from 'react'

export const EventCard = ({elem}) => {
  return (
    <div  className=' w-[25rem] h-[22rem]  shadow-custom rounded-[2rem] py-4 bg-[#08075981] px-5'> 
    <img src={elem.image_url} alt="" className='w-[20rem] h-[15rem] rounded-[2rem]  hover:scale-105 transition-transform ease-in-out duration-300 transform'/>
    <div className=' h-[4rem] bg-white rounded-[2rem] mt-3 flex items-center justify-center'>
        <p>{elem.title}</p>

    </div>
    </div>
  )
}

