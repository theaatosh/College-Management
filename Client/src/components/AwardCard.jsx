import React from 'react'

export const AwardCard = ({elem}) => {
  return (
    <div  className=' w-[25rem] h-[90%]  shadow-custom rounded-[4rem] py-4 '> 
        <img src={elem.image_url} alt="" className='w-[30rem] h-[20rem] rounded-[50%] px-5 hover:scale-105 transition-transform ease-in-out duration-300 transform'/>
        <p className=' w-[60%] m-auto h-[2.5rem] mt-8 relative flex rounded-[4rem]' style={{backgroundColor:elem.color}}>
        <p className='text-center  backdrop-blur-[1rem] h-[7rem] rounded-bl-[4rem]  rounded-br-[4rem]  absolute top-[-2.5rem] left-[-5rem] right-[-5rem]  flex items-center justify-center text-[1.2rem] font-semibold'>{elem.title}</p>
        </p>
        </div>
  )
}

