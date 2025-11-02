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
            .then(resp => {
                setDescription('')
                refresh()
            })
    }

    function handleDelete(id) {
        axios.delete(`${URL}/${id}`)
            .then(resp => {
                refresh()
            })
    }


    function refresh() {
        axios.get(URL)
            .then(resp => setlist(resp.data))
    }

    return (
        <div>
            <PageHeader name="Tarefas" small="Cadastro" />
            <TodoForm
                description={description}
                setDescription={setDescription}
                handleAdd={handleAdd} />
            <TodoList
                list={list}
                handleDelete={handleDelete}
            />
        </div>
    )
}