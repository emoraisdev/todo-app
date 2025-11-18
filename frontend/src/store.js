import { configureStore } from '@reduxjs/toolkit'
import todoListReducer from './todo/todoListSlice'
import todoFormReducer from './todo/todoFormSlice'

export const store = configureStore({
  reducer: {
    todoList: todoListReducer,
    todoForm: todoFormReducer
  },
})