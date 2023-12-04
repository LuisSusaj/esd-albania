import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/Landing";
import { hero } from "../assets/index";
import AboutUs from "../components/sections/AboutUs";
import VideoShowCase from "../components/sections/VideoShowCase";

export default function Home() {
  return (
    <LandingLayout>
      <Hero
        title="hero_title"
        subtitle="hero_text"
        image={hero}
        ctaText="hero_btn"
      />
      <AboutUs />
      <VideoShowCase />
    </LandingLayout>
  );
}
