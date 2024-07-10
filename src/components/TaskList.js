import React from "react";
import Task from "./Task";



function TaskList({ tasks, onDeleteTasks }) {
   return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task 
          key={task.text}
          text={task.text}
          category={task.category}
          onDelete={() => onDeleteTasks(task.text)}
          />
        ))}
     </div>
  );
}

export default TaskList;
