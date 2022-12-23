import styled from "styled-components";

export const ButtonContainer = styled.button`
    color: #19203B;
    background-color: #FFFFFF;
    border: none;
    border-radius: 20px;
    font-size: 1.4rem;
    font-weight: 700;
    height: 62px;
    width: 10%;
    margin: 20px;
    margin-bottom: 40px;

    &:hover {
        background-color: #e4e9f0;
        cursor: pointer;
    }

    @media (max-width: 1050px) {
        width: 30%;
    }

    @media (max-width: 600px) {
        margin-bottom: 20px;
        height: 50px;
    }

    @media (max-width: 300px) {
        width: 40%;
    }
`