import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import Studios from './pages/Studios';
import Offer from './pages/Offer';
import Casting from './pages/Casting';
import Contact from './pages/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: 'studios', element: <Studios /> },
        { path: 'offer', element: <Offer /> },
        { path: 'contact', element: <Contact /> },
        { path: 'casting', element: <Casting /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
