import { Footer, Navigation } from '@/components';
import { Outlet } from 'react-router-dom';

const RootLayout: React.FC = () => {
  return (
    <>
      <Outlet />
      <Navigation />
      <Footer />
    </>
  );
};

export default RootLayout;
