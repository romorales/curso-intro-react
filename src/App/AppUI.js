import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from '../TodoContext';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoError } from '../TodoError';
import { TodoLoading } from '../TodoLoading';

function AppUI()
  {
     // Desesctructuramos los valores de nuestro contexto
     const {
      error,
      loading,
      searchedTodos,
      completeTodo,
      deleteTodo,
      notFound,
      openModal
    } = React.useContext(TodoContext);
  
    return(
    <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>
        {(!loading && searchedTodos.length === 0) && <p>{ notFound}</p>}

        <TodoList>
            {/* Mostramos un mensaje en caso de que ocurra algún error */}
            {error && <TodoError error={ error } />}
            {/* Mostramos un mensaje de cargando, cuando la aplicación está cargando los datos */}
            {/* {loading && <TodoLoading/>} */}
            {loading && new Array(3).fill(1).map((a, i) => <TodoLoading key={i} />)}
            {/* Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO */}
            {(!loading && !searchedTodos.length && !notFound) && <EmptyTodos />}
            {searchedTodos.map(todo=>(<TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={()=>completeTodo(todo.text)}
            onDelete={()=>deleteTodo(todo.text)}/>))}
        </TodoList> 

        {!!openModal &&  ( <Modal>
          <TodoForm/>
        </Modal>)}
        {/* <CreateTodoButton setOpenModal={setOpenModal} /> */}
        <CreateTodoButton/>

    </React.Fragment>);
    }
  
  export { AppUI };