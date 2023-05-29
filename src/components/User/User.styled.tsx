import styled from 'styled-components'

export const UserItem = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   gap: ${p => p.theme.space[1]}px;
   font-weight: 600;
`
export const Figure = styled.figure`
   border-radius: 50%;
   overflow: hidden;
   width: 30px;
   height: 30px;
   min-width: 30px;

   & img{
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      width: 30px;
      height: 30px;
   }
`

export const Online = styled.div`
   position: absolute;
   width: 10px;
   height: 10px;
   background-color: ${p => p.theme.colors.green};
   top: 0;
   left: 24px;
   border-radius: 50%;
` 