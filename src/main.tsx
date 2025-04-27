import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home.tsx";
import Board from "@/pages/board/";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/board", element: <Board /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
