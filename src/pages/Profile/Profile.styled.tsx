import styled from "styled-components";
import { FacebookCircle } from "@styled-icons/boxicons-logos/FacebookCircle"
import { Instagram } from "@styled-icons/bootstrap/Instagram";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Pinterest } from "@styled-icons/boxicons-logos/Pinterest"
import { LocationPin } from "@styled-icons/entypo/LocationPin"
import { Network } from "@styled-icons/zondicons/Network"
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline"
import { MoreVerticalOutline } from "@styled-icons/evaicons-outline/MoreVerticalOutline"

export const ProfileSection = styled.section`
   position: relative;
   height: 200vh;
`

export const ProfileImagesBox = styled.div`
   margin-bottom: ${p => p.theme.space[2]}px;
`

export const BackgroundPic = styled.img`
   width: 100%;
   height: 300px;
   object-fit: cover;
`
export const ProfilePic = styled.img`
   position: absolute;
   left: 0;
   right: 0;
   top: 150px;
   margin: auto;
   border-radius: 50%;
   width: 250px;
   height: 250px;
   object-fit: cover;
`

export const ProfileContainer = styled.div`
   padding: 0 ${p => p.theme.space[2]}px;
`

export const UserInfo = styled.div`
   margin-bottom: ${p => p.theme.space[2]}px;
   padding: ${p => p.theme.space[3] * 1.8}px ${p => p.theme.space[2]}px;
   background-color: ${p => p.theme.element};
   box-shadow: ${p => p.theme.boxShadow};
   border-radius: ${p => p.theme.borderRadius[1]}px;
   display: flex;
   align-items: center;
   gap:${p => p.theme.space[3]}px;
`


export const Left = styled.div`
   flex: 1;
   justify-content: center;
   display: flex;
   align-items: center;
   gap: 8px;
   flex-wrap: wrap;

   & svg{
      color: ${p => p.theme.colors.greyDark};
   }
   & svg:hover {
      color: ${p => p.theme.colors.blue};
   }
`

export const FacebookIcon = styled(FacebookCircle)`
   width: 40px;
   height: 40px;   
`
export const InstagramIcon = styled(Instagram)`
   width: 30px;
   height: 30px;
`
export const TwitterIcon = styled(Twitter)`
   width: 40px;
   height: 40px;
`
export const LinkedinIcon = styled(LinkedinSquare)`
   width: 40px;
   height: 40px;
`
export const PinterestIcon = styled(Pinterest)`
   width: 40px;
   height: 40px;
`



export const Center = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   gap: ${p => p.theme.space[2]}px;;
`
export const Name = styled.h2`
   text-align: center;
   font-size: 30px;
`
export const InfoLink = styled.a`
   display: flex;
   align-items: center;
   gap: 2px;
   color: ${p => p.theme.title};
   text-decoration: none;

   & svg{
      color: inherit;
   }
`

export const FollowBtn = styled.div`
   cursor: pointer;
   max-width: 50px;
   margin: auto;
   padding: ${p => p.theme.space[1]}px;
   background-color: ${p => p.theme.colors.blue};
   color: ${p => p.theme.colors.white};
   border: 0;
`
export const LocationPinIcon = styled(LocationPin)`
   width: 20px;
   height: 20px;
`
export const NetworkIcon = styled(Network)`
   width: 20px;
   height: 20px;
`

export const Right = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: end;
`


export const EmailIcon = styled(EmailOutline)`
   width: 20px;
   height: 20px;
`
export const DottsIcon = styled(MoreVerticalOutline)`
   width: 20px;
   height: 20px;
`



