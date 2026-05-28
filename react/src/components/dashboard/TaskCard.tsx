import React from "react";

type Props = {
  id: number;
  title: string;
  completed: boolean;
  toggleTask: (id: number) => void;
};

function TaskCardComponent({
  id,
  title,
  completed,
  toggleTask,
}: Props) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h4>{title}</h4>

      <p>Status: {completed ? "Completed" : "Pending"}</p>

      <button onClick={() => toggleTask(id)}>
        Toggle Status
      </button>
    </div>
  );
}

export const TaskCard = React.memo(TaskCardComponent);