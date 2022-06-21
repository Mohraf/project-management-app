import { gql } from "@apollo/client"

const GET_CLIENTS = gql`
    query GET_CLIENTS {
        clients {
            id
            name
            email
            phone
        }
    }
`

export { GET_CLIENTS };