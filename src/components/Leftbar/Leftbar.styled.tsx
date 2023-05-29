import styled from 'styled-components'
import { Link } from "react-router-dom"



export const NavbarLeft = styled.div`  
   position: sticky;
   top: 71px;
   height: calc(100vh - 71px);
   flex: 2;
   transition: ${p => p.theme.tramsition};
   background-color: ${p => p.theme.element};

   @media ( max-width:${({ theme }) => theme.tablet}) {
      display: none;
   }

`
export const LeftbarContainer = styled.div`
   padding:  ${p => p.theme.space[2]}px ;
   overflow: scroll;
   display: flex;
   height: 100%;
   display: flex;
   flex-direction: column;
   gap: ${p => p.theme.space[2]}px;
   box-shadow: ${p => p.theme.boxShadow};

   &::-webkit-scrollbar{
      display: none;
   }

   @media ( max-width:${({ theme }) => theme.tabletBg}) {
      padding:  ${p => p.theme.space[2]}px ${p => p.theme.space[1]}px ;
   }
`

export const CategryContainer = styled.div`
   display: flex; 
   flex-direction: column;
   gap: ${p => p.theme.space[1]}px;
`

export const Item = styled(Link)`
   text-decoration: none;
   color: ${p => p.theme.title};
   display: flex;
   align-items: center;
   gap: ${p => p.theme.space[1]}px;

   & img{
      width: 30px;
   }

   &:hover{
      text-decoration: underline;
   }
`








