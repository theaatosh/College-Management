import React, { useState } from 'react'
import { TestimonialCard } from '../components/TestimonialCard'

export const Testimonial = () => {

    const [testimonial,setTestimonial]=useState([
        {
            image_url:"/Images/testimonial1.png",
            message:"Nepalgunj Model Academy has been my second home. The supportive teachers and interactive learning environment have made my academic journey exciting. Winning the science quiz competition last year was a highlight of my school life, and I owe it all to the guidance I received here.",
            name:"Ritika Sharma",
            class:"Grade 9",
            color:"#fca5a5",
        },
        {
            image_url:"/Images/testimonial2.png",
            message:"This school has given me the platform to excel not just in academics but also in extracurricular activities. I discovered my passion for drama during the Annual Cultural Fest, and the encouragement from my teachers boosted my confidence to pursue it further.",
            name:"Sujan Karki",
            class:"Grade 9",
           color:'#0088204D'
        },
        {
            image_url:"/Images/testimonial3.png",
            message: "Nepalgunj Model Academy has taught me more than just academics—it has shaped my character and values. The hands-on learning approach and emphasis on teamwork have prepared me for challenges beyond the classroom.",
            class:"Grade 10",
            name:"Rahul Joshi",
              color:"#0501FC4D"
        }
    ])
  return (
    <div className='w-full h-[40rem]  mt-7'>
      <h1 className='text-[3rem] font-semibold text-center'>Testimonial</h1>
        <div className='w-full relative h-[40rem] flex mt-3'>
        {testimonial &&
          testimonial.map((elem, index) => {
            const cardStyles = [
              "absolute top-0 left-[10rem]", // First card
              "absolute top-[7rem] right-[10rem]", // Second card
              "absolute top-[23rem] right-[35rem]", // Third card
            ];
            return (
              <div key={index} className={cardStyles[index]}>
                <TestimonialCard elem={elem} />
              </div>
            );
          })}
        </div>
    </div>
  )
}

