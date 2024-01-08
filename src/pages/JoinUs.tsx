import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/Landing";
import { joinUsBanner } from "../assets/index";
import SummerCamp from "../components/sections/SummerCamp";
import Collaborators from "../components/sections/Collaborators";

export default function Home() {
  return (
    <>
      <Hero image={joinUsBanner} width={'max-content'}/>
      <LandingLayout>
        <SummerCamp />
      </LandingLayout>
      <LandingLayout>
        <Collaborators />
      </LandingLayout>
    </>
  );
}
