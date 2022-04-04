/* eslint-disable import/prefer-default-export */
import {
  UserSwitchOutlined,
  UserDeleteOutlined,
  CheckOutlined,
} from '@ant-design/icons';
import { Popconfirm } from 'antd';
import { ButtonComponent } from '../Button';
import { ActionButtonContainer } from './styles';
import { useTheme } from '../../hooks/useTheme';

interface ActionButtonsProps {
  rowId: number;
  data: any;
  handleEditModal: () => void;
}

export function ActionButtons({
  handleEditModal,
  rowId,
  data,
}: ActionButtonsProps) {
  const { theme } = useTheme();
  return (
    <ActionButtonContainer key={rowId}>
      <ButtonComponent
        type="dashed"
        name="Finalizar"
        disabled={data.checked}
        icon={<CheckOutlined />}
        onClick={handleEditModal}
      />

      <ButtonComponent
        type="dashed"
        name="Editar"
        icon={<UserSwitchOutlined />}
        onClick={handleEditModal}
      />
      <Popconfirm
        title="Deseja Remover?"
        onConfirm={() => console.log(`Deletou o item ${rowId}`)}
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
