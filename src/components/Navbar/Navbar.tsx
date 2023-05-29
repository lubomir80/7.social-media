import {
   HomeIcon, MoonIcon, AppsIcon, SunIcon, SearchAltIcon, PersonIcon, Logo,
   EmailOutlineIcon, BellOutlineIcon, NavbarContainer, NavbarLeft,
   NavbarRight, Search, Input
} from "./Navbar.styled"
import User from "../User/User"
import { useGlobalContext } from "../../context"

function Navbar() {
   const { setSelectTheme, isDarkTheme } = useGlobalContext();

   const themToggle = () => {
      setSelectTheme(isDarkTheme ? "light" : "dark");
   }

   return (
      <NavbarContainer>
         <NavbarLeft>
            <Logo to="/">
               Social-Arris
            </Logo>
            <HomeIcon />
            {isDarkTheme ? <MoonIcon onClick={themToggle} /> : <SunIcon onClick={themToggle} />}
            <AppsIcon />
            <Search>
               <SearchAltIcon />
               <Input placeholder="Search" type="text" />
            </Search>
         </NavbarLeft>

         <NavbarRight>
            <PersonIcon />
            <EmailOutlineIcon />
            <BellOutlineIcon />

            <User
               image="https://www.donnamoderna.com/content/uploads/2021/12/diventare-persone-positive-830x625.jpg"
               name="Lubomir Tomaszewski">
            </User>
         </NavbarRight>
      </NavbarContainer>
   )
}

export default Navbar