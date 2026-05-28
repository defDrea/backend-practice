import React from "react";

interface User {
  id: string | number;
  name: string;
  email: string;
}

interface TableRowProps {
  index: number;
  style: React.CSSProperties;
  data: User[];
}

export const TableRow = React.memo(({ index, style, data }: TableRowProps) => {
  const user = data[index];

  return (
    <div
      style={{
        ...style,
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <span>{user.id}</span>
      <span>{user.name}</span>
      <span>{user.email}</span>
    </div>
  );
});