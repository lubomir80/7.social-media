import People from "../../assets/1.png"
import Groups from "../../assets/2.png"
import ShoppingBag from "../../assets/3.png"
import MoviePlay from "../../assets/4.png"
import Stopwatch from "../../assets/5.png"
import CalendarDay from "../../assets/6.png"
import GameController from "../../assets/7.png"
import Gallery from "../../assets/8.png"
import CameraVideo from "../../assets/9.png"
import EmailOutline from "../../assets/10.png"
import BuildingFactory from "../../assets/11.png"
import Balloon from "../../assets/12.png"
import Courses from "../../assets/13.png"


export const LeftbarMenu = [
   {
      id: "1",
      categry: "",
      links: [
         {
            icons: People,
            name: "Friend"
         },
         {
            icons: Groups,
            name: "Groups"
         },
         {
            icons: ShoppingBag,
            name: "Marketplace"
         },
         {
            icons: MoviePlay,
            name: "Watch"
         },
         {
            icons: Stopwatch,
            name: "Memories"
         }
      ]
   },
   {
      id: "2",
      categry: "Your shortcuts",
      links: [
         {
            icons: CalendarDay,
            name: "Events"
         },
         {
            icons: GameController,
            name: "Gaming"
         },
         {
            icons: Gallery,
            name: "Gallry"
         },
         {
            icons: CameraVideo,
            name: "Videos"
         },
         {
            icons: EmailOutline,
            name: "Message"
         },
      ]
   },
   {
      id: "3",
      categry: "Other",
      links: [
         {
            icons: BuildingFactory,
            name: "Fundraiser"
         },
         {
            icons: Balloon,
            name: "Tutorials"
         },
         {
            icons: Courses,
            name: "Courses"
         },
      ]
   },

]