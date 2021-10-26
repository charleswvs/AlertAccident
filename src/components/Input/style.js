import styled from "styled-components";

export const InputStyled = styled.input`
    height: ${({height}) => height ?? '1.4rem'};
    margin-bottom: ${({marginBottom}) => marginBottom ?? '0px'};
    background: #EFEFEF;
    border: 1px solid #A4A4A4;
    border-radius: 4px;
    padding: 5px;
    outline: 0;
`;