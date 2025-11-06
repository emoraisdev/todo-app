import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
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
                <IconButton style="primary w-40 m-2"
                    icon={faPlus}
                    onClick={props.handleAdd} />
                <IconButton style="info w-40"
                    icon={faSearch}
                    onClick={props.handleSearch} />
            </Grid>
        </div>
    </div >
)