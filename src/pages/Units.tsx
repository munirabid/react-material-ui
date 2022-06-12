import React from "react";
import TabsRouter from "../routing/TabsRouter";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Routes, Route, Link, Outlet } from "react-router-dom";

import "./pages.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Units = () => {
  return (
    <React.Fragment>
      <TabsRouter />
      <Outlet />
    </React.Fragment>
  );
};

export default Units;
