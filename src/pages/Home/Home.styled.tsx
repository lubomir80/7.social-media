import styled from "styled-components";



export const HomeSection = styled.section`
   padding: ${p => p.theme.space[2]}px;
   background-color: ${p => p.theme.body};
   min-height: 100vh;
   
   @media ( max-width:${({ theme }) => theme.tablet}) {
      padding: ${p => p.theme.space[2]}px ${p => p.theme.space[1]}px;
   }
`