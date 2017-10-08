import {AnyAction} from "redux"
import {ThunkAction} from "redux-thunk"
import {ActionCreators as UndoActionCreators} from "redux-undo"
import {CellEnum} from "../constants"

export enum ActionEnum {
    ADD_PIECE = 'ADD_PIECE',
    CLEAR_BOARD = 'CLEAR_BOARD'
}

export function addPiece(index: number, turn: CellEnum): AnyAction {
    return {type: ActionEnum.ADD_PIECE, index, turn};
}

export function clearBoard(): AnyAction {
    return {type: ActionEnum.CLEAR_BOARD};
}

export function restart() {
    return function(dispatch: Function) {
        dispatch(clearBoard());
        dispatch(UndoActionCreators.clearHistory());
    }
}



