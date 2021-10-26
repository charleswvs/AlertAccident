import { TextAreaStyled } from "./style";

const TextArea = ({label, ...rest}) => 
    <>
        {label && <label style={{fontSize: '14px'}}>{label}</label>}
        <TextAreaStyled  {...rest}/>
    </>

export default TextArea;