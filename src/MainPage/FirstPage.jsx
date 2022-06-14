import { Header } from "./Header";
import { MainSection } from "./MainSection";
import { AboutSection } from "./AboutSection";
import { BenefitsSection } from "./BeneSection";
import { AppSection } from "./AppSection";
import { Footer } from "./Footer";

export const FirstPage = () => {
  return (
    <>
      <Header />
      <MainSection />
      <AboutSection />
      <BenefitsSection />
      <AppSection />
      <Footer />
    </>
  );
};

export default FirstPage
