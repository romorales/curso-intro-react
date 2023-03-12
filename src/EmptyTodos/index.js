import React from 'react';
import './EmptyTodos.css'
import addTaskIcon from '../Images/addTask.png'
import { TodoContext } from "../TodoContext";


function EmptyTodos() {
const { openModal, setOpenModal } = React.useContext(TodoContext);

const onClickButton = ()=>{
    //props.setOpenModal(prevState => !prevState)
    setOpenModal(!openModal);
}

 return <div className='EmptyTodos'>
    <h2>¡UPS! Lista de tareas vacía</h2>
    <img alt="add" width='16%' src={addTaskIcon} onClick={ onClickButton }></img>
    <p>Presiona ➕ para agregar una nueva</p>

    </div>;
}

export { EmptyTodos };