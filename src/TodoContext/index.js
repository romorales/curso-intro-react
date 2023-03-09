import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { useState } from 'react';

// Al crear el contexto también podemos pasarle un valor inicial entre los paréntesis
const TodoContext = React.createContext();

function TodoProvider(props){
    // Desestructuramos los datos que retornamos de nuestro custom hook, y le pasamos los argume ntos que necesitamos (nombre y estado inicial)
    // Nos traemos todo el estado y las funciones de nuestra aplicación que queremos globales
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    }  = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    let searchedTodos = [];
    //todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
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

     // Función para añadir un nuevo TODO
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
        completed: false,
        text,
        });
        saveTodos(newTodos);
    };

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

    //   Retornamos nuestro proveedor con nuestro contexto en la etiqueta value, 
    //   que recibirá a toda nuestra aplicación,
    //   por eso necesitamos la prop children
    return (
    <TodoContext.Provider value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        notFound,
        completeTodo,
        deleteTodo,
        openModal, 
        setOpenModal,
        addTodo
    }}>
        {props.children}
    </TodoContext.Provider>
    );
}

// Exportamos nuestro proveedor y nuestro contexto, en el context también esta el consumer, para acceder a nuestro contexto
export { TodoContext, TodoProvider };