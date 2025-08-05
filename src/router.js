import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Tours from "./pages/Tours/Tours";
import TourDetails from "./pages/Tours/TourDetails";
import Booking from "./pages/Booking/Booking";
import Destinations from "./pages/Destinations/Destinations";
import PhotoGallery from "./pages/PhotoGallery/PhotoGallery";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "about-us", element: <About /> },
        { path: "contact-us", element: <Contact /> },
        { path: "tours", element: <Tours /> },
        { path: "tour-details", element: <TourDetails /> },
        { path: "booking", element: <Booking /> },
        { path: "destinations", element: <Destinations /> },
        { path: "gallery", element: <PhotoGallery /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true, // Only this flag is needed
    },
  }
);

export default router;