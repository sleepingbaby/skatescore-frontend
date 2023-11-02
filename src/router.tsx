import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <div className="w-4/5 p-8 bg-white">Games</div>,
      },
      {
        path: "/g/:gameid/",
        element: <div>Game</div>,
      },
      {
        path: "/p/",
        element: <div>Players</div>,
      },
      {
        path: "/p/:playerid/",
        element: <div>Player</div>,
      },
      {
        path: "/l/",
        element: <div>Leaderboard</div>,
      },
    ],
  },
]);

export default router;
