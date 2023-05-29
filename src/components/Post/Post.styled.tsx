import styled from "styled-components";



export const PostBox = styled.div`
   display:flex;
   flex-direction: column;
   gap : ${p => p.theme.space[2]}px;
   padding: ${p => p.theme.space[2]}px;
   gap : ${p => p.theme.space[2]}px;
   background-color: ${p => p.theme.element};
   border-radius: ${p => p.theme.borderRadius[2]}px;
   box-shadow: ${p => p.theme.boxShadow};
`

export const PostUser = styled.div`
   display:flex;
   justify-content: space-between;
   align-items: center;

   & a{
      color: ${p => p.theme.title};
      text-decoration: none;
      padding: ${p => p.theme.space[1]}px 0;
   } 

`

export const PostContent = styled.div`
   display:flex;
   flex-direction: column;
   gap : ${p => p.theme.space[3]}px;
`
export const PostContentText = styled.span`
   
`
export const PostContentImg = styled.div`
   & img{
      width: 100%;
      max-height: 500px;
      object-fit: cover;
   }
`

export const PostInfo = styled.div`
   display:flex;
   align-items: center;
   gap : ${p => p.theme.space[2]}px;
   margin-bottom: ${p => p.theme.space[2]}px;
`

export const PostButton = styled.button`
   cursor: pointer;
   font-size: 20px;
   border: none;
   background: transparent;
   color: ${p => p.theme.title};
   gap: ${p => p.theme.space[1]}px;
   display: flex;
   align-items: center;
   
   & svg{
      display: flex;
      width: 24px;
      height: 24px;
   }
`