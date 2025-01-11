
export const Navbar = () => {
  return (
    <div className=' h-[5rem] w-full flex  items-center justify-between pl-20 pr-20 bg-transparent  fixed top-0 z-10 backdrop-blur-[0.9rem]'>
        <img src="./Images/Logo.png" alt="" className='w-[8rem]'/>
        <ul className='hidden  sm:flex space-x-12'>
            <li className='nav_list'>Home</li>
            <li className='nav_list'>About Us</li>
            <li className='nav_list'>Programs</li>
            <li className='nav_list'>Pages</li>
            <li className='nav_list'>News/Events</li>
        </ul>
        <div></div>
    </div>
  )
}

