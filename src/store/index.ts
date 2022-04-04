/* eslint-disable prettier/prettier */
import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';
import { ITaskItem } from './modules/task/types';

export interface IState {
    tasks: ITaskItem[];
}
const store = createStore(rootReducer);

export default store;
