import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";

import {
  MemoryRouter,
  Route,
  Routes,
  Link,
  matchPath,
  useLocation,
} from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import QuantityTypes from "../components/units/QuantityTypes";
import Unit from "./../components/units/Unit";
import Properties from "./../components/units/Properties";

function Router(props: { children?: React.ReactNode }) {
  const { children } = props;
  if (typeof window === "undefined") {
    return <StaticRouter location="/drafts">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={["/drafts"]} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function MyTabs() {
  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routeMatch = useRouteMatch([
    "/units",
    "units/quantitytypes",
    "units/unit",
    "units/properties",
  ]);
  const currentTab = routeMatch?.pattern?.path;
  console.log("currentTab", currentTab);

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: "green" }}>
      <Tabs
        value={currentTab === "/units" ? "units/quantitytypes" : currentTab}
      >
        <Tab
          label="Quantity Type"
          value="units/quantitytypes"
          to="/units/quantitytypes"
          component={Link}
        />
        <Tab
          label="Unit"
          value="units/unit"
          to="/units/unit"
          component={Link}
        />
        <Tab
          label="Properties"
          value="units/properties"
          to="/units/properties"
          component={Link}
        />
      </Tabs>
    </AppBar>
  );
}

export default function TabsRouter() {
  const { pathname: path } = useLocation();
  console.log("nested route", path);
  return (
    <Box sx={{ width: "100%" }}>
      <MyTabs />
    </Box>
  );
}
