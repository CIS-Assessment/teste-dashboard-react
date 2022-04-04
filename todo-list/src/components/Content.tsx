import React, { useState } from "react";
import { useChecked } from "../App";

interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

export function Content(props: Task) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const { checked, setChecked }: any = useChecked();

  function handleCreateNewTask() {
    if (!newTaskTitle) return;
    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      isCompleted: false,
    };
    setTasks((oldState) => [...oldState, newTask]);
    setNewTaskTitle("");
  }
  function handleToggleTaskCompletion(id: number) {
    const newTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            isCompleted: !task.isCompleted,
          }
        : task
    );
    setTasks(newTasks);
    setChecked(checked + 1);
  }

  function handleRemoveTask(id: number) {
    const filtered = tasks.filter((task) => task.id != id);
    setTasks(filtered);
  }

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
}

export default Content;
