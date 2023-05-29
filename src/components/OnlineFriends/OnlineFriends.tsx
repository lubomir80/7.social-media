import { OnlineFriendsTS } from "../../interfaces"
import { OnlineContainer } from "./OnlineFriends.styled"
import User from "../User/User"

const online: OnlineFriendsTS[] = [
   {
      id: 1,
      name: "Pink Pink",
      img: "https://media.self.com/photos/609178a2d5e53b0def108089/4:3/w_2560%2Cc_limit/1131124258",
      online: true,
   },
   {
      id: 2,
      name: "Harry Kane",
      img: "https://s.hs-data.com/bilder/spieler/gross/179293.jpg",
      online: true,
   },
   {
      id: 3,
      name: "Nicolas Cage",
      img: "https://media.gq.com/photos/5582f8c409f0bee56440b482/master/w_1600%2Cc_limit/entertainment-2011-05-cage-match-nic-cage_300x430.jpg",
      online: true,
   }
]


function OnlineFriends() {
   return (
      <OnlineContainer>
         <h4>Online Friends</h4>
         {online.map((friend) => {
            const { id, name, img, online } = friend;
            return (<User key={id} name={name} image={img} online={online} />)
         })}
      </OnlineContainer>
   )
}

export default OnlineFriends