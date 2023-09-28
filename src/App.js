import React from "react";
import "./index.css";
import List from "./Component/List";


function App() {
  // const [task, setTask] = useState({ title: "mytask", completed: true });

  // const addItem = (input) => {
  //   console.log(input);
  // };

  // const onDelete = (task) => {
  //   console.log("onDelete", task);
  // };
  // const onToggleComplete = (task) => {
  //   setTask({ ...task, completed: !task.completed });
  // };

  return (
     <div className="App">
       {/* <InputTask addItem={addItem} />
       <Task
         onDelete={onDelete}
         task={task}
         onToggleComplete={onToggleComplete}
       />  */}
       <List />
    </div>
  );
}

export default App;
