import React, { useState } from 'react'
import { ProgramCard } from '../components/ProgramCard'

export const Programs = () => {
    const [program,setProgram]=useState([
        {
            title:"pre-school",
            description:"Nepalgunj Model academy provides early childhood program..",
            image_url:"/Images/program1.png",
            color:"rgba(192, 3, 3, 0.41)",
            innerColor:"#F0CACA"
        },
        {
            title:"Primary School",
            description:"Nepalgunj Model academy provides early childhood program..",
            image_url:"/Images/program2.png",
            color:"#9FC3A0",
            innerColor:'rgba(196, 255, 198, 0.77)'
        },
        {
            title:"Secondary School",
            description:"Nepalgunj Model academy provides early childhood program..",
            image_url:"/Images/program3.png",
            color:"rgba(9, 7, 89, 0.59)",
            innerColor:"rgba(179, 178, 226, 0.84)"
        },
    ])
  return (
    <div className='h-[35rem] w-full bg-[#d31b1b3a] flex flex-col'>
     <h1 className='text-[3rem] font-semibold text-center'>Our Programs</h1>

    <div className='h-[100%] flex justify-evenly items-center'>
        {
            program&&program.length>0?
            program.map((elem,index)=>{
                return(
                    <ProgramCard key={index} program={elem}/>

                )

            }):
            <p>No data</p>
        }
    </div>
    </div>
  )
}

