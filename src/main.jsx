import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Layout/Root.jsx';
import Home from './Pages/Home.jsx';
import Users from './Pages/Users.jsx';
import Contact from './Pages/Contact.jsx';
import Update from './Pages/Update.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      { path: '/', element: <Home></Home> },
      {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch('http://localhost:3000/users'),
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/users/${params.id}`),
      },
      { path: '/contact', element: <Contact></Contact> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
