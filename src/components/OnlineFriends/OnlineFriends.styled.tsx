import styled from "styled-components";



export const OnlineContainer = styled.div`
   display:flex;
   flex-direction: column;
   gap : ${p => p.theme.space[2]}px;
   background-color : ${p => p.theme.element};
   padding : ${p => p.theme.space[2]}px;

   @media (max-width:${({ theme }) => theme.laptopL}) {
   padding:  ${p => p.theme.space[1] + 5}px;
   }
`




