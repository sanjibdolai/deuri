import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import UserLayout from "./layout/user/UserLayout";
import AboutPage from "./pages/user/AboutPage";
import DashboardPage from "./pages/admin/DashboardPage";
import HomePage from "./pages/user/HomePage";
import ContactPage from "./pages/user/ContactPage";
import ReservationPage from "./pages/user/ReservationPage";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import BookingListPage from "./pages/admin/BookingListPage";
import UserListPage from "./pages/admin/UserListPage";

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
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "bookings",
        element: <BookingListPage />
      },
      {
        path: "users",
        element: <UserListPage />
      }
    ],
  },
  {
    path: "admin/login",
    element: <AdminLoginPage />,
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
