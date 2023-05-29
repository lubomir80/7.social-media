import { useState } from "react"
import { PostBox, PostUser, PostContent, PostInfo, PostButton, PostContentText, PostContentImg } from "./Post.styled"
import { FavoriteBorder } from "@styled-icons/material/FavoriteBorder";
import { Favorite } from "@styled-icons/material/Favorite";
import { MoreHorizontalOutline } from "@styled-icons/evaicons-outline/MoreHorizontalOutline"
import { CommentDetail } from "@styled-icons/boxicons-regular/CommentDetail"
import { Share } from "@styled-icons/entypo/Share"
import { Link } from "react-router-dom";
import User from "../User/User";
import Comments from "../Comments/Comments";

function Post({ post }) {
   const { name, userId, profilePic, desc, img } = post;
   const [favorite, setFavorite] = useState<boolean>(false);
   const [openComments, setOpenComments] = useState<boolean>(false);

   return (
      <PostBox>
         <PostUser>
            <Link to={`/profile/${userId}`}>
               <User name={name} image={profilePic} />
            </Link>
            <PostButton>
               <MoreHorizontalOutline />
            </PostButton>
         </PostUser>
         <PostContent>
            <PostContentText>
               {desc}
            </PostContentText>
            <PostContentImg>
               <img src={img} alt={name} />
            </PostContentImg>
         </PostContent>
         <PostInfo>
            <PostButton onClick={() => setFavorite(!favorite)}>
               {favorite ? <Favorite /> : <FavoriteBorder />}
               12 Liks
            </PostButton>
            <PostButton onClick={() => setOpenComments(!openComments)}>
               <CommentDetail />
               10 Comments
            </PostButton>
            <PostButton>
               <Share />
               Share
            </PostButton>
         </PostInfo>
         <Comments openComments={openComments} />
      </PostBox>
   )
}

export default Post