/* eslint-disable prettier/prettier */
export interface ITaskItem {
    key: number;
    label: string;
    description?: string;
    createDate: string;
    changeDate: string;
    checked: boolean;
}
