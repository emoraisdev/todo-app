import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import If from "./If"

export default props => (

    <If test={!props.hide}>
        <button className={"btn btn-" + props.style}
            onClick={props.onClick}>
            <FontAwesomeIcon icon={props.icon} />
            {props.name}
        </button>
    </If>
)