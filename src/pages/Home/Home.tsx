import { HomeSection } from "./Home.styled"
import Stories from '../../components/Stories/Stories'
import Posts from '../../components/Posts/Posts'

function Home() {
   return (
      <HomeSection>
         {/* <Stories /> */}
         <Posts />
      </HomeSection>
   )
}

export default Home