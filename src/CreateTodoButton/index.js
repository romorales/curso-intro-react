import React from "react";
import './CreateTodoButton.css';
import { TodoContext } from "../TodoContext";

function CreateTodoButton(){
    const { openModal, setOpenModal } = React.useContext(TodoContext);

    const onClickButton = ()=>{
        !openModal ? setOpenModal(true) : setOpenModal(false);
    }
    
    return (
     <button 
        className="CreateTodoButton"
        onClick={ onClickButton }>{ openModal ? 'x' : '+' }</button>
    )
}

export { CreateTodoButton };