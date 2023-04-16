import React from "react";
import ReactDOM from "react-dom/client";

import Root from "./routes/root";
import Resume from "./routes/resume";
import Blogs from "./routes/blogs";

import "./styles/styles.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/ntr";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogPage from "./routes/blogpage.jsx";
import { loader as blogLoader } from "./routes/blogpage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/blogs/",
    element: <Blogs />,
  },
  {
    path: "/blog/:slug",
    element: <BlogPage />,
    loader: blogLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
