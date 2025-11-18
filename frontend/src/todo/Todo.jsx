import { useEffect, useState } from "react";
import axios from 'axios';

import PageHeader from "../template/PageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import { addAll } from "./todoListSlice";
import { setDescription } from "./todoFormSlice";

const URL = 'http://localhost:3003/api/todos'

export default function Todo() {

    const { description } = useSelector(state => state.todoForm);
    const dispatch = useDispatch()


    useEffect(() => {
        refresh()
    }, [])

    function handleAdd() {
        axios.post(URL, { description })
            .then(() => {
                dispatch(setDescription(''))
                refresh()
            })
    }

    function handleDelete(id) {
        axios.delete(`${URL}/${id}`)
            .then(() => {
                refresh(description)
            })
    }


    function handleChangeDone(id, isDone) {
        axios.patch(`${URL}/${id}/done/${isDone}`)
            .then(() => {
                refresh(description)
            })
    }

    function refresh(descriptionFilter = '') {
        const filter = descriptionFilter ? `?description=${descriptionFilter}` : ''

        axios.get(`${URL}${filter}`)
            .then(resp => dispatch(addAll(resp.data)))
    }

    function handleSearch() {
        refresh(description)
    }

    function handleClear() {
        dispatch(setDescription(''))
        refresh()
    }

    return (
        <div>
            <PageHeader name="Tarefas" small="Cadastro" />
            <TodoForm
                handleAdd={handleAdd}
                handleSearch={handleSearch}
                handleClear={handleClear} />
            <TodoList
                handleDelete={handleDelete}
                handleChangeDone={handleChangeDone}
            />
        </div>
    )
}