import { combineReducers } from "redux";

import UnitReducer from "./UnitReducer";

const CombineReducers = combineReducers({
    unit: UnitReducer
})

export default CombineReducers;

export type RootState = ReturnType<typeof CombineReducers>