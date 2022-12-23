import styled from "styled-components";

export const InputContainer = styled.div`
    border: 1px solid #FAFAFA;
    border-radius: 20px;
    text-align: center;
    max-width: 600px;
    height: 62px;
    width: 40%;
    margin: 30px 20px 0px 20px;
    
    input {
        background: transparent;
        border: 0;
        width: 90%;
        text-align: center;
        height: 62px;
        padding: 0 20px;
        color: #FFFFFF;
        font-size: 1.5rem;
    }

    input::placeholder {
        color: #ffffff66;
    }

    input:focus {
        outline: none;
    }

    @media (max-width: 1050px) {
        width: 90%;

    }
`