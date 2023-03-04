import {useState} from "react";

const Todo = () => {
    const [inputList,setInputList]=useState("");
    
    const itemEvent=(event)=>{
        setInputList(event.target.value)
    }
    return (
<>
    <div>
      <input type="text" placeholder="📝 here" onChange={itemEvent}/>
      <button id="addBtn">Add</button>
      <button id="editBtn">Edit</button>
      <button id="deleteBtn">Delete</button>
    </div>
    <div>
        <ol>
            <li>{inputList}</li>
        </ol>
    </div>
</>
  );
};

export default Todo;
//we are using usestate here because to show data change and add etc or else display.