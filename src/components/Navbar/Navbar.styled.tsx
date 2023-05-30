import styled from 'styled-components'
import { Link } from "react-router-dom"
import { Home } from '@styled-icons/boxicons-regular/Home'
import { Moon } from "@styled-icons/boxicons-regular/Moon"
import { Sun } from "@styled-icons/bootstrap/Sun"
import { Apps } from "@styled-icons/octicons/Apps"
import { SearchAlt } from "@styled-icons/boxicons-regular/SearchAlt";
import { Person } from "@styled-icons/bootstrap/Person"
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline"
import { BellOutline } from "@styled-icons/evaicons-outline/BellOutline"




export const NavbarContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 50px;
   padding: ${p => p.theme.space[1]}px ${p => p.theme.space[2]}px;
   border-bottom: 1px solid ${p => p.theme.colors.grey};
   background-color: ${p => p.theme.element};
   position: sticky;
   top: 0;
   transition: ${p => p.theme.transition};
   z-index: 50;

   @media ( max-width:${({ theme }) => theme.tablet}) {
      padding: ${p => p.theme.space[1]}px;
   }

`

export const NavbarLeft = styled.div`
   display: flex;
   align-items: center;
   gap: ${p => p.theme.space[2]}px;
`

export const NavbarRight = styled.div`
   display: flex;
   align-items: center;
   gap: ${p => p.theme.space[2]}px;

   & div{
      @media ( max-width:${({ theme }) => theme.tabletBg}) {
         display: none;
      }
   }

`

export const Logo = styled(Link)`
      white-space: nowrap;
      text-decoration: none;
      color: ${p => p.theme.logo};
      font-weight: 700;
`

export const Search = styled.div`
   display: flex;
   align-items: center;
   gap: ${p => p.theme.space[1]}px;
   border: 1px solid ${p => p.theme.colors.grey};
   border-radius: ${p => p.theme.borderRadius[1]}px;
   padding: ${p => p.theme.space[1]}px;
   

   
`


export const Input = styled.input`
   border: 0;
   outline: none;
   width: 20vw;
   background-color: ${p => p.theme.element};
   color: ${p => p.theme.title};
   /* transition: ${p => p.theme.transition}; */
   
   @media ( max-width:${({ theme }) => theme.tabletBg}) {
      width: 200px;
   }

   @media ( max-width:${({ theme }) => theme.tablet}) {
      display: none;
   }
`



export const HomeIcon = styled(Home)`
cursor: pointer;
width: 20px;
height: 20px;
color: ${p => p.theme.title};
`
export const MoonIcon = styled(Moon)`
cursor: pointer;
width: 20px;
height: 20px;
color: ${p => p.theme.title};
`
export const SunIcon = styled(Sun)`
cursor: pointer;
width: 20px;
height: 20px;
color: ${p => p.theme.title};
`
export const AppsIcon = styled(Apps)`
cursor: pointer;
width: 20px;
height: 20px;
color: ${p => p.theme.title};

@media (max-width:${({ theme }) => theme.mobile}) {
   display: none;
}
`
export const SearchAltIcon = styled(SearchAlt)`
cursor: pointer;
width: 20px;
height: 20px;
color: ${p => p.theme.title};
`
export const PersonIcon = styled(Person)`
cursor: pointer;
width: 20px;
height: 20px;
color: ${p => p.theme.title};
`
export const EmailOutlineIcon = styled(EmailOutline)`
cursor: pointer;
width: 20px;
height: 20px;
color: ${p => p.theme.title};

   @media ( max-width:${({ theme }) => theme.mobile}) {
      display: none;
   }
`
export const BellOutlineIcon = styled(BellOutline)`
cursor: pointer;
width: 20px;
height: 20px;
color: ${p => p.theme.title};
   @media ( max-width:${({ theme }) => theme.mobile}) {
      display: none;
   }
`