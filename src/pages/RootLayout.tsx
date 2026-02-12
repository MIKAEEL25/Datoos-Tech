import { Footer, Navigation } from '@/components';
import ScrollToTop from '@/components/Route';
import { motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';

const RootLayout: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />

      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Outlet />
        <Navigation />
      </motion.div>
      <Footer />
    </>
  );
};

export default RootLayout;
