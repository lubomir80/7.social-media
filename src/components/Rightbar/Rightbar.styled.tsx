import styled from 'styled-components'


export const NavbarRight = styled.div`
   position: sticky;
   top: 71px;
   height: calc(100vh - 71px);
   flex: 3;

   &::-webkit-scrollbar{
      display: none;
   }

   @media ( max-width:${({ theme }) => theme.tabletBg}) {
      display: none;
   }
`



export const RightContainer = styled.div`
   overflow: scroll;
   display: flex;
   padding: ${p => p.theme.space[1]}px;
 
   background-color: ${p => p.theme.body}
   height: 100%;
   display: flex;
   flex-direction: column;
   gap: ${p => p.theme.space[2]}px;
   transition: ${p => p.theme.tramsition};

   &::-webkit-scrollbar{
   display: none;   
   }


`

