import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

// function TodoSearch({searchValue, setSearchValue}){
  function TodoSearch(){
  const {searchValue, setSearchValue } = React.useContext(TodoContext);
  const onSearchValueChange = (event) =>
  {
    setSearchValue(event.target.value);
  }
    return (
      <div className="TodoSearch"> 
          <input 
            className="TodoSearch-input" 
            placeholder='Filtrar por nombre de tarea'
            value={searchValue}
            onChange={onSearchValueChange}/>
      </div> 
   )
}

export { TodoSearch };