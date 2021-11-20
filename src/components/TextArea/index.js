import { TextAreaStyled } from "./style";

const TextArea = ({label, id, ...rest}) => 
    <>
        {label && <label id={id} style={{fontSize: '14px'}}>{label}</label>}
        <TextAreaStyled id={id}  {...rest}/>
    </>

export default TextArea;