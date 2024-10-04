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

    .amount {
        display: flex;
        align-items: center;

        input {
            width: 25%;
        }
    }
`