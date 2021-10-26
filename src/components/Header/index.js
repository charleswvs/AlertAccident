import { HeaderContainer } from './style';
import Icon from '../../assets/icon.png';

const Header = () => {

    return(
        <HeaderContainer>
            <img src={Icon} alt="Icon" />
            <h1>Registrar Acidente</h1>
        </HeaderContainer>
    );
}

export default Header;