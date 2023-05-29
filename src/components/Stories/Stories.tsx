import { StoriesBox, StoriesContainer, StoriesImage, StoriesName, StoriesBtn } from "./Stories.styled"
import { useGlobalContext } from "../../context"


function Stories() {
   const { selectUser } = useGlobalContext()

   // Temporary data
   const stories = [
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
      , {
         id: 4,
         name: "Charlize Theron",
         img: "https://upload.wikimedia.org/wikipedia/commons/8/85/Charlize_Theron_in_2017.jpg"
      },
   ]


   return (
      <StoriesBox >
         <StoriesContainer >
            <StoriesImage src={selectUser.profilePic} alt={selectUser.name} />
            <StoriesName>{selectUser.name}</StoriesName>
            <StoriesBtn>+</StoriesBtn>
         </StoriesContainer>


         {stories.map((item) =>
            <StoriesContainer key={item.id}>
               <StoriesImage src={item.img} alt={item.name} />
               <StoriesName>{item.name}</StoriesName>
            </StoriesContainer>)}
      </StoriesBox>
   )
}

export default Stories