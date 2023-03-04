import {useState} from "react";

const Todo = () => {
    const [inputList,setInputList]=useState("");
    const [items,setItems]=useState([])

    const itemEvent=(event)=>{
        setInputList(event.target.value)
    }
    const listOfItems =()=>{
        setItems((oldItems)=>{
            return [...oldItems,inputList]
        })
    }
    return (
<>
    <div>
      <input type="text" placeholder="📝 here" onChange={itemEvent}/>
      <button id="addBtn" onClick={listOfItems}>Add</button>
      <button id="editBtn">Edit</button>
      <button id="deleteBtn">Delete</button>
    </div>
    <div>
        <ol>
            {/* <li>{inputList}</li> */}
          {items.map(data=>{
              return <li>{data}</li>  
            })}
        </ol>
    </div>
</>
  );
};

export default Todo;
//we are using usestate here because to show data change and add etc or else display.

//The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

//{items.map(data=>{ return <li>{data}</li> })}

//we can used map method only with array