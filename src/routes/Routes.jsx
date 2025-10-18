import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import CategoryNews from '../components/homelayout/CategoryNews';
import DetailsPageLayout from '../layouts/DetailsPageLayout';
import Login from '../layouts/Login';
import Register from '../components/Register';

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
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/news/:id',
    element: <DetailsPageLayout />,
    loader: async ({ params }) => {
      const res = await fetch('/news.json');
      const allNews = await res.json();
      const selectedNews = allNews.find(news => news.id === params.id);
      return selectedNews;
    },
  },
  {
    path: '*',
    element: <h2>Error 404</h2>,
  },
]);
export default router;
