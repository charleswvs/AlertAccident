import {InputStyled} from './style';

const Input = ({height, marginBottom, label = '', ...rest}) =>
    <>
        {label && <label style={{fontSize: '14px'}}>{label}</label>}
        <InputStyled height={height} marginBottom={marginBottom} {...rest} />
    </>

export default Input;