import { Navigate, Route, Routes } from "react-router-dom";
import About from "./about/About";
import Todo from "./todo/Todo";

export default props => (

    <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
        <Routes>
            <Route path="/todos" element={<Todo />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/todos" />} />
        </Routes>
    </div>
)