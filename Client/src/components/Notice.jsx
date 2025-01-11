import React, { useState } from 'react'

export const Notice = () => {
    const [notice,setNotice]=useState([
        {
            title:"Admissions Open for 2025",
            descripton:"Applications are now being accepted for Grades 1-12"
        },
        {
            title:"Admissions Open for 2025",
            descripton:"Applications are now being accepted for Grades 1-12"
        },
        {
            title:"Admissions Open for 2025",
            descripton:"Applications are now being accepted for Grades 1-12"
        },
        {
            title:"Admissions Open for 2025",
            descripton:"Applications are now being accepted for Grades 1-12"
        },
        {
            title:"Admissions Open for 2025",
            descripton:"Applications are now being accepted for Grades 1-12"
        },
        {
            title:"Admissions Open for 2025",
            descripton:"Applications are now being accepted for Grades 1-12"
        },
        {
            title:"Admissions Open for 2025",
            descripton:"Applications are now being accepted for Grades 1-12"
        },
        {
            title:"Admissions Open for 2025",
            descripton:"Applications are now being accepted for Grades 1-12"
        },
        {
            title:"Admissions Open for 2025",
            descripton:"Applications are now being accepted for Grades 1-12"
        },
        {
            title:"Admissions Open for 2025",
            descripton:"Applications are now being accepted for Grades 1-12"
        }
    ])
  return (
    <div className='  rounded-tl-[3rem] rounded-bl-[3rem] h-[95%] w-[40%]   flex flex-col overflow-y-scroll shadow-custom'>
       <h1 className='text-[2rem] font-semibold text-center bg-[#D31B1B] text-white py-2'>Notice Board</h1>
       <div className='h-[100%]'>
            {notice&&notice.length>0?
            notice.map((elem,index)=>{
                return(
                <div key={index} className='w-full border-b-2 border-gray-300 py-3'>
                    <p className='text-center text-[#D31B1B] font-semibold'> {elem.title}</p>
                    <p className='text-center'>{elem.descripton}</p>

                </div>
                )


            })
            :
            <div className='w-full h-full flex justify-center items-center text-[2rem] font-bold text-[#D31B1B] '>No data to show!!</div>
            }
       </div>
    </div>
  )
}

