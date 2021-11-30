import { useState } from 'react';
import Header from '../../components/Header';
import {
  Container,
  Title,
  Description,
  RecordContainer,
  TextContainer,
} from './style';

const ViewAccidentRecord = () => {
  const [eventName, setEventName] = useState('Acidente de carro');
  const [eventDetails, setEventDetails] = useState(
    'Batida entre dois carros, com duas pessas feridas'
  );
  const [eventLocation, setEventLocation] = useState(
    'Br 040 Km 688, Ceasa-Pav F Box 40, Kennedy, Contagem-MG - Kennedy, Contagem - MG'
  );
  const [eventRecord, setEventRecord] = useState();

  return (
    <>
      <Header>Registro do acidente</Header>
      <Container>
        <TextContainer>
          <Title>Nome do evento:</Title>
          <Description>{eventName}</Description>
        </TextContainer>

        <TextContainer>
          <Title>Detalhes do acidente:</Title>
          <Description>{eventDetails}</Description>
        </TextContainer>

        <TextContainer>
          <Title>Foto ou vídeo:</Title>
          <RecordContainer>
            <img
              src="https://defatoonline.com.br/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-16-at-10.15.49-780x520.jpeg"
              alt="eventName"
            />
          </RecordContainer>
        </TextContainer>

        <TextContainer>
          <Title>Local:</Title>

          <Description>{eventLocation}</Description>
        </TextContainer>
      </Container>
    </>
  );
};

export default ViewAccidentRecord;
