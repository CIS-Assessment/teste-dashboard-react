/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Button as ButtonAntd } from 'antd';

type ButtonProps = {
  md?: boolean;
};

export const Button = styled(ButtonAntd) <ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 4px;
  
  svg {
    width: 1.2rem;
    height: 1.2rem;
    
  }
`;
