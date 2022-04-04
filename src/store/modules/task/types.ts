/* eslint-disable prettier/prettier */
export interface ITaskItem {
    label: string;
    description?: string;
    createDate: string;
    changeDate: string;
    checked: boolean;
}

export interface ITaskState {
    task: ITaskItem[];
}
