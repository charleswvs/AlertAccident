import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const InputRadio = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    input[type = radio]{
        display: none !important;
    }

    input + label::before {
        border: 1px solid red;    
        content: "\00a0";    
   
        font: 16px/1em sans-serif;    
        height: 16px;    
        margin: 0 .25em 0 0;    
        padding:0;    
        vertical-align: top;    
        width: 16px;    
        border-radius:4px;
    }
`;
