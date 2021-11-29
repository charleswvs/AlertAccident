import Button from '../../components/Button';
import Checkboxes from '../../components/CheckBoxes';
import Header from '../../components/Header';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import { Container, Form } from './style';

const AccidentForm = () => {
  return (
    <Container>
      <Header />
      <Form>
        <Input
          placeholder="Ex.: Acidente de carro"
          label="Nome do evento"
          marginBottom="1.5rem"
        />

        <TextArea
          placeholder="Ex.: Batida entre dois carros, com duas pessoas feridas"
          label="Detalhes do acidente"
        />

        <Checkboxes />
        <Input type="file" />

        <Button type="submit">Salvar</Button>
      </Form>
    </Container>
  );
};

export default AccidentForm;
