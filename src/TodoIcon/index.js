import React from 'react';
import { BsCheckCircle } from "react-icons/bs";
import { BsTrash3Fill } from "react-icons/bs";
import { IconContext } from "react-icons";

import './TodoIcon.css';

const iconTypes = {
  "check": () => (
    <BsCheckCircle></BsCheckCircle>
  ),
  "delete": () => (
    <BsTrash3Fill></BsTrash3Fill>
  ),
};

function TodoIcon({ type, color, onClick }) {
  return (
    <IconContext.Provider value={{ color: `${color}`, className: `Icon Icon-${type}` }}>
        <span
          onClick={onClick}
        >
         { iconTypes[type]() }
        </span>
    </IconContext.Provider>
    );
}

export { TodoIcon };