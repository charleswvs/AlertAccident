import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import { Container, Form } from './style';

const AccidentForm = () => {
  const [accidentInfos, setAccidentInfos] = useState({
    title: '',
    description: '',
    file: '',
    localization: ''
  })

  const updateAccidentInfos = (proptype, value) => {
    setAccidentInfos(prevState => ({
      ...prevState,
      [proptype]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        updateAccidentInfos('localization', `${position.coords.latitude},${position.coords.longitude}`)});
    } else {
      alert('ok')
    }
  }, [])

  return (
    <Container>
      <Header />
      <Form onSubmit={handleSubmit}>
        <Input
          id="title"
          placeholder="Ex.: Acidente de carro"
          label="Nome do evento"
          marginBottom="1.5rem"
          value={accidentInfos.title}
          onChange={value => updateAccidentInfos('title', value)}
        />
        <TextArea
          id="description"
          placeholder="Ex.: Batida entre dois carros, com duas pessoas feridas"
          label="Detalhes do acidente"
          value={accidentInfos.description}
          onChange={value => updateAccidentInfos('description', value)}
        />
        <img id='teste' src={`https://maps.googleapis.com/maps/api/staticmap?center=${accidentInfos.localization}&zoom=14&size=400x300&sensor=false`} alt=''/>
        <Input 
          id="file"
          type="file" 
          label="Foto ou vídeo"
          value={accidentInfos.file}
          onChange={value => updateAccidentInfos('file', value)}
        />

        <Button type="submit">Salvar</Button>
      </Form>
    </Container>
  );
};

export default AccidentForm;
