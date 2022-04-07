import { ITaskItem } from '../../../../types';

export type ActionTypes = {
  type: string;
  payload: {
    task: ITaskItem;
    idTask?: number;
  };
};

export type TaskItem = ITaskItem;
