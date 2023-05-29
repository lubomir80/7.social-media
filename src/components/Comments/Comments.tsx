import { useGlobalContext } from "../../context"
import { CommentBox, Comment, CommentInfo, CommentTime, CommentWrite, CommentInput } from "./Comments.styled"
import { BtnBlue } from "../Button/Button.styled"

const comments = [
   {
      id: 1,
      name: "Rudolf cat",
      userId: 1,
      profilePic: "https://media.self.com/photos/609178a2d5e53b0def108089/4:3/w_2560%2Cc_limit/1131124258",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, tempora exercitationem nesciunt veniam, laboriosam, dolor eius ex expedita vero animi asperiores? Dolor facere iste repellat, tempora a in consectetur dolorem.",
   },
   {
      id: 2,
      name: "Lemon cat",
      userId: 2,
      profilePic: "https://media.self.com/photos/609178a2d5e53b0def108089/4:3/w_2560%2Cc_limit/1131124258",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, tempora exercitationem nesciunt veniam, laboriosam, dolor eius ex expedita vero animi asperiores? Dolor facere iste repellat, tempora a in consectetur dolorem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, tempora exercitationem nesciunt veniam, laboriosam, dolor eius ex expedita vero animi asperiores? Dolor facere iste repellat, tempora a in consectetur dolorem.",
   },
]


function Comments({ openComments }) {
   const { selectUser } = useGlobalContext()




   return (
      <CommentBox openComments={openComments}>
         <CommentWrite>
            <img src={selectUser.profilePic} alt={selectUser.name} />
            <CommentInput />
            <BtnBlue>Send</BtnBlue>
         </CommentWrite>
         {comments.map((comment) => {
            const { id, name, userId, profilePic, desc } = comment
            return (
               <Comment key={id}>
                  <img src={profilePic} alt={name} />
                  <CommentInfo>
                     <span>{name}</span>
                     <p>{desc}</p>
                  </CommentInfo>
                  <CommentTime>1 hour ago</CommentTime>
               </Comment>
            )
         })}
      </CommentBox>
   )
}

export default Comments