import HeroSection from './components/hero-section';
import SecureSection from './components/secure-section';
import { HomePageSections } from './components/dashboard-section';

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <SecureSection />
      <HomePageSections />
    </div>
  );
};

export default Home;
