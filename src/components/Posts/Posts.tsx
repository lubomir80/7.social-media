import { PostsBox } from "./Posts.styled"
import Post from "../Post/Post"

function Posts() {

   // Temporary
   const posts = [
      {
         id: 1,
         name: "Rudolf cat",
         userId: 1,
         profilePic: "https://media.self.com/photos/609178a2d5e53b0def108089/4:3/w_2560%2Cc_limit/1131124258",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         img: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      },
      {
         id: 2,
         name: "Lemon cat",
         userId: 2,
         profilePic: "https://media.self.com/photos/609178a2d5e53b0def108089/4:3/w_2560%2Cc_limit/1131124258",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         img: "https://images.unsplash.com/photo-1626602411112-10742f9a3ab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      },
   ]

   return (
      <PostsBox>
         {posts.map((post) => {
            return (
               <Post key={post.id} post={post} />
            )
         })}
      </PostsBox>
   )
}

export default Posts