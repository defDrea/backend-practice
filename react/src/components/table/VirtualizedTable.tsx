import { FixedSizeList as List } from "react-window";
import { users } from "./mockData";
import { TableRow } from "./TableRow";

export function VirtualizedTable() {
  return (
    <div>
      <h2>Virtualized User Table</h2>

      <List
        height={400}
        width={800}
        itemCount={users.length}
        itemSize={50}
        itemData={users}
      >
        {TableRow}
      </List>
    </div>
  );
}