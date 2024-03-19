import ReactDom from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Components/Common/Error";
import Gallery from "./Pages/Gallery";
import About from "./Pages/About";
import Academics from "./Pages/Academics";
import App from "./App";
import Contact from "./Pages/Contact";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Gallery />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/academics",
        element: <Academics />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "public/logo.png",
      }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)