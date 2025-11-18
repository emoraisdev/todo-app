import { createSlice } from "@reduxjs/toolkit";

const todoFormSlice = createSlice({
    name: "todoForm",
    initialState: { description: "" },
    reducers: {
        setDescription: (state, action) => {
            state.description = action.payload;
        },

    },
})

export const { setDescription } = todoFormSlice.actions
export default todoFormSlice.reducer