import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import { Container, Form } from './style';
import { useGeolocation } from 'react-use';
import { createEvent, uploadFile } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const AccidentForm = () => {
  const navigate = useNavigate();

  const geolocation = useGeolocation({
    enableHighAccuracy: true,
  });

  const [accidentInfos, setAccidentInfos] = useState({
    title: '',
    description: '',
    file: undefined,
    latitude: 0,
    longitude: 0,
  });

  const [loading, setLoading] = useState(false);

  const updateAccidentInfos = (proptype, value) => {
    setAccidentInfos((prevState) => ({
      ...prevState,
      [proptype]: value,
    }));
  };

  useEffect(() => {
    setAccidentInfos((prevState) => ({
      ...prevState,
      latitude: geolocation.latitude || prevState.latitude,
      longitude: geolocation.longitude || prevState.longitude,
    }));
  }, [geolocation]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!accidentInfos.file){
      alert('Adicione um arquivo');
      return 
    } 
    setLoading(true);

    const fileKey = await uploadFile({file: accidentInfos.file});
    await createEvent({
      ...accidentInfos,
      date: new Date().toString(),
      file: fileKey,
    })
      .then((result) => {
        navigate(`../sucesso/${result.data.createEvent.id}`);
      })
      .catch((err) => {
        console.log(err);
        alert('Erro ao salvar o acidente');
      });
    setLoading(false);
  };

  return (
    <Container>
      <Header>Registrar Acidente</Header>
      <Form onSubmit={handleSubmit}>
        <Input
          id="title"
          placeholder="Ex.: Acidente de carro"
          label="Nome do evento"
          marginBottom="1.5rem"
          value={accidentInfos.title}
          onChange={(e) => updateAccidentInfos('title', e.target.value)}
        />

        <TextArea
          id="description"
          placeholder="Ex.: Batida entre dois carros, com duas pessoas feridas"
          label="Detalhes do acidente"
          value={accidentInfos.description}
          onChange={(e) => updateAccidentInfos('description', e.target.value)}
        />

        <Input
          id="file"
          type="file"
          label="Foto ou vídeo"
          onChange={(e) => {
            updateAccidentInfos('file', e.target.files[0])
          }}
        />

        {loading && <span>Enviando arquivo...</span>}

        <Button type="submit" disabled={loading}>
          Salvar
        </Button>
      </Form>
    </Container>
  );
};

export default AccidentForm;
