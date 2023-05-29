import {
   NavbarRight, RightContainer,

} from "./Rightbar.styled"

import Suggestion from "../Suggestions/Suggestion"
import Activities from "../Activities/Activities"
import OnlineFriends from "../OnlineFriends/OnlineFriends"




function Rightbar() {
   return (
      <NavbarRight>
         <RightContainer>

            <Suggestion />
            <Activities />
            <OnlineFriends />
         </RightContainer>
      </NavbarRight>
   )
}

export default Rightbar