import { type ReactNode } from 'react';
import Navbar from '../common/navbar';
import Footer, { TrustedBySection } from './footer.tsx';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <TrustedBySection />
      <Footer />
    </div>
  );
};

export default MainLayout;
