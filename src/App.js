import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [x, setx] = useState([]);

  const inputRef = useRef();

  const add = () => {
    const value = inputRef.current.value;
    const newData = {completed:false , value}
    setx([...x, newData]);
    inputRef.current.value = "";
  };

  const itemDone = (index) =>{
    const newx = [...x]
    x[index].completed =!x[index].completed

    setx(newx)
  }
  const toDelete = (index) => {
    const newx = [...x]
    newx.splice(index,1)
    setx(newx)
  }

 
  return (
    <div className="App">
      <h2>To Do List</h2>
      
<div className="form1">
<input ref={inputRef} placeholder="Enter New Task" />
      <button onClick={add}>Add</button>
</div>
     

      <ul>
        {x.map((item , index) => {
          return <div className="form2"> <li className={item.completed ? "diffstyle":""} onClick={() => itemDone(index)}>{item.value}</li>
          <span onClick={() => toDelete(index)} >❌</span>
          </div>
        })}
      </ul>

     
    </div>
  );
}

export default App;
