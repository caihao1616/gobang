import {ActionEnum} from "../actions";
import {AnyAction} from "redux";
import {CellEnum, PANEL_SIZE} from "../constants"

export function getInitialCells(): Array<CellEnum> {
    const initialCells: Array<CellEnum> = [];
    for(let i=0; i<Math.pow(PANEL_SIZE, 2); i++){
        initialCells.push(CellEnum.Blank);
    }
    return initialCells;
}

const cells = (state: Array<CellEnum> = getInitialCells(), action: AnyAction) : Array<CellEnum> => {
    switch(action.type) {
        case ActionEnum.ADD_PIECE:
            return state.map((cell : CellEnum, index : number) => {
                if(index === action.index){
                    return action.turn;
                }
                return cell;
            });
        case ActionEnum.CLEAR_BOARD:
            return state.map (
                () => (CellEnum.Blank)
            )
        default:
            return state;
    }
}

export default cells;