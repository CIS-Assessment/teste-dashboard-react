/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable import/prefer-default-export */

import './css/modalProperties.css';
import Modal from 'react-modal';
import { CloseSquareFilled } from '@ant-design/icons';
import { FormContainer, StyledButton, StyledInput } from './styles';
import { requiredRule } from '../../utils/rules';

interface NewModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  mode?: 'isNew' | 'isEdit';
}

export function ModalComponent({
  isOpen,
  onRequestClose,
  mode,
}: NewModalProps) {
  const [form] = FormContainer.useForm();
  const { Item } = FormContainer;

  const { TextArea } = StyledInput;
  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={isOpen}
      onAfterClose={() => form.resetFields()}
      onRequestClose={onRequestClose}
    >
      <button className="react-modal-close-button" onClick={onRequestClose}>
        <CloseSquareFilled />
      </button>

      <FormContainer form={form} layout="vertical">
        <h1>{mode === 'isNew' ? 'Cadastrar' : 'Editar'} Atividade</h1>
        <Item name="label" rules={[requiredRule]} label="Nome da Atividade">
          <StyledInput
            placeholder="Digite o nome da atividade"
            /* className={styles.inputContainer} */
            type="text"
          />
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
