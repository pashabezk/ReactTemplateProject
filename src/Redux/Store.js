import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "./AuthReducer"

const store = configureStore({
	reducer: combineReducers({
		auth: authReducer,
		// alfaBank: alfaBankReducer
	})
});

export default store;