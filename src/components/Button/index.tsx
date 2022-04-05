/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import { ReactNode } from 'react';
import { ButtonProps, Grid } from 'antd';
import { Button } from './styles';

interface Props extends ButtonProps {
  icon?: ReactNode;
  name: string;
}

export function ButtonComponent({ icon, name, ...rest }: Props) {
  const { useBreakpoint } = Grid;
  const screen = useBreakpoint();
  const { md } = screen;
  return (
    <Button md={md} {...rest}>
      {icon && icon}
      <span>{md && name}</span>
    </Button>
  );
}
