import { UserItem, Figure, Online } from "./User.styled"

function User({ image, name, online }) {
   return (
      <UserItem>
         <Figure>
            <img src={image} alt={name} />
            {online && <Online />}
         </Figure>
         <span>{name}</span>
      </UserItem>
   )
}

export default User

