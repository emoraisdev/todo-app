import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
    name: "todoList",
    initialState: [],
    reducers: {
        remove: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },
        add: (state, action) => {
            state.push(action.payload);
        },
        addAll: (state, action) => {
            return action.payload;
        }
    },
})

export const { addAll } = todoListSlice.actions
export default todoListSlice.reducer