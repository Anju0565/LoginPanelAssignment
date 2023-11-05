import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from "redux";

import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducers";
import { registerReducer } from "./register/register.reducer";


const rootReducer = combineReducers({
    auth: authReducer,
    register: registerReducer
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
    rootReducer,
    createComposer(applyMiddleware(thunk))
);