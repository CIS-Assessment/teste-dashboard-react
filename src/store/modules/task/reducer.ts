/* eslint-disable default-param-last */
/* eslint-disable prettier/prettier */

import { Reducer } from "redux";
import { ITaskItem } from "../../../types";

const INITIAL_STATE: ITaskItem[] = []

const tasks: Reducer<ITaskItem[]> = (state = INITIAL_STATE, action: any) => {


    switch (action.type) {
        case 'ADD_TASK_TO_LIST': {
            const { task } = action.payload

            return [
                ...state,
                {
                    ...task,
                    key: (state[state.length - 1]?.key || 0) + 1,
                    createDate: new Date().toLocaleDateString('pt-BR'),
                    checked: false,
                }
            ]
        }
        case 'EDIT_TASK_FROM_LIST': {
            const { task } = action.payload
            const changedUser = {
                ...task,
                changeDate: new Date().toLocaleString('pt-BR'),
                checked: false,
            }

            const newList = state.map(item => item.key === task.key ? changedUser : item)

            return newList
        }

        case 'MARK_TASK_AS_CHECKED': {
            const { task } = action.payload
            const changedUser = {
                ...task,
                checked: !task.checked,
                changeDate: new Date().toLocaleString('pt-BR')
            }
            const newList = state.map(item => item.key === task.key ? changedUser : item)

            return newList
        }

        case 'DELETE_TASK_FROM_LIST': {

            const { idTask } = action.payload
            const newList = state.filter(item => item.key !== idTask)

            return newList
        }
        default: {
            return state;
        }
    }

}

export default tasks;
