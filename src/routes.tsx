import { createBrowserRouter } from "react-router";

import GamesGrid from "./games/GamesGrid";
import GameDetails from "./games/GameDetails";
import HomeLayout from "./components/layout/HomeLayout";
import GameDetailsLayout from "./components/layout/GameDetailsLayout";

export const router = createBrowserRouter([
  {
    element: <HomeLayout />, // Home layout
    children: [
      {
        path: "/", // Home route
        element: <GamesGrid />,
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
