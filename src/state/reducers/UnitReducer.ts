import { UnitActionType } from "../action-types/UnitActionTypes";
import { Units } from "../actions/UnitActions";
import { Action } from "../actions/UnitActions";

const UnitsInitialState : Units = {
    Units:[{
        id:new Date().getTime().toString(),
        name:"Test"
    }],
    Amount:10
}

const UnitReducer = (state:Units = UnitsInitialState, action: Action)=>{
    switch (action.type){
        case UnitActionType.ADD:
            console.log("payload", action.payload);
            console.log("redux units", state.Units);
            return {
                ...state,
                    ...state.Units.concat(action.payload)
            };

        case UnitActionType.DELETE:
            return {
                ...state,
                ...state.Units.filter(u => u.id !== action.payload)
            }
        default: 
            return state
    }
}

export default UnitReducer;