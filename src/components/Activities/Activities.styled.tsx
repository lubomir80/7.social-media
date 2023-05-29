import styled from "styled-components";



export const ActContainer = styled.div`
   display:flex;
   flex-direction: column;
   gap : ${p => p.theme.space[2]}px;
   background-color : ${p => p.theme.element};
   padding : ${p => p.theme.space[2]}px;
`

export const ActUser = styled.div`
   display:flex;
   justify-content: space-between;
   align-items: center;
   gap : ${p => p.theme.space[2]}px;
   font-size: 12px;
`


export const ChangedText = styled.span`
 margin-left: 8px;
 opacity: 0.8;
word-break: break-all;
-webkit-box-orient: vertical;
-webkit-line-clamp: 1;
display:-webkit-box;
overflow: hidden;
`
