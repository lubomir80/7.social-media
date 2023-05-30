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
   transition: ${p => p.theme.transition};
   background-color: ${p => p.theme.body};
`


export default Layout