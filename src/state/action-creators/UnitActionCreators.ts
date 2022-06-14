
import { Dispatch } from 'redux';
import { UnitActionType } from '../action-types/UnitActionTypes';
import { Action, UnitType } from './../actions/UnitActions';

export const addUnitAction = (unit:UnitType)=>{
    return (dispatch: Dispatch<Action>) =>{
        dispatch({
            type:UnitActionType.ADD,
            payload:unit
        })
    }
}

export const deleteUnitAction = (id:string)=>{
    return (dispatch: Dispatch<Action>) =>{
        dispatch({
            type:UnitActionType.DELETE,
            payload:id
        })
    }
}