import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const options = {
    name: 'allRecipes',
    initialState: [],
    reducers: {
        loadRecipes: (state: any, action: any) => {
            return state = action.payload;
        }
    }
};

export const allRecipesSlice = createSlice(options);
export const { loadRecipes } = allRecipesSlice.actions;
export const selectAllRecipes = (state: RootState) => state.allRecipes;

export default allRecipesSlice.reducer;