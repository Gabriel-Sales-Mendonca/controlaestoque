import { styled } from 'styled-components'

export const Container = styled.div`
    h1 {
        margin-bottom: 30px;
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

    tr:hover {
        background-color: #E0FFFF;
    }

    .amount {
        display: flex;
        align-items: center;

        input {
            width: 25%;
        }
    }

    .edit {
        cursor: pointer;
        margin: 0px 5px;
    }

    .check {
        color: #32CD32;
    }

    .check:hover {
        color: green;
    }

    .cancel {
        color: #FF6347;
    }

    .cancel:hover {
        color: red;
    }
`