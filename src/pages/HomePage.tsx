import TheHeader from "../components/layout/TheHeader";
import PageSection from "../components/layout/PageSection";
import HeroSlider from "../components/HeroSlider";
function HomePage() {
  return (
    <div>
      <TheHeader />
      <PageSection sectionId="hero">
        <HeroSlider/>
      </PageSection>
    </div>
  );
}

export default HomePage;
