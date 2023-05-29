import styled from "styled-components"

export const RegisterBox = styled.div`
   background-color: ${p => p.theme.colors.background};
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
`

export const Card = styled.div`
   width: 60%;
   min-height: 600px;
   overflow: hidden;
   border-radius: ${p => p.theme.borderRadius[1]}px;
   display: flex;
   flex-direction: row-reverse;
`

export const LeftContainer = styled.div`
   flex: 1;
   background:
   radial-gradient(circle,
   rgba(238,174,202,.4) 0%,
   rgba(133,50,189,.4) 100%),
   url("./Register1.jpg");
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   padding: ${p => p.theme.space[3]}px;
   display: flex;
   flex-direction: column;
   gap: ${p => p.theme.space[2]}px;
   color: ${p => p.theme.colors.white};

   & h1{
      font-size: ${p => p.theme.sizes[4]}px;
      line-height: ${p => p.theme.sizes[4]}px;
   }

   & span{
      font-size: ${p => p.theme.sizes[1]}px;
   }
`
export const RegisterBtn = styled.button`
   cursor: pointer;
   background-color: ${p => p.theme.colors.white};
   border: 0;
   padding: ${p => p.theme.sizes[1]}px;
   width: 150px;
   color: ${p => p.theme.colors.purpur};
   font-weight: 700;

`


export const RightContainer = styled.div`
   flex: 1;
   padding: ${p => p.theme.space[3]}px;
   background-color: ${p => p.theme.colors.white};
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: ${p => p.theme.space[2]}px;

   & h1{
      color: ${p => p.theme.colors.greyDark};
   }
`

export const LoginForm = styled.form`
   display: flex;
   flex-direction: column;
   gap: ${p => p.theme.space[2]}px;
`

export const Input = styled.input`
   padding: ${p => p.theme.space[1]}px;
   border: 0;
   border-bottom: 1px solid ${p => p.theme.colors.grey};
   outline: none;
`

export const LoginBtn = styled.button`
   cursor: pointer;
   background-color: ${p => p.theme.colors.purpur};
   border: 0;
   padding: ${p => p.theme.sizes[1]}px;
   width: 150px;
   color: ${p => p.theme.colors.white};
   font-weight: 700;
`