import { createStore } from "redux";
import wfStates from "./reducers";
import Setters from "./actions";

const store = createStore(wfStates);

console.log("DEBUG::store", store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(Setters.SET_LANGUAGE(1));

unsubscribe();
