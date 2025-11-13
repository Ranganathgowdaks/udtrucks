import { createHashRouter } from "react-router-dom";
import Layout from "../components/Layout";
import DailyMenu from "../components/DailyMenu";
import DailyBV from "../components/DailyBV";
import DailyProdPage from "../components/DailyProdPage";
import ServerDetails from "../components/ServerDetails";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Oops! Something went wrong. Page not found.</div>,
    children: [
      // Main landing menu
      { index: true, element: <DailyMenu /> },

      // BV Servers page
      { path: "daily-bv", element: <DailyBV /> },

      // PROD Servers page
      { path: "daily-prod", element: <DailyProdPage /> },

      // Server details page
      { path: "server/:id", element: <ServerDetails /> },
    ],
  },
]);
