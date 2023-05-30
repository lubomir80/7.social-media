import styled from "styled-components";



export const PostsBox = styled.div`

   display:flex;
   flex-direction: column;
   gap : ${p => p.theme.space[3]}px;
   /* height: 250px; */
   margin-bottom: ${p => p.theme.space[2]}px;
   
   @media ( max-width:${({ theme }) => theme.mobile}) {
      gap : ${p => p.theme.space[2]}px;
   }
`
