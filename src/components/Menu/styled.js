import styled from 'styled-components'

export const Nav = styled.nav`
    background-color: #1E90FF;
    color: white;

    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
    }

    h1 {
        width: 100%;
        text-align: center;
        padding: 5px 2px;
        border-bottom: 1px solid #F5FFFA;
    }

    ul {
        list-style-type: none;
    }

    li {
        font-size: 20px;
        text-align: center;
        padding: 10px 0;
        cursor: pointer;
    }

    li:hover {
        background-color: rgba(30,180,255);
    }
`