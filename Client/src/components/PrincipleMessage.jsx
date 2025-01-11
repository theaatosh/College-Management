import React from 'react'

export const PrincipleMessage = () => {
  return (
    <div className='w-[full] h-[35rem]  mt-[6rem]  flex items-center bg-[#E8E8E8]'>
      <div className='w-full h-[75%]  bg-gradient-to-b from-[#080759a5] to-[#d31b1ba3] bg-opacity-100 flex justify-between items-center'>
        <div className='w-[28%] h-[100%] rounded-tr-[50%] rounded-br-[50%]  flex items-center justify-center bg-[#CACCE8]'>
           <div className='w-[23rem] h-[23rem] rounded-[50%] '>
                    <img src="/Images/principal.png" alt="" className='w-[100%] h-[100%]'/>
           </div>
        </div>

        <div className='w-[70%] h-[100%] px-[10rem]  py-[5rem]'>
            <h1 className='text-[2rem] font-semibold mb-4 text-white'>Principal Message</h1>
            <p className='text-white text-[1rem]'>Welcome to Nepalgunj Model Academy, where we are dedicated to nurturing young minds and shaping bright futures. Our mission is to provide a holistic education that balances academic excellence with character building and skill development. We take pride in our dedicated faculty, modern facilities, and a dynamic curriculum that encourages creativity, critical thinking, and ethical values. At Nepalgunj Model Academy, we strive to create a safe, inclusive, and inspiring environment where every student is empowered to realize their potential and excel in an ever-evolving world. Together with our staff, parents, and community, we are committed to preparing our students for success both inside and beyond the classroom.</p>
        </div>
      </div>
    </div>
  )
}

