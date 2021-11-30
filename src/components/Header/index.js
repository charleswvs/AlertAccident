import { HeaderContainer } from './style';
import Icon from '../../assets/icon.png';

const Header = ({ title }) => {

    return(
        <HeaderContainer>
            <img src={Icon} alt="Icon" />
            <h1>{title}</h1>
        </HeaderContainer>
    );
}

export default Header;