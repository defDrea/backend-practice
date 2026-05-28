export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

type Action =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "TOGGLE_TASK"; payload: number };

export function taskReducer(state: Task[], action: Action): Task[] {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];

    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );

    default:
      return state;
  }
}