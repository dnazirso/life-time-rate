import { useRoutes } from "react-router-dom";
import Login from "../Login";
import Today from "../Today";
import Weeks from "../Weeks";
import Years from "../Years";

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
  ]);
  return routes;
}
