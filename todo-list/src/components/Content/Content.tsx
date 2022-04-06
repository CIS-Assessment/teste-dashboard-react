import { useEffect, useState } from "react";
import { useChecked } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import {
  addTask,
  completeTask,
  removeTask,
} from "../../redux/reducers/todosReducer";

import { Task } from "components/Task/Task";

import { TaskArea } from "components/Content/style";
import { Box, Button, IconButton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Content = (props: Task) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const { checked, setChecked }: any = useChecked();

  const todoList = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch<AppDispatch>();

  const handleCreateNewTask = () => {
    if (!newTaskTitle) return;

    const todoList = {
      id: Math.random(),
      title: newTaskTitle,
      isCompleted: false,
    };
    setTasks((oldstate) => [...oldstate, todoList]);
    setNewTaskTitle("");
    dispatch(addTask(todoList));
  };

  useEffect(() => {
    todoList.map((task) => (task.isCompleted ? setChecked(checked + 1) : null));
  }, [todoList]);
  return (
    <TaskArea>
      <section className="task-list content">
        <header>
          <Box className="input-todo">
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Adicionar nova tarefa"
              type="text"
              onChange={(e) => setNewTaskTitle(e.target.value)}
              value={newTaskTitle}
            />
            <Button
              className="btn-add"
              type="submit"
              data-testid="add-task-button"
              onClick={handleCreateNewTask}
            >
              Adicionar
            </Button>
          </Box>
        </header>
        <main>
          <ul>
            {todoList.map((task) => (
              <li key={task.id}>
                <div className="check-task">
                  <p key={task.id}>{task.title}</p>
                </div>
                <label className="checkbox-container">
                  <IconButton
                    className="btn-remove"
                    type="button"
                    data-testid="remove-task-button"
                    onClick={() =>
                      task.isCompleted ? dispatch(removeTask(task)) : null
                    }
                  >
                    <DeleteIcon />
                  </IconButton>
                  <Checkbox
                    {...label}
                    className="checkbox"
                    readOnly
                    checked={task.isCompleted}
                    onClick={() => dispatch(completeTask(task))}
                  />
                  <span className="checkmark"></span>
                </label>
              </li>
            ))}
          </ul>
        </main>
      </section>
    </TaskArea>
  );
};

export default Content;
