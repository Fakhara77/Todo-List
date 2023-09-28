import React, { useState } from "react";
import Task from "./Task";
import InputTask from "./InputTask";

function List() {
  const [tasks, setTasks] = useState([]);

  const addItem = (input) => {
    console.log(input);
    const task = { title: input, completed: false };
    let arr = [task, ...tasks];
    setTasks(arr);
  };
  const onDelete = (task) => {
    const newtasks = tasks.filter((element ) => {
     return element !== task;
    });
   console.log(setTasks(newtasks));
  };
  const onToggleComplete = (task) => {
    const newtasks =tasks.map((item)=>{
        if(item===task){
        task.completed=!task.completed;
        }
        return item;
    }) 

    setTasks(newtasks)      
  };   
  return (
    <div>
      <InputTask addItem={addItem} />
      {tasks.map((task,index) => (
        <Task key={index}
          onDelete={onDelete}
          task={task}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
}

export default List;