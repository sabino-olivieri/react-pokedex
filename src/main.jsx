import React from 'react'; 
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutPage from './pages/LayoutPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Card from './components/Card.jsx';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "./style/general.scss";
import ListPokemon from './components/ListPokemon.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage></LayoutPage>, // quale component mandare
    children: [
      {
        path: "*",    // da provare
        element: <ErrorPage />,
      },
      {
        path: "/card",
        element: <Card />,
      },
      {
        path: "/",
        element: <ListPokemon/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
