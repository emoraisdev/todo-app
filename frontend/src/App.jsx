import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './template/Menu';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {

  return (
    <>
      <div className='container'>
        <BrowserRouter>
          <Menu />
          <AppRoutes />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
