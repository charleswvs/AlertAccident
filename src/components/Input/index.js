import {InputStyled} from './style';

const Input = ({height, marginBottom, label = '', id, ...rest}) =>
    <>
        {label && <label htmlFor={id} style={{fontSize: '14px'}}>{label}</label>}
        <InputStyled id={id} height={height} marginBottom={marginBottom} {...rest} />
    </>

export default Input;