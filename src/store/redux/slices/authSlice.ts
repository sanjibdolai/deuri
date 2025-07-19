import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User } from '@/types';

interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    loading: true,
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action: PayloadAction<User>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.isAuthenticated = false;
            state.user = null;
            state.loading = false;
            state.error = action.payload;
        },
        logout: () => initialState,
    },
});


// Export actions
export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;

// Base selector
const selectAuthState = (state: { auth: AuthState }) => state.auth;

// Memoized selectors for better performance
export const selectIsAuthenticated = createSelector(
    [selectAuthState],
    (auth) => auth.isAuthenticated
);

export const selectUser = createSelector(
    [selectAuthState],
    (auth) => auth.user
);

export const selectAuthLoading = createSelector(
    [selectAuthState],
    (auth) => auth.loading
);

export const selectAuthError = createSelector(
    [selectAuthState],
    (auth) => auth.error
);