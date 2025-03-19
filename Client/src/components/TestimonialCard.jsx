
export const TestimonialCard = ({elem}) => {
  return (
    <div className='w-[40vw] h-[40vh]  flex justify-between items-center space-x-4 p-4 rounded-[2rem]' style={{backgroundColor:elem.color}}>
      <div className='w-[30%]'>
        <img src={elem.image_url} alt="" className='w-[100%] h-[13rem]'/>
      </div>

      <div className='w-[70%]'>
        <p>
            {elem.message}
        </p>
        <p> 
           <span className='text-red-500 font-semibold'>{elem.name}</span><span> ,{elem.class}</span>
        </p>
      </div>
    </div>
  )
}

