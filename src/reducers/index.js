import { combineReducers } from "redux";

import { accountsReducer } from "./accounts";
import { sessionReducer } from "./session";
import { institutionsReducer } from "./institutions";
import { instrumentsReducer } from "./instruments";


export const rootReducer = combineReducers({
    accounts: accountsReducer,
    session: sessionReducer,
    institutions: institutionsReducer,
    instruments: instrumentsReducer
});
