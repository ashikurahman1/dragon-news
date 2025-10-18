import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import CategoryNews from '../components/homelayout/CategoryNews';
import DetailsPageLayout from '../layouts/DetailsPageLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AuthLayout from '../layouts/AuthLayout';
import UnderConstruction from '../pages/UnderConstruction';
import ErrorPage from '../pages/ErrorPage';
import PrivateRoutes from './PrivateRoutes';
import Loading from '../pages/Loading';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/category/:id',
        element: <CategoryNews />,
        loader: () => fetch('/news.json'),
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/login',
        element: <Login />,
      },
      {
        path: '/auth/register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/about',
    element: <UnderConstruction />,
  },
  {
    path: '/career',
    element: <UnderConstruction />,
  },
  {
    path: '/news/:id',
    element: (
      <PrivateRoutes>
        <DetailsPageLayout />
      </PrivateRoutes>
    ),
    loader: async ({ params }) => {
      const res = await fetch('/news.json');
      const allNews = await res.json();
      const selectedNews = allNews.find(news => news.id === params.id);
      return selectedNews;
    },
    hydrateFallbackElement: <Loading />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);
export default router;
