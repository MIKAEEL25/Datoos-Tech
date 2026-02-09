import { Footer } from '@/components';
import { Outlet } from 'react-router-dom';

const RootLayout: React.FC = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
