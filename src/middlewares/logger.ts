import {Dispatch, Store, AnyAction} from "redux";
import {RootStateWithHistory} from "../store"

export const logger =
    (store: Store<RootStateWithHistory>) =>
        (next: Dispatch<Store<RootStateWithHistory>>) =>
            (action: AnyAction) => {
                console.group(action.type)
                console.info('dispatching', action)
                let returnValue = next(action)
                console.log('next state', store.getState())
                console.groupEnd()
                return returnValue
            }