import { createBrowserRouter } from "react-router";

import HomePage from "./pages/HomePage";
import GameDetailsPage from "./pages/GameDetailsPage";
import HomeLayout from "./components/layout/HomeLayout";
import GameDetailsLayout from "./components/layout/GameDetailsLayout";

export const router = createBrowserRouter([
  {
    element: <HomeLayout />, // Home layout
    children: [
      {
        path: "/", // Home route
        element: <HomePage />,
      },
    ],
  },
  {
    element: <GameDetailsLayout />, // Game details layout
    children: [
      {
        path: "/game/:id", // Game details route
        element: <GameDetailsPage />,
      },
    ],
  },
]);
