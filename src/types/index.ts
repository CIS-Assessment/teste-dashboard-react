import { TablePaginationConfig } from 'antd';

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

export type ResponsiveTypes = Array<'md' | 'xl'>;

export type SortType = 'ascend' | 'descend';

export type PaginationConfig = TablePaginationConfig;
