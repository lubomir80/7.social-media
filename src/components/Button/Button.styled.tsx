import styled from 'styled-components'


export const Btn = styled.button`
   cursor: pointer;
   color: ${p => p.theme.colors.white};  
   border: 0;
   padding: ${p => p.theme.space[1]}px;
   border-radius: ${({ theme }) => theme.borderRadius[1]}px;
   transition: ${({ theme }) => theme.transition};
   margin: auto;
`
export const BtnBlue = styled(Btn)`
   background-color: ${({ theme }) => theme.colors.blue};
   &:hover{
      background-color: ${({ theme }) => theme.colors.blueHover};
   }
`
export const BtnRed = styled(Btn)`
   background-color: ${({ theme }) => theme.colors.red};
   &:hover{
      background-color: ${({ theme }) => theme.colors.redHover};
   }
`


