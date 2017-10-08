import {ActionEnum} from "../actions";
import {CellEnum, FIRST_TURN} from "../constants";
import {AnyAction} from "redux";

const turn = (state: CellEnum = FIRST_TURN, action: AnyAction) : CellEnum => {
    switch(action.type) {
        case ActionEnum.ADD_PIECE:
            return (state === CellEnum.Black) ? CellEnum.White : CellEnum.Black;
        case ActionEnum.CLEAR_BOARD:
            return FIRST_TURN
        default:
            return state;
    }
}

export default turn;