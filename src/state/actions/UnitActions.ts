import { UnitActionType } from "../action-types/UnitActionTypes";

export interface UnitType{
    id:string,
    name:string
}

export interface Units{
    Units: UnitType[],
    Amount:number
}

interface ADD_UNIT {
    type: UnitActionType.ADD,
    payload: UnitType
}

interface DELETE_UNIT {
    type: UnitActionType.DELETE,
    payload: string
}

export type Action = ADD_UNIT | DELETE_UNIT;