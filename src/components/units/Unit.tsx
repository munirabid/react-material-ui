import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/ActionCreators";
import { RootState } from "../../state/reducers/CombineReducers";
import { UnitType } from "./../../state/actions/UnitActions";

const Unit = () => {
  const dispatch = useDispatch();
  const { addUnitAction, deleteUnitAction } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const { Units, Amount } = useSelector((state: RootState) => state.unit);
  console.log("units", Units);
  const [units, setUnits] = useState<UnitType[]>(Units);

  const addUnitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newUnit: UnitType = {
      id: new Date().getMilliseconds().toString(),
      name: "test 2",
    };

    addUnitAction(newUnit);

    setUnits(Units);
  };

  return (
    <React.Fragment>
      <div>Unit Component</div>
      <button type="button" onClick={addUnitHandler}>
        Add
      </button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {units.map((unit, i) => {
            return (
              <tr key={unit.id}>
                <td>{unit.id}</td>
                <td>{unit.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Unit;
