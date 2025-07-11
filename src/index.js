import ReactDOM from "react-dom/client";
import AppLayout from "./App";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from "./components/About";
import Error from "./components/Error";
import Body from "./components/Body";
import RetaurantMenu from './components/RestaurantMenu'


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/restaurants/:resId',
        element: <RetaurantMenu />
      }
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);