import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "components/Task/Task";

export type SliceState = {
  todo: Task[];
};

const initialState: SliceState = {
  todo: [],
};

const TaskSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state: SliceState, action: PayloadAction<Task>) => {
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    },
    removeTask: (state: SliceState, action: PayloadAction<Task>) => {
      return {
        ...state,
        todo: state.todo.filter((t: Task) => t.id !== action.payload.id),
      };
    },
    completeTask: (state: SliceState, action: PayloadAction<Task>) => {
      return {
        ...state,
        todo: state.todo.map((t: Task) =>
          t.id == action.payload.id
            ? {
                ...t,
                isCompleted: !t.isCompleted,
              }
            : t
        ),
      };
    },
  },
});

export const { addTask, removeTask, completeTask } = TaskSlice.actions;
export default TaskSlice.reducer;
