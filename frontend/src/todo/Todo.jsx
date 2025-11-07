import { useEffect, useState } from "react";
import axios from 'axios';

import PageHeader from "../template/PageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const URL = 'http://localhost:3003/api/todos'

export default function Todo() {

    const [description, setDescription] = useState('')
    const [list, setlist] = useState([])

    useEffect(() => {
        refresh()
    }, [])

    function handleAdd() {
        axios.post(URL, { description })
            .then(() => {
                setDescription('')
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
            .then(resp => setlist(resp.data))
    }

    function handleSearch() {
        refresh(description)
    }

    function handleClear() {
        setDescription('')
        refresh()
    }

    return (
        <div>
            <PageHeader name="Tarefas" small="Cadastro" />
            <TodoForm
                description={description}
                setDescription={setDescription}
                handleAdd={handleAdd}
                handleSearch={handleSearch}
                handleClear={handleClear} />
            <TodoList
                list={list}
                handleDelete={handleDelete}
                handleChangeDone={handleChangeDone}
            />
        </div>
    )
}