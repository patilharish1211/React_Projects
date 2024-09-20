import { combineReducers, legacy_createStore } from "redux"
import { reducer as themeReducer } from "./Theme/Reducer";
import { reducer as counterReducer } from "./Counter/Reducer"

const rootReducer = combineReducers({themeReducer, counterReducer})
export const store = legacy_createStore(rootReducer);