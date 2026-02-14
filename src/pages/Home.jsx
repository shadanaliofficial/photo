import Hero from "../components/sections/hero";
import DoorReveal from "../components/sections/DoorReveal";
import PortfolioPreview from "../components/sections/PortfolioPreview";
import VideoHomepage from "../components/sections/Videohomepage";
import WeddingFilms from "../components/sections/WeddingFilms";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";


export default function Home() {
  return (
    <>
      <Hero />
      <DoorReveal />
      <PortfolioPreview />
      <VideoHomepage />
      <WeddingFilms />
      <Services />
      <Testimonials />

    </>
  );
}
