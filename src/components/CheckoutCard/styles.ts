import styled from "styled-components";

export const CheckoutCardContainer = styled.div`
    width: 734px;
    height: 530px;
    background: #fff;
    margin: auto;
    border-radius: 4px;
    padding: 62px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    h3  {
        font-size: 20px;
        text-align: center;
    }

    img {
        width: 295px;
    }

    button {
        background: #009EDD;
        text-transform: uppercase;
        height: 40px;
        width: 207px;
        border-radius: 4px;
        border: none;
        font-weight: 700;
        color: #fff;
        font-size: 14px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        cursor: pointer;
    }

    button a {
        font-size: 14px;
        color: #fff;
        text-decoration: none;
    }
`;