import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    border: 1px solid #FAFAFA60;
    background-color: #ffffff22;
    border-radius: 25px;
    padding: 20px 25px;
    padding-top: 10px;
    margin-bottom: 15px;
    font-family: 'Roboto';

    .mainInfos {
        display: grid;
        grid-template-columns: 1fr 3fr 3fr;
        margin-bottom: 15px;
    }

    .secondaryInfos, .futureDays {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .names p:first-child, .temps p:first-child {
        font-size: 2.5rem;
        font-weight: 500;
    }

    .names p:last-child {
        text-align: left;
    }

    .condition, .names {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .condition img {
        width: 100px;
        margin-left: -10px;
    }

    .conditionTomorrow img, .conditionAfterTomorrow img {
        width: 60px;
        margin-right: 5px;
    }

    .weatherCard img {
        transition: transform .2s;
    }

    .weatherCard img:hover {
        transform: scale(1.1);
    }

    .titleTomorrow,  .titleAfterTomorrow {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
        font-weight: 700;
    }

    .tomorrow {
        border-right: 1.5px solid #ffffff44;
        margin-top: 15px;
    }

    .afterTomorrow {
        margin-top: 15px;
    }

    .firstRow {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
    }

    .tempsTomorrow,  .tempsAfterTomorrow {
        font-size: 1.2rem;
    }

    .tempsTomorrow p,  .tempsAfterTomorrow p {
        display: flex;
        align-content: center;
        justify-content: flex-end;
    }

    .arrows {
        width: 25px;
        margin-left: 10px;
        padding-bottom: 5px;
    }

    .temps {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
    }

    .temps p {
        font-size: 1rem;
    }

    .secondaryInfos {
        margin-bottom: 15px;
    }

    .sun {
        text-align: left;
        font-size: .9rem;
    }

    .sunTomorrow, .sunAfterTomorrow {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: .9rem;
        margin-bottom: 10px;
    }

    .moon {
        display: flex;
        align-items: center;
        justify-content: end;
        font-size: .9rem;
    }

    .moon img, .moonTomorrow img, .moonAfterTomorrow img {
        width: 30px;
        margin-left: 10px;
    }

    .moonTomorrow, .moonAfterTomorrow {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .9rem;
    }

    hr {
        opacity: .4;
    }

    @media (max-width: 600px) {

        .mainInfos {
            grid-template-columns: 1fr 3fr;
        }

        .futureDays {
            grid-template-columns: 1fr;
        }

        .tomorrow {
            border-right: none;
            padding-bottom: 15px;
            border-bottom: 1.5px solid #ffffff44;
        }

        .temps {
            grid-column-start: span 2;
        }
    }

    @media (max-width: 300px) {
        width: 78%;
    }
`