import { createContext, useState, useEffect } from "react";
import { tasks as date } from "../data/task";


export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function creatTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(date);
  }, []);

  return (
    <TaskContext.Provider value={{
        tasks,
        creatTask,
        deleteTask
    }}>{props.children}</TaskContext.Provider>
  );
}
