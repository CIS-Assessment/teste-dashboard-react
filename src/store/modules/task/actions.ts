import { ActionTypes, TaskItem } from './types';

export function addTaskToList(task: TaskItem): ActionTypes {
  return {
    type: 'ADD_TASK_TO_LIST',
    payload: {
      task,
    },
  };
}

export function editTaskToList(task: TaskItem): ActionTypes {
  return {
    type: 'EDIT_TASK_FROM_LIST',
    payload: {
      task,
    },
  };
}
export function markAsChecked(task: TaskItem): ActionTypes {
  return {
    type: 'MARK_TASK_AS_CHECKED',
    payload: {
      task,
    },
  };
}

export function deleteTaskFromList(idTask: number) {
  return {
    type: 'DELETE_TASK_FROM_LIST',
    payload: {
      idTask,
    },
  };
}
