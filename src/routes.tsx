import { createBrowserRouter } from "react-router";

import HomePage from "./pages/HomePage";
import AppLayout from "./components/layout/AppLayout";
import GameDetailsPage from "./pages/GameDetailsPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />, // Home layout
    children: [
      {
        path: "/", // Home route
        element: <HomePage />,
      },
      {
        path: "/games/:slug", // Game Details route
        element: <GameDetailsPage />,
      },
    ],
  },
]);
