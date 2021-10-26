import { ButtonStyled } from "./style";

const Button = ({children, ...rest}) => 
    <ButtonStyled>{children}</ButtonStyled>

export default Button;