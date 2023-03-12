import React from "react";
import './CreateTodoButton.css';
import { TodoContext } from "../TodoContext";
import { BsX } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";

function CreateTodoButton(){
    const { openModal, setOpenModal } = React.useContext(TodoContext);

    const onClickButton = ()=>{
        //props.setOpenModal(prevState => !prevState)
        setOpenModal(!openModal);
    }

    return (
     <div className="CreateTodoButton-Container">
     <button 
        className="CreateTodoButton"
        onClick={ onClickButton }>{ openModal ? <BsX/> : <BsPlus/> }</button>
        </div>
    )
}

export { CreateTodoButton };