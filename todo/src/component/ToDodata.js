import React from "react";

const ToDodata = (props) => {
  return (
    <>
      <div>
        <li>
          {props.text} <button id="deleteBtn">Delete</button>{" "}
          <button id="editBtn">Edit</button>
        </li>
        <br></br>
      </div>
    </>
  );
};

export default ToDodata;
