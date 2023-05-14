import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;
export const Button = styled.button`
  background-color: #21c53c;
  padding: 8px;

  :hover {
    background-color: #0ac4f2;
  }
  :active {
    background-color: #760af2;
  }
`;
