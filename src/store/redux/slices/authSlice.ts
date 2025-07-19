import { createSelector, createSlice } from '@reduxjs/toolkit';

interface AuthState {
    isAuthenticated: boolean;
    //token: TokenInfo | null,
    //user: Partial<UserDetails> | null;
}

const initialState: AuthState = {
    isAuthenticated: true,
    // token: null,
    // user: null,
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: () => {
            return {
                isAuthenticated: true,
            };
        },
        logout: () => {
            return initialState;
        },
    },
});


export const selectUser = createSelector(
    state => state.auth,
    auth => auth.user
);

export const selectIsAuthenticated = createSelector(
    state => state.auth,
    auth => auth.isAuthenticated
);



export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
