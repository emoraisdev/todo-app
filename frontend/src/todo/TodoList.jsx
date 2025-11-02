import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import IconButton from "../template/IconButton"

const timeZone = "America/Sao_Paulo"
const ptBr = "pt-BR"

export default props => {

    function dateToString(isoDate) {
        const d = new Date(isoDate);
        const data = d.toLocaleDateString(ptBr, { timeZone });
        const hora = d.toLocaleTimeString(ptBr, { timeZone });
        return `${data} ${hora}`;
    }

    function renderRows() {

        const list = props.list || []

        return list.map(item => (
            <tr key={item._id}>
                <td>{item.description}</td>
                <td>{item.done ? 'Concluído' : 'Pendente'}</td>
                <td>{dateToString(item.createdAt)}</td>
                <td><IconButton style="danger w-40"
                    icon={faTrashAlt}
                    onClick={() => props.handleDelete(item._id)} /></td>
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