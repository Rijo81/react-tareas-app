import './App.css';
import logo from'./img/logo.png';
//import Tareas from './components/Tareas';
import ListaTareas from './components/ListaTareas';

function App() {
  return (
    <div className='app-tareas'>
      <div className='logo-contenedor'>
        <img 
          src={ logo }
          className='logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
