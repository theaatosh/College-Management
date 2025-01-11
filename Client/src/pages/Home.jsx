import { Landing } from "../components/Landing"
import { PrincipleMessage } from "../components/PrincipleMessage"
import { AboutUs } from "./AboutUs"
import { AchieveAwards } from "./AchieveAwards"
import { Events } from "./Events"
import { Facilities } from "./Facilities"
import { Programs } from "./Programs"
import { Testimonial } from "./Testimonial"

export const Home = () => {
  return (
    <div>
    <Landing/>
    <AboutUs/>
    <Programs/>
    <Facilities/>
    <AchieveAwards/>
    <Events/>
    <Testimonial/>
    <PrincipleMessage/>
    </div>
  )
}

