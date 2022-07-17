import styled from "styled-components";

export const CartContainer = styled.div`
    width: 734px;
    background: #fff;
    margin: auto;
    border-radius: 4px;
    padding: 12px;

    hr {
        margin: 16px auto;
    }
`;

export const TableContainer = styled.table`
    display: flex;
    flex-direction: column;

    thead {
        padding: 8px 0;

        tr {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 116px;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            color: #999;
        }
    }

    tbody {
        display: flex;
        flex-direction: column;
    }
`;

export const BuyContainer = styled.div`
    display: flex;
    justify-content: space-between;

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

        a {
            font-size: 14px;
            color: #fff;
            text-decoration: none;
        }
    }

    div {
        display: flex;
        align-items: flex-end;
        gap: 4px;

        span {
            font-size: 14px;
            text-transform: uppercase;
            font-weight: 700;
            color: #999;
        }

        p {
            font-size: 24px;
            font-weight: 700;
            line-height: 1;
        }
    }
`;