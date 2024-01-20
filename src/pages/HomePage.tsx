import TheHeader from "../components/layout/TheHeader";
import PageSection from "../components/layout/PageSection";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import TextCta from "../components/TextCta";
import InfiniteText from "../components/InfiniteText";
function HomePage() {
  return (
    <div>
      <TheHeader />
      <PageSection sectionId="hero">
        <HeroSlider />
      </PageSection>
      <PageSection sectionId="description">
        <TextCta />
      </PageSection>
      <PageSection sectionId="about">
        <InfiniteText text="Low calories * No added sugar * Low calories * No added sugar"/>
      </PageSection>
    </div>
  );
}

export default HomePage;
