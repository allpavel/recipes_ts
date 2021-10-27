import { configureStore } from "@reduxjs/toolkit";
import allRecipesReducer from "../features/allRecipes/allRecipesSlice";

export const store = configureStore({
    reducer: {
        allRecipes: allRecipesReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;