
import Navigation from '../components/Navigation';
import EnhancedHero from '../components/EnhancedHero';
import EnhancedProductsSection from '../components/EnhancedProductsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import EnhancedFooter from '../components/EnhancedFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <EnhancedHero />
      <EnhancedProductsSection />
      <AboutSection />
      <ContactSection />
      <EnhancedFooter />
    </div>
  );
};

export default Index;
