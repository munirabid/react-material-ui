import { Routes, Route } from "react-router-dom";
import Home from "./../pages/Home";
import Functional from "./../pages/Functional";
import Logical from "./../pages/Logical";
import Physical from "./../pages/Physical";
import Trees from "./../pages/Trees";
import Allocations from "./../pages/Allocations";
import Communality from "./../pages/Communality";
import Units from "./../pages/Units";
import ItemFlow from "./../pages/ItemFlow";
import Dashboard from "./../pages/Dashboard";
import Unit from "./../components/units/Unit";
import QuantityTypes from "../components/units/QuantityTypes";
import Properties from "../components/units/Properties";

const BaseRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/functional" element={<Functional />} />
      <Route path="/logical" element={<Logical />} />
      <Route path="/physical" element={<Physical />} />
      <Route path="/trees" element={<Trees />} />
      <Route path="/allocations" element={<Allocations />} />
      <Route path="/communality" element={<Communality />} />
      <Route path="/units" element={<Units />}>
        <Route index element={<QuantityTypes />}></Route>
        <Route path="unit" element={<Unit />} />
        <Route path="quantitytypes" element={<QuantityTypes />} />
        <Route path="properties" element={<Properties />} />
      </Route>
      <Route path="/itemflow" element={<ItemFlow />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default BaseRouter;
