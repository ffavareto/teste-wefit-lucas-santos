import styled from "styled-components";

export const RowContainer = styled.tr`

    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin-bottom: 16px;


    td {
        flex: 1;
        text-align: center;
        font-size: 14px;
        font-weight: 700;
    }

    td:first-child {
        text-align: inherit;
    }

    td:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    input {
        width: 44px;
    }

    img {
        width: 90px;
    }

    button {
        cursor: pointer;
        background: transparent;
        border: none;
    }

    button img {
        width: 14px;
    }

`;

export const AmountContainer = styled.td`
    display: flex;
    justify-content: center;
    gap: 4px;
    align-items: center;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    button:disabled {
        cursor: not-allowed;
    }
`;