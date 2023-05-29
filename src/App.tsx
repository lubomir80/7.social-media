import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { darkTheme, lightTheme } from "./theme"
import { GlobalStyles } from "./Globals"
import { ThemeProvider } from "styled-components";
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import { useGlobalContext } from "./context";


function App() {
   const { isDarkTheme } = useGlobalContext()



   // const ProtectedRout = ({ children }) => {
   //    if (!currentUser) {
   //       return <Navigate to="/login" />
   //    }
   // }

   return (
      <div>
         <ThemeProvider theme={isDarkTheme ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Router>
               <Routes>
                  <Route path="/" element={<Layout />}>
                     <Route index element={<Home />} />
                     <Route path='/profile/:id' element={<Profile />} />
                  </Route>
                  <Route path="/register" element={<Register />} />
                  <Route path='/login' element={<Login />} />
                  {/* <Route path='/*' element={<Error />} /> */}
               </Routes>
            </Router>
         </ThemeProvider>
      </div >
   )
}





export default App
