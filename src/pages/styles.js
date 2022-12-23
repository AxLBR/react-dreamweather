import styled from "styled-components";
import ItemCard from "../components/ItemCard";

export const Container = styled.div`
    width: 100%;
    height: auto;
    margin: 20px 0 0 0;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .logo {
        transition: transform .2s;
    }

    .logo:hover {
        transform: scale(1.05);
    }

    .error {
        font-size: 1.5rem;
        font-weight: 500;
        color: #f35c75
    }

    .containerCards {
        max-width: 700px;
        width: 100%;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 25px;
    }

    @media (max-width: 600px) {
        margin: 10px 0 0 0;

        .logo {
            width: 180px;
            height: 160px;
        }
    }
`