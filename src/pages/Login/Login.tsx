import { useGlobalContext } from "../../context"
import { LoginBox, Card, LeftContainer, RightContainer, RegisterBtn, LoginForm, Input, LoginBtn } from "./Login.styled"
import { Link } from "react-router-dom"

function Login() {
   const { login } = useGlobalContext()

   return (
      <LoginBox>
         <Card>
            <LeftContainer>
               <h1>Hello & Welcome</h1>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam velit, numquam modi aut sequi amet illum suscipit ullam distinctio saepe, iste repellendus explicabo consequuntur maxime non quo itaque quaerat eligendi.</p>
               <span>Create a new account</span>
               <Link to="/register">
                  <RegisterBtn>Register</RegisterBtn>
               </Link>
            </LeftContainer>
            <RightContainer>
               <h1>Login</h1>
               <LoginForm>
                  <Input placeholder="Username" type="text" />
                  <Input placeholder="Password" type="text" />
                  <LoginBtn type="sabmit" onClick={login}>Login</LoginBtn>
               </LoginForm>
            </RightContainer>
         </Card>
      </LoginBox>
   )
}

export default Login