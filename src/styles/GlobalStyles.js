import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }

    html, body, #root {
        height: 100%;
    }

    .container {
        display: flex;
        height: 93vh;
    }

    .menu {
        left: 0;
        width: 250px;
        height: 100%;
    }

    .content {
        flex-grow: 1;
        padding: 20px;
    }

    button {
        font-size: 15px;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
        background-color: #1E90FF;
        color: white;
        border: none;
    }

    button:hover {
        background-color: rgba(30,170,255);
    }
`