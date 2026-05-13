import { useState } from "react";
import FayntrixPreloader from "./Components/FayntrixPreloader";
import { p } from "framer-motion/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import Services from "./Pages/Services/Services";
import { Toaster } from 'react-hot-toast';
import CategoryGallery from "./Pages/CategoryGallery/CategoryGallery";
import NotFound from './Pages/NotFound/NotFound';

function App() {
  const [appReady, setAppReady] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/", element: <Layout />, children: [{ index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "/:category", element: <CategoryGallery /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound/> }
      ]
    }
  ]);
  return (
    <div>
      {!appReady && (
        <FayntrixPreloader onComplete={() => setAppReady(true)} />
      )}

      {appReady && (
        <div>
          <Toaster
            position="top-right"
            containerStyle={{ zIndex: 9999 }}
            toastOptions={{
              style: {
                background: "#0a0a08",
                color: "#fff",
                border: "1px solid rgba(200,134,10,0.3)",
                fontSize: "12px",
                letterSpacing: "0.1em",
              },
              success: {
                iconTheme: {
                  primary: "#c8860a",
                  secondary: "#000",
                },
              },
              error: {
                iconTheme: {
                  primary: "#ff4d4f",
                  secondary: "#000",
                },
              },
            }}
          />
          <RouterProvider router={router} />
        </div>
      )}
    </div>
  );
}

export default App;