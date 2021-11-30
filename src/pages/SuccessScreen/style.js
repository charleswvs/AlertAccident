import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;

  span {
    align-self: center;
    font-size: 30px;
    margin-top: 15px;
  }
  .shared {
      height: 80px;
      width: 80px;
      margin-top: 20px;
      align-self: center;
  }

  @media (max-width: 600px) {
    span{
        font-size: 20px;
    }
    .shared {
      height: 40px;
      width: 40px;
  }
  }
`;

export const TextContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 45px;
  max-width: 310px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    text-align: center;
    font-size: 48px;
  }

  @media (max-width: 600px) {
    span{
        font-size: 38px;
    }
    img{
        height: 150px;
    }
  }
`;