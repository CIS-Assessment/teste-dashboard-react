import './css/modalProperties.css';
import React from 'react';
import Modal from 'react-modal';
import { CloseSquareFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

import { FormContainer, StyledButton, StyledInput } from './styles';
import { requiredRule } from '../../utils/rules';
import { useTheme } from '../../hooks/useTheme';
import {
  addTaskToList,
  editTaskToList,
} from '../../store/modules/task/actions';
import { ITaskItem } from '../../types';
import { getSuccessNotification } from '../Notification';

interface NewModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  mode?: 'isNew' | 'isEdit';
  task?: ITaskItem;
}

export function ModalComponent({
  isOpen,
  onRequestClose,
  mode,
  task,
}: NewModalProps) {
  const [form] = FormContainer.useForm();
  const { Item } = FormContainer;
  const { theme } = useTheme();
  const { TextArea } = StyledInput;

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const data = form.getFieldsValue();
    if (mode === 'isNew') {
      dispatch(addTaskToList(data));
      getSuccessNotification(`Tarefa ${data.label} cadastrada!`, theme);
    } else {
      dispatch(
        editTaskToList({
          ...data,
          key: task?.key,
          createDate: task?.createDate,
        }),
      );
      getSuccessNotification('Tarefa editada!', theme);
    }

    onRequestClose();
  };

  React.useEffect(() => {
    if (mode === 'isEdit') {
      form.setFieldsValue(task);
    }
  }, [task, form, mode]);
  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={isOpen}
      ariaHideApp={false}
      onAfterClose={() => form.resetFields()}
      onRequestClose={onRequestClose}
    >
      <button
        type="button"
        className="react-modal-close-button"
        onClick={onRequestClose}
      >
        <CloseSquareFilled />
      </button>

      <FormContainer
        form={form}
        layout="vertical"
        myTheme={theme}
        onFinish={handleSubmit}
      >
        <h1>{mode === 'isNew' ? 'Cadastrar' : 'Editar'} Atividade</h1>
        <Item name="label" rules={[requiredRule]} label="Nome da Atividade">
          <StyledInput placeholder="Digite o nome da atividade" type="text" />
        </Item>
        <Item name="description" label="Descrição">
          <TextArea
            placeholder="Digite a Descrição"
            rows={4}
            maxLength={1000}
          />
        </Item>
        <StyledButton htmlType="submit">Salvar</StyledButton>
      </FormContainer>
    </Modal>
  );
}
