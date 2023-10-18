import { gql } from "@apollo/client";

// gql to query for the user's own data
export const GET_ME = gql`
{
    me {
        _id
        username
        email
        bookCount
        savedBooks {
                bookId
                authors
                title
                decription
                image
                link
        }
    }
}
`;