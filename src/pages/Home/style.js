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
`;

export const Title = styled.label`
  margin-top: 65px;
  font-size: 48px;
`;

export const ButtonContent = styled.div`
  margin-bottom: 40px;
`;
