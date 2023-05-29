import styled from "styled-components";



export const StoriesBox = styled.div`
   display:flex;
   gap : ${p => p.theme.space[2]}px;
   height: 250px;
   margin-bottom: ${p => p.theme.space[2]}px;

   @media ( max-width:${({ theme }) => theme.tablet}) {
     height: 120px;
   }
`

export const StoriesContainer = styled.div`
   position: relative;
   flex: 1;
   overflow: hidden;
   border-radius: ${p => p.theme.borderRadius[1]}px;
   
   @media ( max-width:${({ theme }) => theme.tablet}) {
      border: 2px solid ${p => p.theme.colors.greyDark};
      height: 100px;
      width: 100px;
      border-radius: 50%;
   }
`

export const StoriesImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const StoriesName = styled.span`
   position: absolute;
   bottom: ${p => p.theme.space[1]}px;
   left: ${p => p.theme.space[1]}px;
   color: ${p => p.theme.colors.white};

   @media ( max-width:${({ theme }) => theme.tablet}) {
      display: none;
   }
`

export const StoriesBtn = styled.button`
   cursor: pointer;
   position: absolute;
   bottom: ${p => p.theme.space[2] * 1.5}px;
   left: ${p => p.theme.space[1]}px;
   color: ${p => p.theme.colors.white};
   background-color: ${p => p.theme.colors.blue};
   border: 0;
   border-radius: 100%;
   width: 30px;
   height: 30px;
   font-size: 25px;
   display: flex;
   align-items: center;
   justify-content: center;

   @media ( max-width:${({ theme }) => theme.tablet}) {
      top: 50%;
      left: 0;
      right: 0;
      margin: auto;
   }
`