import {createStore, applyMiddleware, Middleware} from "redux"
import {StateWithHistory} from "redux-undo"
import thunk from "redux-thunk";
import rootReducer from "./reducers"
import {CellEnum} from "./constants"
import {saveStateInLocalStorage, logger} from "./middlewares"
import {loadState} from "./services/local-storage-service"

export interface RootState {
    cells: Array<CellEnum>,
    turn: CellEnum
}

export interface RootStateWithHistory extends StateWithHistory<RootState> {}

function configureStore(initialState?: RootStateWithHistory) {
    const middlewares: Array<Middleware> = [<Middleware>saveStateInLocalStorage, <Middleware>logger, thunk];
    return createStore<RootStateWithHistory>(
        rootReducer,
        initialState,
        applyMiddleware(...middlewares)
    );
}

export const store = configureStore(loadState());