import { ProviderType } from "../../types/propstypes";

const PageSection = ({ children, sectionId }: ProviderType) => {
  return <section id={sectionId}>{children}</section>;
};

export default PageSection;
