import Home from "./components/Home";
import Unit from "./components/Unit";

// other
import { FC } from "react";

// interface
interface Route {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: FC<{}>;
}

export const routes: Array<Route> = [
  {
    key: "home-route",
    title: "Home",
    path: "/Home",
    enabled: true,
    component: Home,
  },
  {
    key: "unit-rout",
    title: "Unit",
    path: "/Unit",
    enabled: true,
    component: Unit,
  },
];

