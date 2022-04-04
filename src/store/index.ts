/* eslint-disable prettier/prettier */
import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';
import { ITaskState } from './modules/task/types';

export interface IState {
    tasks: ITaskState;
}
const store = createStore(rootReducer);

export default store;
