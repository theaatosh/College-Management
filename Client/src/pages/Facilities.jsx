import React, { useEffect, useState } from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";
export const Facilities = () => {

    const [currentIndex,setCurrentIndex]=useState(1);
    const [facilities,setFacilities]=useState([
        {
            image_url:'/Images/facility1.png',
            facility_title:"Spacious Classrooms",
            facility_description:"The classrooms are thoughtfully designed to provide a comfortable and conducive learning environment. They are spacious, allowing ample movement, well-ventilated to ensure a fresh atmosphere, and equipped with modern furniture for students' comfort. Additionally, interactive tools like smartboards and projectors make lessons more engaging and effective, fostering better understanding and participation."
        },
        {
            image_url:'/Images/facility2.png',
            facility_title:"Well-Equipped Science and Computer Labs",
            facility_description:"The classrooms are thoughtfully designed to provide a comfortable and conducive learning environment. They are spacious, allowing ample movement, well-ventilated to ensure a fresh atmosphere, and equipped with modern furniture for students' comfort. Additionally, interactive tools like smartboards and projectors make lessons more engaging and effective, fostering better understanding and participation.."
        }
    ])
    const handleLeftClick=()=>{
            setCurrentIndex((curIndex)=>
                curIndex===0?facilities.length-1:curIndex-1
            )
    }
    const handleRightClick=()=>{
        setCurrentIndex((curIndex)=>
            curIndex===facilities.length-1?0:curIndex+1
        )
    }

    useEffect(()=>{
        const interval=setInterval(()=>{
            setCurrentIndex((curIndex)=>
                curIndex===facilities.length-1?0:curIndex+1
            )
        },3000)

        return ()=>clearInterval(interval);
    },[facilities.length])
  return (
    <div className='w-full h-[40rem] border-2 bg-[#efefef] relative'>
      <h1 className='text-[3rem] text-center font-semibold'>Facilities</h1>

      <div className='w-[80%] m-auto h-[85%]  flex bg-gradient-to-b from-[#080759a3] to-[#d31b1bac] bg-opacity-60
      rounded-[10vh]'>

                <div className='w-[50%] h-[100%] b flex items-center justify-center'>
                    <img src={facilities[currentIndex].image_url} alt="" className='h-[80%] w-[70%] '/>
                </div>

                <div className='w-[50%] h-[100%] flex flex-col  justify-center pl-[3rem] pb-[4rem]'>
                    <h2 className='text-white text-[1.7rem] font-semibold mb-6 '>{facilities[currentIndex].facility_title}</h2>
                    <p className='w-[90%] text-white text-[1rem]'>{facilities[currentIndex].facility_description}</p>
                </div>

                <IoArrowForwardCircleOutline className='text-4xl absolute top-[50%] right-20 cursor-pointer text-black' onClick={handleRightClick} />
                <IoArrowBackCircleOutline className='text-4xl absolute top-[50%] left-20 cursor-pointer text-black' onClick={handleLeftClick}/>
      </div>
    </div>
  )
}

