import styled from "styled-components";



export const SugContainer = styled.div`
   display:flex;
   flex-direction: column;
   gap : ${p => p.theme.space[2]}px;
   background-color : ${p => p.theme.element};
   padding : ${p => p.theme.space[2]}px;
   `

export const SugUser = styled.div`
   display:flex;
   justify-content: space-between;
   align-items: center;
   gap : ${p => p.theme.space[2]}px;
   font-size: 12px;  
`

export const BtnContainer = styled.div`
   display:flex;
   gap : ${p => p.theme.space[1]}px;
   
`
