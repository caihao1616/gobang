import {combineReducers} from "redux";
import undoable, {includeAction} from "redux-undo";
import cells from "./cells";
import turn from "./turn";
import {ActionEnum} from "../actions"
import {RootState} from "../store"

const rootReducer = combineReducers<RootState>({
    cells,
    turn
});

export default undoable(rootReducer, { filter: includeAction(ActionEnum.ADD_PIECE) });