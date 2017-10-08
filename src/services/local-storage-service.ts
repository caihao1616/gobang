import {StateWithHistory} from "redux-undo"
import {RootStateWithHistory} from "../store";

const version = "1.0.0";
const STORAGE_KEY = `__SERIALIZED_STATE_TREE_v${version}__`;

export function saveState(storeState: RootStateWithHistory): boolean {
    if (!localStorage) {return false}

    try {
        const serializedState = JSON.stringify(storeState);
        localStorage.setItem(STORAGE_KEY, serializedState);
        return true;
    } catch (error) {
        throw new Error('store serialization failed');
    }
}

export function loadState() : RootStateWithHistory | undefined {
    if (!localStorage) { return; }

    try {
        const serializedState = localStorage.getItem(STORAGE_KEY);
        if(serializedState == null){ return; }
        return JSON.parse(serializedState)
    }
    catch (error) {
        throw new Error('store deserialization failed');
    }
}