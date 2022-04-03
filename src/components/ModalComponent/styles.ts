/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Button, Form, Input } from 'antd';
import { shade } from 'polished';

export const FormContainer = styled(Form)`
  background-color: #fff;
  padding: 1rem 1rem;
  h1 {
    font-size: 1.5rem;
    margin-bottom: 3rem;
    text-align: center;
    font-weight: 600;
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;

    font-weight: 400;
    font-size: 1rem;
  }
`;
export const StyledInput = styled(Input)``;
export const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 1.5rem;
  padding: 0 1.5rem;
  height: 4rem;
  background: green;
  color: #fff;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  transition: background 0.2s;
  font-weight: 600;
  &:hover {
    background: ${shade(0.2, '#3f2f')};
    color: #fff;
  }
`;
