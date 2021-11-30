import styled from 'styled-components';

import image from '../../assets/home.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${image});
`;

export const Title = styled.label`
  margin-top: 50px;
  font-size: 40px;
`;

export const ButtonContent = styled.div`
`;

export const ButtonContainer = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`;
