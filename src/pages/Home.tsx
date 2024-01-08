import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/Landing";
import { hero } from "../assets/index";
import AboutUs from "../components/sections/AboutUs";
import VideoShowCase from "../components/sections/VideoShowCase";
import Collaborators from "../components/sections/Collaborators";
import Invitation from "../components/sections/Invitation";

export default function Home() {
  return (
    <>
      <Hero image={hero} width={'100%'}/>
      <LandingLayout>
        <AboutUs />
      </LandingLayout>
      <VideoShowCase />
      <LandingLayout>
        <Invitation />
        <Collaborators />
      </LandingLayout>
    </>
  );
}
