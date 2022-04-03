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
  UserSwitchOutlined,
  UserDeleteOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
} from '@ant-design/icons';
import { TablePaginationConfig } from 'antd';
import dashboardIcon from '../../assets/icon-dashboard.jpg';

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

function Dashboard() {
  const dataSource = [
    {
      label: 'Criação do Projeto Dashboard',
      description:
        'Criar o projeto Dashboard para entregar ao Leandro até Segunda-feira',
      createDate: new Date().toLocaleDateString('pt-BR'),
      changeDate: '-',
      checked: true,
    },
    {
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
          <StyledTag color="success">Feito</StyledTag>
        ) : (
          <StyledTag color="processing">Pendente</StyledTag>
        ),
    },
    {
      title: 'Ações',
      align: 'center' as const,
      render: () => {
        return (
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button type="button">
              <UserSwitchOutlined />
            </button>
            <button type="button">
              <UserDeleteOutlined />
            </button>
          </div>
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
      <Header>
        <span>Dashboard</span>
        <StyledImage src={dashboardIcon} preview={false} />
        <span>Gestão de atividades</span>
      </Header>
      <Content>
        <ContentHeader>
          <ContentTitle>Aqui estão suas tarefas :</ContentTitle>
          <button type="button">
            <CheckCircleOutlined />
            Adicionar Tarefa
          </button>
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
