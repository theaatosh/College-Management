import  { useEffect, useState } from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export const Landing = () => {
    const[currentIndex,setCurrentIndex]=useState(0)
    const images=[
        '/Images/Slider1.png',
        '/Images/slider2.png',
        '/Images/slider3.png',

    ]
    const handleRightClick=()=>{
     setCurrentIndex((curIndex)=>curIndex===images.length-1?0:curIndex+1)
     
    }
    const handleLeftClick=()=>{
        setCurrentIndex((curIndex)=>curIndex===0?images.length-1:curIndex-1)
        
    }
    useEffect(()=>{
        const interval = setInterval(() => {
            setCurrentIndex((curIndex) => (curIndex === images.length - 1 ? 0 : curIndex + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

  return (
    <div className='h-[100vh] bg-gradient-to-b from-[#080759c1] to-[#d31b1bc2] bg-opacity-100 pt-[0.5rem] relative flex flex-col justify-center items-center '>
        <IoArrowForwardCircleOutline className='text-4xl absolute top-[50%] right-4 cursor-pointer' onClick={handleRightClick} />
        <IoArrowBackCircleOutline className='text-4xl absolute top-[50%] left-4 cursor-pointer' onClick={handleLeftClick}/>
      <div className='w-[90vw]  h-[77vh]  m-auto mt-20 rounded-[10vh]'>
        <img src={images[currentIndex]} alt="" className='h-[100%] w-[100%] rounded-[10vh]' />
        </div>  

        <button className='bg-[#08075993] text-white px-[10px] py-[2vh] rounded-xl w-[10rem]  mt-1 mb-2 '>Apply Now</button>
    </div>
  )
}
