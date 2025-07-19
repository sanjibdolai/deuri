import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import UserLayout from "./layout/user/UserLayout";
import AboutPage from "./pages/user/AboutPage";
import AdminLayout from "./layout/admin/AdminLayout";
import DashboardPage from "./pages/admin/DashboardPage";
import HomePage from "./pages/user/HomePage";
import ContactPage from "./pages/user/ContactPage";
import ReservationPage from "./pages/user/ReservationPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: UserLayout,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "reservation",
        element: <ReservationPage />,
      }
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
