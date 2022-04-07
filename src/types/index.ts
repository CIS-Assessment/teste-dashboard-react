export interface IState {
  tasks: ITaskItem[];
}
export interface ITaskItem {
  key: number;
  label: string;
  description?: string;
  createDate: string;
  changeDate: string;
  checked: boolean;
}
