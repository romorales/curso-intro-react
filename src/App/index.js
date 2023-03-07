import './App.css';
import React from 'react';
import { useState } from 'react';
import {AppUI} from './AppUI';

// const defaultTodos= [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Comenzar curso react', completed: true },
//   { text: 'Ir a entrenar', completed: false },
// ]

// Recibimos como parámetros el nombre y el estado inicial de nuestro item.
function useLocalStorage(itemName, initialValue) {
  // Creamos el estado inicial para nuestros errores y carga
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  // ¡Podemos utilizar otros hooks!
  const [item, setItem] = React.useState(initialValue);
  
  React.useEffect(() => { 
    // Simulamos un segundo de delay de carga 
    setTimeout(() => {
      // Manejamos la tarea dentro de un try/catch por si ocurre algún error
      try {
         // Guardamos nuestro item en una constante
         const localStorageItem = localStorage.getItem(itemName);
         let parsedItem;

         // Utilizamos la lógica que teníamos, pero ahora con las variables y parámentros nuevos
         if (!localStorageItem) {
           localStorage.setItem(itemName, JSON.stringify(initialValue));
           parsedItem = initialValue;
         } else {
           parsedItem = JSON.parse(localStorageItem);
         }
 
         setItem(parsedItem);
      } catch (error) {  
        // En caso de un error lo guardamos en el estado
        setError(error);
      } finally {
        // También podemos utilizar la última parte del try/cath (finally) para terminar la carga
        setLoading(false);
      }
     }, 1000);
  }, [])
 

  // Actualizamos la función para guardar nuestro item con las nuevas variables y parámetros
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch ( error ) {
      setError(error);
    }
  };
  
  // Para tener un mejor control de los datos retornados, podemos regresarlos dentro de un objeto
  return {  
    item,
    saveItem,
    loading,
    error
  };
}


function App() {
   // Desestructuramos los datos que retornamos de nuestro custom hook, y le pasamos los argume ntos que necesitamos (nombre y estado inicial)
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  }  = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  let searchedTodos = [];
  // todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
  let notFound = `No task with name: ${searchValue}`;

  if(!searchValue.length >= 1){
    searchedTodos = todos
  } 
  else {
    searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
  }

  // const saveTodos = (newTodos) => {
  //   const stringifyTodos = JSON.stringify(newTodos);
  //   localStorage.setItem('TODOS_V1', stringifyTodos);
  //   setTodos(newTodos);
  // }
 
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !todos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return(<AppUI
    loading={loading}
    error={error}
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    notFound={notFound}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}/>);
  }
export default App;
