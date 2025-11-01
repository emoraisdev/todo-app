import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default props => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="/todos">
                    <FontAwesomeIcon icon={faCalendarCheck} className="me-2" />
                    TodoApp
                </a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/todos">Tarefas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">Sobre</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}