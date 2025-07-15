import ReactDOM from "react-dom/client";
import AppLayout from "./App";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import About from "./components/About";
import Error from "./components/Error";
import Body from "./components/Body";
import RetaurantMenu from './components/RestaurantMenu'
// import Grocery from "./components/Grocery";
import { lazy, Suspense } from "react";

const Grocery = lazy(() => import('./components/Grocery'))
const About = lazy(() => import('./components/About'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/about',
        element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
      },
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/restaurants/:resId',
        element: <RetaurantMenu />
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
      }
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);