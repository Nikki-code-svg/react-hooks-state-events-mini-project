import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [ selectedCategory, setSelectedCategory ] = useState("All");
  const [ tasks, setTasks] = useState(TASKS);

  const handleFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
 }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  }

  const handleDeleteTask = (taskText) => {
    setTasks(tasks.filter((task) => task.text !== taskText));
  };

 const filteredTasks = selectedCategory === "All"
 ? tasks
 : tasks.filter(task => task.category === selectedCategory);



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
         categories={CATEGORIES}
         selectedCategory={selectedCategory}
         onCategoryChange={handleCategoryChange}
          />
      <NewTaskForm 
         categories={CATEGORIES.filter(cat => cat !== "All")}
         onTaskFormSubmit={handleFormSubmit}
           />
      <TaskList 
          tasks={filteredTasks}
          onDeleteTasks={handleDeleteTask}
          />
    </div>
  );
}

export default App;
