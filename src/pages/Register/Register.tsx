import { RegisterBox, Card, LeftContainer, RightContainer, RegisterBtn, LoginForm, Input, LoginBtn } from "./Register.styled"
import { Link } from "react-router-dom"

function Register() {
   return (
      <RegisterBox>
         <Card>
            <LeftContainer>
               <h1>Our community </h1>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam velit, numquam modi aut sequi amet illum suscipit ullam distinctio saepe, iste repellendus explicabo consequuntur maxime non quo itaque quaerat eligendi.</p>
               <span>Do you have an account</span>
               <Link to="/login">
                  <RegisterBtn>Login</RegisterBtn>
               </Link>
            </LeftContainer>
            <RightContainer>
               <h1>Register</h1>
               <LoginForm>
                  <Input placeholder="Username" type="text" />
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Username" type="text" />
                  <Input placeholder="Name" type="text" />
                  <LoginBtn type="sabmit">Register</LoginBtn>
               </LoginForm>
            </RightContainer>
         </Card>
      </RegisterBox>

   )
}

export default Register