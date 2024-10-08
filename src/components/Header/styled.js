import styled from 'styled-components'

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 7vh;
    background-color: #4F4F4F;
    color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 50px;
    }

    a {
        color: white;
    }
`