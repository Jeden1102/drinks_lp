import TheHeader from "../components/layout/TheHeader";
import TheFooter from "../components/layout/TheFooter";
import PageSection from "../components/layout/PageSection";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import TextCta from "../components/TextCta";
import InfiniteText from "../components/InfiniteText";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import Testimontals from "../components/Testimontals/Testimontals";
import Benefits from "../components/Benefits/Benefits";

function HomePage() {
  return (
    <div>
      <TheHeader />
      <PageSection sectionId="hero">
        <HeroSlider />
      </PageSection>
      <PageSection sectionId="features">
        <TextCta
          waved={true}
          headingText="Your Trusted Source for Delicious, Healthy Drinks."
          mainText="Discover the perfect balance of taste and nutrition with Juice Labs.
          Our selection of healthy drinks is sure to satisfy your thirst and
          nourish your body. From refreshing waters to energizing smoothies, we
          have something for everyone."
        />
      </PageSection>
      <PageSection sectionId="about">
        <div className="overflow-hidden bg-[#FFF6E0] pb-4">
          <InfiniteText
            text="Low calories * No added sugar * Low calories * No added sugar"
            variant={"primary"}
            rotate={"bottom"}
          />
          <InfiniteText
            text="Low calories * No added sugar * Low calories * No added sugar"
            variant={"secondary"}
            rotate={"top"}
          />
        </div>
      </PageSection>
      <PageSection sectionId="products">
        <ProductSlider />
      </PageSection>
      <PageSection sectionId="testimontals">
        <Testimontals />
      </PageSection>
      <PageSection sectionId="benefits">
        <Benefits />
      </PageSection>
      <TheFooter />
    </div>
  );
}

export default HomePage;
