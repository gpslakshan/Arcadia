import { createBrowserRouter } from "react-router";

import Home from "./features/games/Home";
import GameDetails from "./features/games/GameDetails";
import HomeLayout from "./components/layout/HomeLayout";
import GameDetailsLayout from "./components/layout/GameDetailsLayout";

export const router = createBrowserRouter([
  {
    element: <HomeLayout />, // Home layout
    children: [
      {
        path: "/", // Home route
        element: <Home />,
      },
    ],
  },
  {
    element: <GameDetailsLayout />, // Game details layout
    children: [
      {
        path: "/game/:id", // Game details route
        element: <GameDetails />,
      },
    ],
  },
]);
