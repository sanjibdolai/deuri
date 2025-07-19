import { combineReducers } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import authSlice from "./slices/authSlice";
export const reducers = combineReducers({
  theme: themeSlice,
  auth: authSlice
});

// Export the root reducer
export default reducers;

// Define and export the RootState type
export type GlobalState = ReturnType<typeof reducers>;
