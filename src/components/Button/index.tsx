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
    <Button {...rest}>
      {icon && icon}
      <span>{md && name}</span>
    </Button>
  );
}
