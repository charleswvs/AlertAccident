import styled from 'styled-components';

export const InputStyled = styled.input`
  height: ${({ height }) => height ?? '1.4rem'};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? '0px'};
  background: #efefef;
  border: 1px solid #a4a4a4;
  border-radius: 4px;
  padding: 5px;
  outline: 0;
`;
