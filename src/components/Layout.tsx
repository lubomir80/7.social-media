import styled from "styled-components";
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import Leftbar from "./Leftbar/Leftbar"
import Rightbar from "./Rightbar/Rightbar"
import { Box } from "./Box";

function Layout() {


   return (

      <LayoutContainer>
         <Navbar />
         <Box display="flex">
            <Leftbar />
            <Box flex="6">
               <Outlet />
            </Box>
            <Rightbar />
         </Box>
      </LayoutContainer>

   )
}

const LayoutContainer = styled.div`
   font-family: ${p => p.theme.fonts.body};
   background-color: ${p => p.theme.body};
   color: ${p => p.theme.title};
   transition: ${p => p.theme.transition};
`


export default Layout