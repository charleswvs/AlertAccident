import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Container, Title, ButtonContent, ButtonContainer } from "./style";

const Home = () => {
  const navigate = useNavigate();

  const handleChangePage = () => {
    navigate("/cadastrar-acidente");
  };

  const handleChangePageToRelatorio = () => {
    navigate("/report");
  };

  return (
    <Container>
      <Title>Alerta acidente</Title>
      <ButtonContainer>
        <ButtonContent onClick={() => handleChangePage()}>
          <Button>Reportar</Button>
        </ButtonContent>
        <ButtonContent onClick={() => handleChangePageToRelatorio()}>
          <Button>Relatório</Button>
        </ButtonContent>
      </ButtonContainer>
    </Container>
  );
};

export default Home;
