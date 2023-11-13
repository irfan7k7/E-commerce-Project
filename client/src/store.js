import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
    user: userReducer.reducer,

})

const store = configureStore({
    reducer: rootReducer
})

export default store