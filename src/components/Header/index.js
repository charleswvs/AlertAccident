import { HeaderContainer } from './style';
import Icon from '../../assets/icon.png';

const Header = ({ children }) => {
  return (
    <HeaderContainer>
      <img src={Icon} alt="Icon" />
      <h1>{children}</h1>
    </HeaderContainer>
  );
};

export default Header;
