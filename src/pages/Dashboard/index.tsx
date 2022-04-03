/* import {
  UserDeleteOutlined,
  UserSwitchOutlined,
  UserAddOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
} from '@ant-design/icons'; */
import React from 'react';
import {
  CheckCircleOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
} from '@ant-design/icons';
import { TablePaginationConfig } from 'antd';
import dashboardIcon from '../../assets/icon-dashboard.jpg';
import { ButtonComponent } from '../../components/Button';
import { ModalComponent } from '../../components/ModalComponent';
import {
  Container,
  Header,
  StyledImage,
  Content,
  ContentTitle,
  ContentHeader,
  StyledTable,
  StyledTag,
  Footer,
} from './styles';
import { ActionButtons } from '../../components/ActionButtons';

function Dashboard() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [mode, setMode] = React.useState<'isEdit' | 'isNew'>('isEdit');

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleEditModal = () => {
    setModalOpen(true);
    setMode('isEdit');
  };
  const handleNewModal = () => {
    setModalOpen(true);
    setMode('isNew');
  };
  const dataSource = [
    {
      key: '1',
      label: 'Criação do Projeto Dashboard',
      description:
        'Criar o projeto Dashboard para entregar ao Leandro até Segunda-feira',
      createDate: new Date().toLocaleDateString('pt-BR'),
      changeDate: '-',
      checked: true,
    },
    {
      key: '2',
      label: 'Label teste2',
      description: 'Descrição teste2',
      createDate: new Date().toLocaleDateString('pt-BR'),
      changeDate: new Date().toLocaleDateString('pt-BR'),
      checked: false,
    },
  ];

  const columns = [
    {
      title: 'Rótulo',
      dataIndex: 'label',
      align: 'center' as const,
    },
    {
      title: 'Descrição',
      dataIndex: 'description',
      align: 'center' as const,
    },
    {
      title: 'Data de Criação',
      dataIndex: 'createDate',
      align: 'center' as const,
    },
    {
      title: 'Data de Alteração',
      dataIndex: 'changeDate',
      align: 'center' as const,
    },
    {
      title: 'Concluída',
      dataIndex: 'checked',
      align: 'center' as const,
      render: (status: boolean) =>
        status ? (
          <StyledTag color="success">Sim</StyledTag>
        ) : (
          <StyledTag color="error">Não</StyledTag>
        ),
    },
    {
      title: 'Ações',
      align: 'center' as const,
      width: '10%',
      render: (data: any, _: any, index: number) => {
        return (
          <ActionButtons
            handleEditModal={handleEditModal}
            rowId={index}
            data={data}
          />
        );
      },
    },
  ];

  const styleConfig: React.CSSProperties = {
    color: 'dodgerblue',
    fontSize: '1.2rem',
  };
  const paginationConfig: TablePaginationConfig = {
    defaultPageSize: 10,
    prevIcon: <LeftCircleOutlined style={styleConfig} />,
    nextIcon: <RightCircleOutlined style={styleConfig} />,
    position: ['bottomCenter'],
    responsive: true,
  };
  return (
    <Container>
      <ModalComponent
        mode={mode}
        isOpen={modalOpen}
        onRequestClose={() => handleCloseModal()}
      />
      <Header>
        <span>Dashboard</span>
        <StyledImage src={dashboardIcon} preview={false} />
        <span>Gestão de atividades</span>
      </Header>
      <Content>
        <ContentHeader>
          <ContentTitle>Aqui estão suas tarefas :</ContentTitle>
          <ButtonComponent
            name="Adicionar Tarefa"
            icon={<CheckCircleOutlined />}
            type="primary"
            onClick={handleNewModal}
          />
        </ContentHeader>
        <StyledTable
          columns={columns}
          bordered
          tableLayout="auto"
          dataSource={dataSource}
          pagination={paginationConfig}
          locale={{ emptyText: 'No User Found' }}
        />
      </Content>
      <Footer>© Copyright {new Date().getFullYear()} Dashboard</Footer>
    </Container>
  );
}

export default Dashboard;
