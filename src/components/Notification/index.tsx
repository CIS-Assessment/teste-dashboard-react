/* eslint-disable import/prefer-default-export */
import React from 'react';
import { notification } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';

export const getSuccessNotification = (
  description: React.ReactNode,
  theme: 'light' | 'dark',
) => {
  const darkStyle = {
    background: '#03DAC6',
    color: '#FFF',
  };
  const customStyle =
    theme === 'dark' ? darkStyle : { color: 'rgb(81,180,25)' };

  const config = {
    message: <span style={customStyle}> Sucesso </span>,
    description,
    style: customStyle,
    icon: <CheckCircleFilled style={customStyle} />,
  };
  notification.success(config);
};
