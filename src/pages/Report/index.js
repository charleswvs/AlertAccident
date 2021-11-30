import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { getAllEvents } from "../../services/api";
import { Container } from "./style";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Report = () => {
  const [allAcidents, setAllAcidents] = useState([]);

  useEffect(() => {
    async function getAllAcidents() {
      const result = await getAllEvents();
      setAllAcidents(result.data.listEvents.items);
    }

    getAllAcidents();
  }, []);

  return (
    <Container>
      <Header>Relatório</Header>
      {allAcidents.length ? (
        <MapContainer
          style={{ height: '100%' }}
          center={[allAcidents[0].latitude, allAcidents[0].longitude]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {allAcidents.map(acident => (
            <Marker position={[acident.latitude, acident.longitude]}>
            <Popup >
              <div style={{display: 'flex', flexDirection: 'column'}}>
              <span>{`Código: ${acident.id}`}</span>
              <span>{`Nome: ${acident.title}`}</span>
              <span>{`Data: ${new Date(acident.updatedAt).toLocaleDateString()}`}</span>
              <span>{`Coordenada: [${acident.latitude} , ${acident.longitude}]`}</span>
              </div>
            </Popup>
          </Marker>
          ))}
          
        </MapContainer>
      ) : null}
    </Container>
  );
};

export default Report;
