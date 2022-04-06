/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
import { ITaskItem } from '../../../types';

export function addTaskToList(task: ITaskItem) {
    return {
        type: 'ADD_TASK_TO_LIST',
        payload: {
            task,
        },
    };
}

export function editTaskToList(task: ITaskItem) {
    return {
        type: 'EDIT_TASK_FROM_LIST',
        payload: {
            task,
        },
    };
}
export function markAsChecked(task: ITaskItem) {
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
        }
    }
}