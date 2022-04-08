import styled from 'styled-components';
import { Table as TableAntd, Image, Tag, Switch } from 'antd';

interface DarkThemeProps {
  myTheme?: 'light' | 'dark';
}
interface ImageProps {
  cursorOn?: boolean;
}

export const Container = styled.div<DarkThemeProps>`
  height: 100vh;
  background: ${props =>
    props.myTheme === 'light' ? 'hsl(0, 0%, 90%)' : 'black'};
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

export const Header = styled.header<DarkThemeProps>`
  max-height: 70px;
  background: ${props => (props.myTheme === 'light' ? '#FFF' : '#3700b3')};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  color: ${props => (props.myTheme === 'light' ? 'dodgerblue' : '#FFF')};
  & > span {
    font-size: 1.6rem;
    font-weight: 700;
  }
`;

export const StyledImage = styled(Image)<ImageProps>`
  width: 28px;
  height: 28px;
  border-radius: 5px;
  cursor: ${props => props.cursorOn && 'pointer'};
`;

export const Content = styled.main`
  flex: 1;
  padding: 0 1rem;
`;

export const ContentHeader = styled.div<DarkThemeProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  color: ${props => (props.myTheme === 'light' ? 'black' : 'white')};
`;

export const ContentTitle = styled.span`
  font-size: 1rem;

  font-weight: 600;
`;

export const StyledTable = styled(TableAntd)<DarkThemeProps>`
  &&& {
    .ant-table {
      color: ${props => (props.myTheme === 'light' ? 'black' : 'white')};
      background: ${props => (props.myTheme === 'light' ? 'white' : 'black')};
    }
    .ant-table-thead > tr > th {
      background: ${props => (props.myTheme === 'light' ? 'white' : '#bb86fc')};
      color: ${props => (props.myTheme === 'light' ? 'black' : 'white')};
    }
    .ant-table-tbody:hover .ant-table-cell {
      background: transparent;
    }

    .ant-table-empty .ant-table-tbody > tr.ant-table-placeholder {
      color: ${props =>
        props.myTheme === 'light' ? 'rgba(0, 0, 0, 0.25)' : 'white'};
    }
    .ant-pagination,
    .ant-pagination-total-text {
      color: ${props => (props.myTheme === 'light' ? 'default' : 'white')};
    }

    .ant-table-column-sort {
      background: transparent;
    }
    /* Responsive */
    @media (max-width: 768px) {
      .ant-table-thead > tr > th,
      .ant-table-tbody > tr > td {
        padding: 12px 8px;
      }
    }
  }
`;

export const StyledSwitch = styled(Switch)``;

export const StyledTag = styled(Tag)``;

export const Footer = styled.footer<DarkThemeProps>`
  height: 70px;
  background: ${props =>
    props.myTheme === 'light' ? 'dodgerblue' : '#03DAC6'};
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
`;
