import { useCallback, useMemo, useState } from "react";
import { useTasks } from "../../hooks/useTasks";
import { TaskCard } from "./TaskCard";

export function Dashboard() {
  const { tasks, addTask, toggleTask } = useTasks();

  const [title, setTitle] = useState("");

  const completedCount = useMemo(() => {
    return tasks.filter((task) => task.completed).length;
  }, [tasks]);

  const handleToggle = useCallback((id: number) => {
    toggleTask(id);
  }, [toggleTask]);

  return (
    <div>
      <h2>Dashboard</h2>

      <p>Completed Tasks: {completedCount}</p>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
      />

      <button
        onClick={() => {
          addTask(title);
          setTitle("");
        }}
      >
        Add Task
      </button>

      <div style={{ marginTop: "20px" }}>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            completed={task.completed}
            toggleTask={handleToggle}
          />
        ))}
      </div>
    </div>
  );
}