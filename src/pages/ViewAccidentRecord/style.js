import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 36px 0;
`;

export const Title = styled.label`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #262626;
`;

export const Description = styled.label`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  margin-left: 20px;

  color: #a4a4a4;
`;

export const RecordContainer = styled.div`
  width: 100%;
  height: 148px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    object-fit: cover;
    object-position: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 35px;
  .leaflet-container {
    height: 200px;
  }
`;
