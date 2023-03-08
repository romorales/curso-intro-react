import './App.css';
import {AppUI} from './AppUI';
import { TodoProvider } from '../TodoContext';

function App() {
  return(
    // Los componentes que consumen el contexto deben estar envueltos en la etiqueta proveedora.
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
  }
export default App;
