import React from "react";
import "./App.css";
import Paperbase from "./mui/Paperbase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./Router";

function App() {
  return (
    <div className="App">
      <Router>
        <Paperbase />
      </Router>
    </div>
  );
}

export default App;
