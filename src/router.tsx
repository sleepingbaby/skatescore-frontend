import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Games />,
      },
      {
        path: "/g/:gameid/",
        element: <Game />,
      },
      {
        path: "/p/",
        element: <Players />,
      },
      {
        path: "/p/:playerid/",
        element: <Player />,
      },
      {
        path: "/l/",
        element: <Leaderboard />,
      },
    ],
  },
]);

export default router;
