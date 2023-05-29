import { LeftbarContainer, NavbarLeft, CategryContainer, Item } from "./Leftbar.styled"
import { LeftbarMenu } from "./Legtbar.data"
import User from "../User/User";


function Leftbar() {
   return (
      <NavbarLeft>
         <LeftbarContainer>
            <User
               image="https://www.donnamoderna.com/content/uploads/2021/12/diventare-persone-positive-830x625.jpg"
               name="Lubomir Tomaszewski">
            </User>
            {LeftbarMenu.map((menu) => {
               const { id, categry, links } = menu;
               return (
                  <CategryContainer key={id}>
                     <h4>{categry}</h4>
                     {links.map((link, index) => {
                        const { icons, name } = link;
                        return (
                           <Item to="/" key={index}>
                              <img src={icons} alt={name} />
                              <span>{name}</span>
                           </Item>
                        )
                     })}
                  </CategryContainer>
               )
            })}
         </LeftbarContainer>
      </NavbarLeft>
   )
}

export default Leftbar