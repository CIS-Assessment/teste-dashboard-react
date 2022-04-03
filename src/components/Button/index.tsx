/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import { ReactNode } from 'react';
import { ButtonProps } from 'antd';
import { Button } from './styles';

interface Props extends ButtonProps {
  icon?: ReactNode;
  name: string;
  mt?: string;
}

export function ButtonComponent({ icon, mt, name, ...rest }: Props) {
  return (
    <Button margintop={mt} {...rest}>
      {icon && icon}
      <span>{name}</span>
    </Button>
  );
}
