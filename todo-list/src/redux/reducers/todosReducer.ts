import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "components/Task";

const initialState = [] as Task[];

const TaskSlice = createSlice({
  name: "Tasks",
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action: PayloadAction<Task>) => {
        state.push(action.payload);
      },
      prepare: (description: any) => ({
        payload: {
          id: Math.random(),
          description,
          isCompleted: false,
        } as unknown as Task,
      }),
    },
  },
});

export const { addTask } = TaskSlice.actions;
export default TaskSlice.reducer;
