
import Layout from '../components/Layout';
import HeroSection from '../components/home/HeroSection';
import IntroSection from '../components/home/IntroSection';
import HighlightsSection from '../components/home/HighlightsSection';
import TestimonialSection from '../components/home/TestimonialSection';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <HighlightsSection />
      <TestimonialSection />
      <CTASection />
    </Layout>
  );
};

export default Home;
