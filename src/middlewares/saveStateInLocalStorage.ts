import {Store, Dispatch, AnyAction} from "redux";
import {RootStateWithHistory} from "../store";
import {saveState} from "../services/local-storage-service";

export const saveStateInLocalStorage =
    (store: Store<RootStateWithHistory>) =>
        (next: Dispatch<RootStateWithHistory>) =>
            (action: AnyAction) => {
                const returnValue = next(action);
                saveState(store.getState());
                return returnValue;
            }