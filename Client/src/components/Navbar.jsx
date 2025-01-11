
export const Navbar = () => {
  return (
    <div className=' h-[5rem] w-full flex  items-center justify-between pl-20 pr-20 bg-transparent  fixed top-0 z-10 backdrop-blur-[0.9rem]'>
        <img src="./Images/Logo.png" alt="" className='w-[7rem]'/>
        <ul className='hidden  sm:flex space-x-12'>
            <li className='text-white cursor-pointer'>Home</li>
            <li className='text-white'>About Us</li>
            <li className='text-white'>Programs</li>
            <li className='text-white'>Pages</li>
            <li className='text-white'>News/Events</li>
        </ul>
        <div></div>
    </div>
  )
}

