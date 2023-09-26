import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface UserState {
    isLoading: boolean,
    isLogin: boolean,
}

const initialState: UserState = {
    isLoading: false,
    isLogin: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        attemptLogin: (state) => {
            state.isLoading = true;
        },
        attemptLoginSuccess: (state) => {
            state.isLoading = false;
            state.isLogin = true;
        },
        attemptLoginFailed: (state) => {
            state.isLoading = false;
            state.isLogin = false;
        },
        attemptLoginClearState: (state) => {
            state.isLoading = false;
            state.isLogin = false;
        }
    }
})

export const {
    attemptLogin,
    attemptLoginSuccess,
    attemptLoginFailed,
    attemptLoginClearState,
} = userSlice.actions;

export default userSlice.reducer;
