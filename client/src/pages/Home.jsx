import { Fragment } from "react"
import { Hero, Podcasts, TopIntro, TodaysQuiz, OurStory, Infography, TrendingVideos, CampusPartners, DisorderTags, OurTeam } from "../components"
import TodayEssentials from "@/components/homeComponents/TodayEssentials";

const Home = () => {
  return (
    <Fragment>
      <TopIntro />
      <DisorderTags></DisorderTags>
      <Hero></Hero>
      <OurStory></OurStory>
      <Infography></Infography>
      <TodayEssentials></TodayEssentials>
      <TodaysQuiz></TodaysQuiz>
      <TrendingVideos></TrendingVideos>
      <Podcasts />
      <CampusPartners />
      <OurTeam></OurTeam>
    </Fragment>
  )
}
export default Home;