import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from '../TodoContext';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

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
            {error && <p> Desespérate, hubo un error </p>}
             {/* Mostramos un mensaje de cargando, cuando la aplicación está cargando los datos */}
            {loading && <p> Estamos cargando, no desesperes </p>}
            {/* Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO */}
            {(!loading && !searchedTodos) && <p> Crea tu primer ToDo</p>}
            {searchedTodos.map(todo=>(<TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={()=>completeTodo(todo.text)}
            onDelete={()=>deleteTodo(todo.text)}/>))}
        </TodoList> 

        {!!openModal &&  ( <Modal>
          <p>{ searchedTodos[0]?.text }</p>
        </Modal>)}
        {/* <CreateTodoButton setOpenModal={setOpenModal} /> */}
        <CreateTodoButton/>

    </React.Fragment>);
    }
  
  export { AppUI };