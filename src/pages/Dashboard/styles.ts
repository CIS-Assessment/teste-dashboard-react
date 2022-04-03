import styled from 'styled-components';
import {
  Table as TableAntd,
  Image,
  Tag,
  /*  Popconfirm,
  notification,
  TablePaginationConfig, */
} from 'antd';

export const Container = styled.div`
  height: 100vh;
  background: #fff9;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

export const Header = styled.header`
  max-height: 70px;
  background: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  span {
    font-size: 1.6rem;
    color: dodgerblue;
    font-weight: 700;
  }
`;

export const StyledImage = styled(Image)`
  width: 28px;
  height: 28px;
`;

export const Content = styled.main`
  background: hsl(0, 0%, 90%);
  flex: 1;
  padding: 0 1rem;
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;

export const ContentTitle = styled.span`
  font-size: 1rem;
  color: black;
  font-weight: 600;
`;

export const StyledTable = styled(TableAntd)``;

export const StyledTag = styled(Tag)``;

export const Footer = styled.footer`
  height: 70px;
  background: dodgerblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;
