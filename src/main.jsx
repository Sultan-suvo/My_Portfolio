import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Skills from './Components/Skills/Skills.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/skills",
    element: <Skills></Skills>,
  },
  {
    path: "/project",
    element: <Projects></Projects>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<div>
<React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
</div>
)
