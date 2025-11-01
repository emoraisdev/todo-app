export default props => (
    <header className="page-header">
        <h2>
            {props.name} <small className="fs-6 text-muted">{props.small}</small>
        </h2>
        <hr className="my-1 mb-3 border border-light-subtle opacity-50" />
    </header>
)