import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/home/Home';
import Statistic from './components/statistic/Statistic';
import Blog from './components/blog/Blog';
import About from './components/aboutUs/About';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, children: [
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/statistic',
          element: <Statistic></Statistic>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
    {
      path: '*', element: <div>This route not found:404</div>
    }

  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
