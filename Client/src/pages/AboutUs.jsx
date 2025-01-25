import { AboutContent } from "../components/AboutContent"
import { Notice } from "../components/Notice"

export const AboutUs = () => {
 
  return (
    <div className="w-[100%] mt-10  grid grid-cols-1 md:grid-cols-2  gap-4">
      <AboutContent/> 
      <Notice/>
    </div>
  )
}

