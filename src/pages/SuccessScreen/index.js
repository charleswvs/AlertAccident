import Header from '../../components/Header';
import SuccessIcon from '../../assets/success.png'
import SharedIcon from '../../assets/shared.png'
import { Container, TextContainer } from './style';
import {useParams} from 'react-router-dom'

const SuccessScreen = () => {
    const { id } = useParams();
    return (
        <Container>
            <Header title="Confirmação do cadastro"/>

            <TextContainer>
                <span>Cadastro realizado com sucesso!</span>
                <img src={SuccessIcon} alt="Success" />
            </TextContainer>

            <span>Compartilhar</span>
            <img className="shared" src={SharedIcon} alt="Shared" onClick={()=> navigator.share({
                title: 'Alerta de acidente',
                text: "Alerta de acidente!\nEntre no link e fique por dentro do que aconteceu.\n",
                url: `https://master.d2kqln2w3t4a4i.amplifyapp.com/visualizar-acidente/${id}`
                })}/>
        </Container>
    )
}

export default SuccessScreen