import { createBrowserRouter } from "react-router";
import HomeLayout from "./layouts/HomeLayout";
import GameDetailsLayout from "./layouts/GameDetailsLayout";
import GameDetails from "./pages/GameDetails";
import Home from "./pages/Home";

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
