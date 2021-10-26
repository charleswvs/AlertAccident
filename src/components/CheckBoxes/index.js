import Input from "../Input";
import { Container, InputRadio } from "./style";

const Checkboxes = () => 
<>
    <label style={{fontSize: "14px", marginTop: '10px', marginBottom: '10px'}}>Foto ou vídeo</label>
    <Container>
        <InputRadio>
        <input  id='1' type="radio" />
        <label htmlFor='1' style={{fontSize: "12px", marginLeft: '15px'}}>Fazer upload de arquivo</label>
        </InputRadio>

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 'auto'}}>
        <Input style={{margin: 0}} id='2' type="radio" />
        <label htmlFor='2' style={{fontSize: "12px",marginLeft: '15px'}}>Gravar ao vivo</label>
        </div>
    </Container>
</>
export default Checkboxes;