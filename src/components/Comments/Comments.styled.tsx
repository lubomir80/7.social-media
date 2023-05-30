import styled from "styled-components";


export const CommentBox = styled.div`
   display: ${p => p.openComments ? "block" : "none"};
`

export const CommentWrite = styled.div`
   display: flex;
   justify-content: space-between;
   gap: 20px;

   & img{
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 50%; 
   }
`
export const CommentInput = styled.input`
   padding: ${p => p.theme.space[1]}px;
   flex: auto;
   border-radius: ${p => p.theme.borderRadius[1]}px;
   background-color: transparent;
   border: 1px solid ${p => p.theme.title};
   color: ${p => p.theme.title};
`
export const Comment = styled.div`
   display: flex;
   justify-content: space-between;
   gap: 20px;
   margin: ${p => p.theme.space[2]}px 0; 

   & img{
      flex: 1;
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 50%; 
   }
`
export const CommentInfo = styled.div`
  flex: 9;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 5px;
  

  & span{
   font-weight: 700;
  }
`

export const CommentTime = styled.span`
flex: 1;
 align-self: center;
 white-space: nowrap;
 color: ${p => p.theme.colors.grey};

 @media ( max-width:${({ theme }) => theme.tablet}) {
   align-self: flex-start;
   }

@media ( max-width:${({ theme }) => theme.mobile}) {
      white-space: pre-wrap;
      font-size: 12px;
      flex: 2;
      text-align: end;
   }
`