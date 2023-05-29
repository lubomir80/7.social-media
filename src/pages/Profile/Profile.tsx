import { useGlobalContext } from "../../context"
import {
   ProfileSection, ProfileImagesBox, BackgroundPic, ProfilePic, ProfileContainer, UserInfo, Left, FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon, PinterestIcon, Center, Name, Right
   , InfoLink, FollowBtn, LocationPinIcon, NetworkIcon, EmailIcon,
   DottsIcon
} from "./Profile.styled"
import { Box } from "../../components/Box"
import { BtnBlue } from "../../components/Button/Button.styled"
import Posts from "../../components/Posts/Posts"

function Profile() {
   const { selectUser } = useGlobalContext()

   return (
      <ProfileSection>
         <ProfileImagesBox>
            <BackgroundPic src="https://plus.unsplash.com/premium_photo-1667099522743-6b233d408465?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
            <ProfilePic src={selectUser.profilePic} />
         </ProfileImagesBox>
         <ProfileContainer>
            <UserInfo>
               <Left>
                  <a href="https://www.facebook.com/"><FacebookIcon /></a>
                  <a href="https://www.facebook.com/"><InstagramIcon /></a>
                  <a href="https://www.facebook.com/"><TwitterIcon /></a>
                  <a href="https://www.facebook.com/"><LinkedinIcon /></a>
                  <a href="https://www.facebook.com/"><PinterestIcon /></a>
               </Left>
               <Center>
                  <Name>{selectUser.name}</Name>
                  <Box display="flex" alignItems="center" justifyContent="space-between">
                     <InfoLink href="#">
                        <LocationPinIcon />Poland
                     </InfoLink>
                     <InfoLink href="#">
                        <NetworkIcon />Tom.com
                     </InfoLink>
                  </Box>
                  <BtnBlue>Follow</BtnBlue>
               </Center>
               <Right>
                  <EmailIcon />
                  <DottsIcon />
               </Right>
            </UserInfo>
            <Posts />
         </ProfileContainer>
      </ProfileSection>
   )
}

export default Profile