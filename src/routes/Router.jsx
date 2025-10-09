import { createHashRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Dailyprod from "../components/Dailyprod";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Oops! Something went wrong. Page not found.</div>,
    children: [{ index: true, element: <Dailyprod /> }],
  },
]);
