import { ActivitiesTS } from "../../interfaces"
import { ActContainer, ActUser, ChangedText } from "./Activities.styled"
import User from '../User/User'
import { Box } from '../Box'

const activieties: ActivitiesTS[] = [
   {
      id: 1,
      name: "Pink Pink",
      img: "https://media.self.com/photos/609178a2d5e53b0def108089/4:3/w_2560%2Cc_limit/1131124258",
      des: "changed their cover picture",
      min: "1"
   },
   {
      id: 2,
      name: "Harry Kane",
      img: "https://s.hs-data.com/bilder/spieler/gross/179293.jpg",
      des: "changed their cover picture",
      min: "1"
   },
   {
      id: 3,
      name: "Nicolas Cage",
      img: "https://media.gq.com/photos/5582f8c409f0bee56440b482/master/w_1600%2Cc_limit/entertainment-2011-05-cage-match-nic-cage_300x430.jpg",
      des: "changed their cover picture",
      min: "1"
   }
]

function Activities() {
   return (
      <ActContainer>
         <h4>Last Activities</h4>
         {activieties.map((act) => {
            const { id, name, img, des, min } = act;
            return (
               <ActUser key={id}>
                  <Box display="flex" alignItems="center">
                     <User name={name} image={img} />
                     <ChangedText>{des}</ChangedText>
                  </Box>
                  <span>{min} min ago</span>
               </ActUser>
            )
         })}
      </ActContainer>
   )
}

export default Activities