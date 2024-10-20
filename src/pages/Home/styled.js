import { styled } from 'styled-components'

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
        text-align: center;

        h2 {
            margin-top: 30px;
            color: red;
        }
    }

    .buttons {
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
    }

    button {
        background-color: green;
        padding: 20px 20px;
        font-size: 20px;
    }
`