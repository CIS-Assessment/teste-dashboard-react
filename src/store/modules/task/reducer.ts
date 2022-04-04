/* eslint-disable default-param-last */
/* eslint-disable prettier/prettier */

import { Reducer } from "redux";
import { ITaskItem } from "./types";

/* Localstorage must initialize INITIAL_STATE */
const INITIAL_STATE: ITaskItem[] = []

const tasks: Reducer<ITaskItem[]> = (state = INITIAL_STATE, action: any) => {


    switch (action.type) {
        case 'ADD_TASK_TO_LIST': {
            const { task } = action.payload

            return [
                ...state,
                {
                    ...task,
                    key: state.length + 1
                }
            ]
        }
        case 'EDIT_TASK_FROM_LIST': {
            const { user } = action.payload

            const newList = state.map(item => item.key === user.key ? user : item)

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
