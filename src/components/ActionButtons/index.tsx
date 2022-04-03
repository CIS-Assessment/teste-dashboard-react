/* eslint-disable import/prefer-default-export */
import {
  UserSwitchOutlined,
  UserDeleteOutlined,
  CheckOutlined,
} from '@ant-design/icons';
import { ButtonComponent } from '../Button';
import { ActionButtonContainer } from './styles';

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
  return (
    <ActionButtonContainer>
      <ButtonComponent
        key={rowId}
        type="dashed"
        name="Finalizar"
        disabled={data.checked}
        icon={<CheckOutlined />}
        onClick={handleEditModal}
      />

      <ButtonComponent
        key={rowId}
        type="dashed"
        name="Editar"
        icon={<UserSwitchOutlined />}
        onClick={handleEditModal}
      />
      <ButtonComponent
        key={rowId}
        danger
        type="primary"
        name="Excluir"
        icon={<UserDeleteOutlined />}
        /* onClick={() => handleEdit(row.id)} */
      />
    </ActionButtonContainer>
  );
}
