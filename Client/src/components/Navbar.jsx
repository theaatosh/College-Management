import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
export const Navbar = () => {

  const [menuOpen,setMenuOpen]=useState(false);
  return (
    <div className=' h-[5rem]  flex   items-center justify-between pl-10 pr-10 bg-transparent fixed top-0 left-0 right-0 z-10 backdrop-blur-[0.9rem] 
  '>
        <img src="./Images/Logo.png" alt="" className='w-[8rem]'/>
        <ul className='hidden  md:flex space-x-12 text-[10rem]'>
            <li className='nav_list '>Home</li>
            <li className='nav_list'>About Us</li>
            <li className='nav_list'>Programs</li>
            <li className='nav_list'>Pages</li>
            <li className='nav_list'>News/Events</li>
        </ul>
        <MdMenu className="text-3xl md:hidden " onClick={()=>setMenuOpen((preVal)=>!preVal)}/>

        {menuOpen&&
        <div className="flex flex-col absolute  right-0 list-none w-[80%]  bg-black top-[0] h-[40rem] p-10"> 
        <div className="text-white flex justify-end" >
        <RxCross2 className="text-3xl" onClick={()=>setMenuOpen(false)}/>
        </div>
        <div>
        <li className='nav_list'>Home</li>
            <li className='nav_list'>About Us</li>
            <li className='nav_list'>Programs</li>
            <li className='nav_list'>Pages</li>
            <li className='nav_list'>News/Events</li>
        </div>
            
        </div>
        }
    </div>
  )
}

