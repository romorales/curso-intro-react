import React from "react";
import './CreateTodoButton.css';


function CreateTodoButton(){
    const onClickButon = (msg) =>
    {
        alert(msg);
    }
    return (
     <button 
        className="CreateTodoButton"
        onClick={() => onClickButon('Abrir modal')}>X</button>
    )
}

export { CreateTodoButton };