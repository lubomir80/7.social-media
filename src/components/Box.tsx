import styled from 'styled-components'
import { typography, space, color, layout, position, border, grid, flexbox } from "styled-system"


export const Box = styled("div")(
   {
      boxSizing: 'border-box',
      margin: "0",
      padding: "0",
   },
   color,
   space,
   layout,
   typography,
   position,
   border,
   grid,
   flexbox,
)
