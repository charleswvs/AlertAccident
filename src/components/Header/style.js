import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6c36e;

  img {
    height: 1.8rem;
    margin-right: 0.8rem;
  }

  h1 {
    font-size: 30px;
  }
  
  @media (max-width: 600px) {
    padding: 15px;
    h1 {
      font-size: 20px;
    }
  }
`;
