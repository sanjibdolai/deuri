import { combineReducers } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
export const reducers = combineReducers({
  theme: themeSlice
});

// Export the root reducer
export default reducers;

// Define and export the RootState type
export type GlobalState = ReturnType<typeof reducers>;
