import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { MainLayout } from "./Layouts/MainLayout";
// import Admin from "./Admin/Pages/admin";
import AdminLayout from "./Admin/components/AdminLayout/AdminLayout";
import Notices from "./Admin/Pages/Admin/Notices/Notices";
import Dashboard from "./Admin/Pages/Admin/Dashboard/Dashboard";
import Achievements from "./Admin/Pages/Admin/Achievements/Achievements";
import Events from "./Admin/Pages/Admin/Events/Events";
import LandingPagePic from "./Admin/Pages/Admin/LandingPagePic/LandingPagePic";
export const App = () => {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "noticess",
          element: <Notices />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "achievements",
          element: <Achievements />,
        },
        {
          path: "events",
          element: <Events />,
        },
        {
          path: "landingPagePicture",
          element: <LandingPagePic />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
