/* eslint-disable prettier/prettier */

import { Reducer } from "redux";
import { ITaskState } from "./types";


const INITIAL_STATE: ITaskState = {
    task: []
}

const task: Reducer<ITaskState> = () => {
    return INITIAL_STATE
}

export default task;
