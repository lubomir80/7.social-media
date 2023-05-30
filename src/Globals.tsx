import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: content-box;
    }

     body{
      font-family: ${p => p.theme.fonts.body};
      color: ${p => p.theme.title};
     }
    
    
 
`