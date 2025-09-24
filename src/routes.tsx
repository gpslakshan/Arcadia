import { createBrowserRouter } from "react-router";
import HomeLayout from "./components/layout/HomeLayout";
import GameDetailsLayout from "./components/layout/GameDetailsLayout";
import GameDetails from "./features/game-details/GameDetails";
import Home from "./features/home/Home";

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
