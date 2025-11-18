import { faCheck, faTrashAlt, faUndo } from "@fortawesome/free-solid-svg-icons"
import IconButton from "../template/IconButton"
import { useSelector } from "react-redux"

const timeZone = "America/Sao_Paulo"
const ptBr = "pt-BR"

export default props => {

    const todoList = useSelector(state => state.todoList)


    function dateToString(isoDate) {
        const d = new Date(isoDate);
        const data = d.toLocaleDateString(ptBr, { timeZone });
        const hora = d.toLocaleTimeString(ptBr, { timeZone });
        return `${data} ${hora}`;
    }

    function renderRows() {

        const list = todoList || []

        return list.map(item => (
            <tr key={item._id}>
                <td>{item.description}</td>
                <td>
                    <span
                        className={`px-2 py-1 rounded ${item.done ?
                            'bg-success text-white' : 'bg-warning text-dark'}`}
                    >
                        {item.done ? 'Concluído' : 'Pendente'}
                    </span>
                </td>
                <td>{dateToString(item.createdAt)}</td>
                <td>
                    <IconButton style="success w-40 m-1"
                        hide={item.done}
                        icon={faCheck}
                        onClick={() => props.handleChangeDone(item._id, true)} />
                    <IconButton style="warning w-40 m-1"
                        hide={!item.done}
                        icon={faUndo}
                        onClick={() => props.handleChangeDone(item._id, false)} />
                    <IconButton style="danger w-40 m-1"
                        icon={faTrashAlt}
                        onClick={() => props.handleDelete(item._id)} />
                </td>
            </tr>
        ))
    }

    return (
        <table className="table mt-4">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Status</th>
                    <th>Data</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>

        </table>
    )
}