import TheHeader from "../components/layout/TheHeader";
import PageSection from "../components/layout/PageSection";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import TextCta from "../components/TextCta";
function HomePage() {
  return (
    <div>
      <TheHeader />
      <PageSection sectionId="hero">
        <HeroSlider/>
      </PageSection>
      <PageSection sectionId="description">
        <TextCta/>
      </PageSection>
    </div>
  );
}

export default HomePage;
