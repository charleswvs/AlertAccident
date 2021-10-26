import Button from '../../components/Button';
import { Container, Title, ButtonContent } from './style';

const Home = () => {
  return (
    <Container>
      <Title>Alerta acidente</Title>
      <ButtonContent>
        <Button>Reportar</Button>
      </ButtonContent>
    </Container>
  );
};

export default Home;
