import React from 'react';
import {
  CheckCircleOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
} from '@ant-design/icons';
import { TablePaginationConfig } from 'antd';
import { useSelector } from 'react-redux';
import dashboardIcon from '../../assets/icon-dashboard.jpg';
/* import nightMode from '../../assets/dark-mode.png'; */
import { ButtonComponent } from '../../components/Button';
import { ModalComponent } from '../../components/ModalComponent';
import {
  Container,
  Header,
  StyledSwitch,
  StyledImage,
  Content,
  ContentTitle,
  ContentHeader,
  StyledTable,
  StyledTag,
  Footer,
} from './styles';
import { ActionButtons } from '../../components/ActionButtons';
import { useTheme } from '../../hooks/useTheme';
import { IState, ITaskItem } from '../../types';

function Dashboard() {
  const [taskData, setTaskData] = React.useState<ITaskItem>({} as ITaskItem);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [mode, setMode] = React.useState<'isEdit' | 'isNew'>('isEdit');
  const { toogleTheme, theme } = useTheme();
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleEditModal = (data: ITaskItem) => {
    setModalOpen(true);
    setTaskData(data);
    setMode('isEdit');
  };
  const handleNewModal = () => {
    setModalOpen(true);
    setMode('isNew');
  };
  const tasks = useSelector<IState, ITaskItem[]>(state => state.tasks);

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
      responsive: ['md'] as any,
    },
    {
      title: 'Data de Criação',
      dataIndex: 'createDate',
      align: 'center' as const,
      responsive: ['xl'] as any,
    },
    {
      title: 'Data de Alteração',
      dataIndex: 'changeDate',
      align: 'center' as const,
      render: (changedDate: string) => changedDate ?? '-',
      responsive: ['xl'] as any,
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
      render: (data: ITaskItem) => {
        return (
          <ActionButtons
            handleEditModal={() => handleEditModal(data)}
            data={data}
          />
        );
      },
    },
  ];

  const styleConfig: React.CSSProperties = {
    color: theme === 'light' ? 'dodgerblue' : '#FFF',
    fontSize: '1.2rem',
  };
  const paginationConfig: TablePaginationConfig = {
    defaultPageSize: 5,
    prevIcon: <LeftCircleOutlined style={styleConfig} />,
    nextIcon: <RightCircleOutlined style={styleConfig} />,
    position: ['bottomCenter'],
    responsive: true,
  };

  return (
    <>
      <Container myTheme={theme}>
        <ModalComponent
          mode={mode}
          isOpen={modalOpen}
          task={taskData}
          onRequestClose={() => handleCloseModal()}
        />
        <Header myTheme={theme}>
          <span>Dashboard</span>
          <StyledImage src={dashboardIcon} preview={false} />

          <StyledSwitch
            onChange={toogleTheme}
            checkedChildren="light"
            unCheckedChildren="dark"
          />
        </Header>
        <Content>
          <ContentHeader myTheme={theme}>
            <ContentTitle>Aqui estão suas tarefas :</ContentTitle>
            <ButtonComponent
              name="Adicionar Tarefa"
              icon={<CheckCircleOutlined />}
              type={theme === 'light' ? 'primary' : 'dashed'}
              onClick={handleNewModal}
            />
          </ContentHeader>
          <StyledTable
            columns={columns}
            bordered={theme === 'light'}
            myTheme={theme}
            tableLayout="auto"
            dataSource={tasks}
            pagination={paginationConfig}
            locale={{ emptyText: 'Nenhuma tarefa encontrada' }}
          />
        </Content>
      </Container>
      <Footer myTheme={theme}>
        © Copyright {new Date().getFullYear()} Dashboard
      </Footer>
    </>
  );
}

export default Dashboard;
