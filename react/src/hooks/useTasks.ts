import { useReducer } from "react";
import { taskReducer, Task } from "../components/dashboard/taskReducer";

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Finish React project",
    completed: false,
  },
];

export function useTasks() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const addTask = (title: string) => {
    const optimisticTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };

    dispatch({
      type: "ADD_TASK",
      payload: optimisticTask,
    });
  };

  const toggleTask = (id: number) => {
    dispatch({
      type: "TOGGLE_TASK",
      payload: id,
    });
  };

  return {
    tasks,
    addTask,
    toggleTask,
  };
}