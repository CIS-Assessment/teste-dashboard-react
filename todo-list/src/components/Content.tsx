import React, { useEffect, useState } from "react";
import { useChecked } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { addTask } from "../redux/reducers/todosReducer";
import { Task } from "components/Task";

export const Content = (props: Task) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const { checked, setChecked }: any = useChecked();

  const todoList = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  const handleCreateNewTask = () => {
    if (!newTaskTitle) return;

    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      isCompleted: false,
    };
    setTasks((oldstate) => [...oldstate, newTask]);
    setNewTaskTitle("");
    dispatch(addTask(newTask));
  };

  const handleToggleTaskCompletion = (id: number) => {
    const newTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            isCompleted: !task.isCompleted,
          }
        : task
    );
    setTasks(newTasks);
  };

  const handleRemoveTask = (id: number) => {
    const filtered = tasks.filter((task) => task.id != id);
    setTasks(filtered);
  };

  useEffect(() => {
    tasks.map((task) => (task.isCompleted ? setChecked(checked + 1) : null));
  }, [tasks]);

  return (
    <section className="task-list content">
      <header>
        <h2>Minhas tarefas</h2>

        <div className="input-todo">
          <input
            type="text"
            placeholder="Adicionar nova tarefa"
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button
            type="submit"
            data-testid="add-task-button"
            onClick={handleCreateNewTask}
          ></button>
        </div>
      </header>

      <main>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <div
                className={task.isCompleted ? "completed" : ""}
                data-testid="task"
              >
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    readOnly
                    checked={task.isCompleted}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p key={task.id}>{task.title}</p>
              </div>
              <button
                type="button"
                data-testid="remove-task-button"
                onClick={() =>
                  task.isCompleted ? handleRemoveTask(task.id) : null
                }
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
};

export default Content;
