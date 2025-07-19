import { createSelector, createSlice } from '@reduxjs/toolkit';

type Theme = "dark" | "light" | "system"

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        mode: 'system' as Theme, // Default theme mode
    },
    reducers: {
        setTheme: (state, action) => {
            return { ...state, mode: action.payload };
        },
    },
});

export const { setTheme } = themeSlice.actions;


export const selectTheme = createSelector(
    state => state.theme,
    theme => theme.mode
);

export default themeSlice.reducer;