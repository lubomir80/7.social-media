import { SugContainer, SugUser, BtnContainer } from "./Suggestion.styled"
import User from "../User/User"
import { BtnBlue, BtnRed } from "../Button/Button.styled"
import { SuggestionTS } from "../../interfaces"

function Suggestion() {

   // Temporary data
   const suggestions: SuggestionTS[] = [
      {
         id: 1,
         name: "Pink Pink",
         img: "https://media.self.com/photos/609178a2d5e53b0def108089/4:3/w_2560%2Cc_limit/1131124258"
      },
      {
         id: 2,
         name: "Harry Kane",
         img: "https://s.hs-data.com/bilder/spieler/gross/179293.jpg"
      },
      {
         id: 3,
         name: "Nicolas Cage",
         img: "https://media.gq.com/photos/5582f8c409f0bee56440b482/master/w_1600%2Cc_limit/entertainment-2011-05-cage-match-nic-cage_300x430.jpg"
      }
   ]


   return (
      <SugContainer>
         <h4>Suggestions For You</h4>
         {suggestions.map((sug) => {
            const { id, name, img } = sug;
            return (
               <SugUser key={id}>
                  <User name={name} image={img} />
                  <BtnContainer>
                     <BtnBlue>follow</BtnBlue>
                     <BtnRed>dissmiss</BtnRed>
                  </BtnContainer>
               </SugUser>)
         })}
      </SugContainer>
   )
}

export default Suggestion