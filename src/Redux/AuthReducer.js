import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchLogIn} from "../API/AuthAPI";

const initialState = {
	userId: null,
	login: null,
	isAuthing: false,
	error: null
};

// export const incrementAsync = createAsyncThunk(
// 	'alfaBank/fetchCount',
// 	async (amount: number) => {
// 		const response = await fetchCount(amount);
// 		// The value we return becomes the `fulfilled` action payload
// 		return response.data;
// 	}
// );

export const tryLogInAsync = createAsyncThunk(
	'auth/tryLogIn',
	async ({login, password}) => {
		const response = await fetchLogIn(login, password);
		return response.data;
	}
);

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setAuthError: (state, action) => {
			state.error = action.payload;
		}
		// decrement: (state) => {
		// 	state.value -= 1;
		// },
		// incrementByAmount: (state, action) => {
		// 	state.value += action.payload;
		// }
	},
	extraReducers: (builder) => {
		builder
			.addCase(tryLogInAsync.pending, (state) => {
				state.isAuthing = true;
			})
			.addCase(tryLogInAsync.fulfilled, (state, action) => {
				state.isAuthing = false;
				if(action.payload.error === 0) {
					state.userId = action.payload.id;
					state.login = action.payload.login;
					state.error = null;
				}
				else {
					state.error = action.payload.errorMsg;
				}
			})
			.addCase(tryLogInAsync.rejected, (state) => {
				state.isAuthing = false;
				state.error = "Что-то пошло не так";
			});
	},
});

// actions
export const {setAuthError} = authSlice.actions;

// selectors
export const selectLogin = (state) => state.auth.login;
export const selectUserId = (state) => state.auth.userId;
export const selectIsAuthing = (state) => state.auth.isAuthing;
export const selectAuthError = (state) => state.auth.error;

export default authSlice.reducer;