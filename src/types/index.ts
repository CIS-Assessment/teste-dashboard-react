// eslint-disable-next-line import/no-unresolved
import { SortOrder } from 'antd/es/Table/interface';
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

export type SortType = SortOrder;

export type PaginationConfig = TablePaginationConfig;
