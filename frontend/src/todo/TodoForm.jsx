import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Grid from "../template/grid";
import IconButton from "../template/IconButton";

export default props => (
    <div role="form" className="todoForm">
        <div className="row g-3 align-items-center">
            <Grid cols="12 9 10">
                <input
                    id="description"
                    className="form-control"
                    placeholder="Adicione uma tarefa"
                    value={props.description}
                    onChange={e => props.setDescription(e.target.value)}

                />
            </Grid>

            <Grid cols="12 3 2">
                <IconButton style="primary w-100"
                    icon={faPlus}
                    onClick={props.handleAdd} />
            </Grid>
        </div>
    </div >
)