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

   @media ( max-width:${({ theme }) => theme.mobile}) {
      padding: ${p => p.theme.space[1] * 1.5}px;
   }
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
   gap : ${p => p.theme.space[2]}px;
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

   @media ( max-width:${({ theme }) => theme.mobile}) {
      gap : ${p => p.theme.space[1]}px;
      align-items: center;
   }
`

export const PostButton = styled.button`
cursor: pointer;
font-size: 16px;
border: none;
background: transparent;
color: ${p => p.theme.title};
gap: ${p => p.theme.space[1]}px;
display: flex;
align-items: center;

& svg{
   display: flex;
   width: 20px;
   height: 20px;
}
@media ( max-width:${({ theme }) => theme.mobile}) {
      gap : ${p => p.theme.space[1] - 8}px;
   }
`