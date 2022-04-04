/* eslint-disable import/prefer-default-export */
import {
  UserSwitchOutlined,
  UserDeleteOutlined,
  CheckOutlined,
} from '@ant-design/icons';
import { Popconfirm } from 'antd';
import { useDispatch } from 'react-redux';
import { ButtonComponent } from '../Button';
import { ActionButtonContainer } from './styles';
import { useTheme } from '../../hooks/useTheme';
import {
  markAsChecked,
  deleteTaskFromList,
} from '../../store/modules/task/actions';
import { ITaskItem } from '../../types';

interface ActionButtonsProps {
  data: ITaskItem;
  handleEditModal: () => void;
}

export function ActionButtons({ handleEditModal, data }: ActionButtonsProps) {
  const dispatch = useDispatch();

  const { theme } = useTheme();

  const handleMarkAsDone = (rowData: any) => {
    dispatch(markAsChecked(rowData));
  };

  const handleDeleteTask = (rowKey: number) => {
    dispatch(deleteTaskFromList(rowKey));
    /* notification */
  };
  return (
    <ActionButtonContainer key={data.key}>
      <ButtonComponent
        type="dashed"
        name="Finalizar"
        disabled={data.checked}
        icon={<CheckOutlined />}
        onClick={() => handleMarkAsDone(data)}
      />

      <ButtonComponent
        type="dashed"
        name="Editar"
        icon={<UserSwitchOutlined />}
        onClick={handleEditModal}
      />
      <Popconfirm
        title="Deseja Remover?"
        onConfirm={() => handleDeleteTask(data.key)}
        okText="Sim"
        cancelText="Cancelar"
      >
        <ButtonComponent
          danger
          type={theme === 'light' ? 'primary' : 'dashed'}
          name="Excluir"
          icon={<UserDeleteOutlined />}
        />
      </Popconfirm>
    </ActionButtonContainer>
  );
}
