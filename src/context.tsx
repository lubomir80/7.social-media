import React, { useContext, useState, useEffect } from "react";
import { UserTS } from "./interfaces"

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

   // ......................Theme select.............................

   const [selectTheme, setSelectTheme] = useState<string>(
      JSON.parse(localStorage.getItem("selectTheme")) || "dark"
   );
   const isDarkTheme: boolean = selectTheme === "dark";

   useEffect(() => {
      localStorage.setItem("selectTheme", JSON.stringify(selectTheme))
   }, [selectTheme])

   // ......................User select.............................

   const [selectUser, setSelectUser] = useState<UserTS>(
      JSON.parse(localStorage.getItem("selectUser")) || null
   );
   useEffect(() => {
      localStorage.setItem("selectUser", JSON.stringify(selectUser))
   }, [selectUser])



   const login = (): void => {
      setSelectUser({
         id: 1,
         name: "Lubomir Tomaszewski",
         profilePic: "https://www.donnamoderna.com/content/uploads/2021/12/diventare-persone-positive-830x625.jpg",
      })
   }





   return (
      <AppContext.Provider
         value={{
            setSelectTheme,
            selectTheme,
            isDarkTheme,
            selectUser,
            setSelectUser,
            login
         }}>
         {children}
      </AppContext.Provider>
   )
}

export const useGlobalContext = () => {
   return useContext(AppContext);
}

export { AppProvider, AppContext }