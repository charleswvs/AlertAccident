import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { Container, Title, ButtonContent } from './style';

const Home = () => {
  const navigate = useNavigate();

  const handleChangePage = () => {
    navigate('/cadastrar-acidente');
  };

  return (
    <Container>
      <Title>Alerta acidente</Title>
      <ButtonContent onClick={() => handleChangePage()}>
        <Button>Reportar</Button>
      </ButtonContent>
    </Container>
  );
};

export default Home;
