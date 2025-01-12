
export const Footer = () => {

  return (
    <div className="w-full   border-red-500 bg-[#0807599d] flex flex-col">
    <div className=" flex space-x-[8rem] w-[90%] justify-center pt-[2rem] pb-[5rem] pl-[5rem]">
     <div className="  w-[25rem]  text-white">
        <img src="/Images/Logo.png" alt="" className="w-[7rem]"/>
        <p>Nepal Model Academy</p>
     </div>

     <div className="  w-[25rem] text-white">
        <h2 className="text-[1.4rem] font-semibold mb-5">Contact Information</h2>
       <ul>
        <li className="mb-2"><span>Address:<span> Nepalgunj,Banke,Nepal</span></span></li>
        <li className="mb-2"><span>Phone:<span> +977-81-XXXXXX</span></span></li>
        <li className="mb-2"><span>Email:<span>info@nepalgunjmodelacademy.edu.np</span></span></li>
       </ul>
    </div>


     <div className="  w-[25rem]  text-white">
     <h2 className="text-[1.4rem] font-semibold text-white mb-5">Useful Links</h2>
       <ul>
        <li className="mb-2">Home</li>
        <li className="mb-2">About Us</li>
        <li className="mb-2">Admissions</li>
        <li className="mb-2">Contact Us</li>
       </ul>
     </div>
    </div>

    <hr />
    <div className="px-[5rem] py-6 text-white">&copy; 2024 Nepalgunj Model Academy. All Rights Reserved.</div>
    
    </div>
  )
}

