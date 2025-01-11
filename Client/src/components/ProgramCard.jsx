import React from 'react'

export const ProgramCard = ({program}) => {
    
  return (
    <div className='h-[27rem] w-[20rem]  flex flex-col items-center space-y-4 pt-4 pb-3  rounded-[3.5rem]' style={{backgroundColor:program.color}}>
      <div className='w-[90%] h-[65%]  rounded-tl-[3.5rem] rounded-tr-[3.5rem]'>
        <img src={program.image_url} alt="" className='w-[100%] h-[100%]'/>
      </div>
      <div className='h-[35%]  w-[90%] rounded-bl-[3.5rem] rounded-br-[3.5rem]  flex flex-col items-center space-y-4 ' style={{backgroundColor:program.innerColor}}>
        <h3 className='text-xl font-semibold text-center'>{program?.title}</h3>
        <p className='text-md text-center'>{program?.description}</p>
      </div>
    </div>
  )
}

