import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
export const Thumb = styled.div`
  padding: 5px;
  border-radius: 5px;
  background-color: red;

  :hover {
    background-color: purple;
  }
  :active {
    background-color: orange;
  }
`;
