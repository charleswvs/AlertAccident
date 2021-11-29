import styled from 'styled-components';

import image from '../../assets/home.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${image});
  gap: 20px;
`;

export const Title = styled.label`
  margin-top: 10%;
  font-size: 40px;
`;

export const ButtonContent = styled.div`
  margin-bottom: 30%;
`;
