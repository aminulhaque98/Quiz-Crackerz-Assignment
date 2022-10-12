import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/home/Home';
import Statistic from './components/statistic/Statistic';
import Blog from './components/blog/Blog';
import About from './components/aboutUs/About';
import Quiz from './components/quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },

        {
          path: '/home/:homeId',
          loader: async ({ params }) => {
            // console.log(params.homeId)
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.homeId}`)
          },
          element: <Quiz></Quiz>
        },

        {
          path: '/statistic',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
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
      path: '*', element: <div className='text-xl mt-96 text-center'>This route not found:404</div>
    }

  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
