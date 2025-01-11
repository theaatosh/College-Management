import { AboutContent } from "../components/AboutContent"
import { Notice } from "../components/Notice"

export const AboutUs = () => {
 
  return (
    <div className="flex justify-between items-center space-x-[12rem] w-full h-[90vh]  pr-10">
      <AboutContent/>
      <Notice/>
    </div>
  )
}

