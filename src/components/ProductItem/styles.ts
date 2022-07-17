import styled from "styled-components";

export const ProductContainer = styled.div`
    background: #fff;
    height: 300px;
    width: 230px;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const ProductInfoContainer = styled.div`
    align-items: center;
    font-size: 12px;
    font-weight: 700;
    margin-top: 8px;
`;

export const BuyContainer = styled.div`
    align-items: flex-start;

    p {
        font-size: 10px;
        font-weight: 700;
        margin-top: 8px;
        margin-bottom: 8px;
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

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        cursor: pointer;
    }

    button span {
        font-size: 12px;
    }

    button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;