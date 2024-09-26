import { styled } from 'styled-components'

export const Form = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 30px;
    width: 100%;
    max-width: 600px;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background-color: #fff;
    font-size: 18px;

    form {
        width: 100%;
    }

    input {
        font-size: 18px;
        width: 100%;
        padding: 10px 20px;
        margin: 5px 0px 15px 0px;
    }

    button {
        width: 100%;
        padding: 10px 20px;
    }
`