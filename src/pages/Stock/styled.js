import { styled } from 'styled-components'

export const Container = styled.div`
    h1 {
        margin-bottom: 30px;
    }
`

export const FormNewCategory = styled.form`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-weight: bold;

    input {
        margin: 0px 20px 0px 5px;
        padding: 3px 8px;
        font-size: 18px;
    }

    button {
        margin-right: 15px;
    }
`

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;

    th, td {
        padding: 8px;
        text-align: left;
    }

    tr {
        border-bottom: 1px solid #A9A9A9;
    }
`