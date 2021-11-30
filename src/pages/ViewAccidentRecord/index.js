import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import {
  Container,
  Title,
  Description,
  RecordContainer,
  TextContainer,
} from './style';
import { getAllEvents, getEvent, getFile } from '../../services/api';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const ViewAccidentRecord = () => {
  const { id } = useParams();

  const [eventName, setEventName] = useState('Acidente de carro');
  const [eventDetails, setEventDetails] = useState()
  const [eventLocation, setEventLocation] = useState();
  const [eventRecord, setEventRecord] = useState();
  const [eventFile, setEventFile] = useState();

  useEffect(() => {
    getEventData();
  }, []);

  const getEventData = async () => {
    try {
      const event = await getEvent(id)
      const file = await getFile(event.file);
      setEventFile(file);
      setEventLocation({
        latitude: event.latitude,
        longitude: event.longitude,
      })
      setEventName(event.title);
      setEventDetails(event.description);
    } catch (err) {
      console.log(err);
    }
  };



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
              src={eventFile}
              alt="eventName"
            />
          </RecordContainer>
        </TextContainer>

        <TextContainer>
          <Title>Local:</Title>
        {eventLocation && (
          <MapContainer 
            style={{height: 200}} 
            center={[eventLocation.latitude, eventLocation.longitude]} 
            zoom={13} 
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[eventLocation.latitude, eventLocation.longitude]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        )}
        
        </TextContainer>
      </Container>
    </>
  );
};

export default ViewAccidentRecord;
