import { useRoutes } from "react-router-dom";
import Login from "../Login";
import Today from "../Today";
import Weeks from "../Weeks";
import Years from "../Years";
import Profile from "../Profile"

export default function Routes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/years",
      element: <Years />,
    },
    {
      path: "/weeks",
      element: <Weeks />,
    },
    {
      path: "/today",
      element: <Today />,
    },
    {
      path: "/profile",
      element: <Login />,
    },
  ]);
  return routes;
}
