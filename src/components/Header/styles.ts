import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 734px;
    height: 72px;
    margin: auto;
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    color: #fff;

    a {
        text-decoration: none;
        color: #fff;
    }

    span {
        color: #999999;
    }

    >div>a {
        display: flex;
        gap: 10px;
    }

    >div>a>div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
`;