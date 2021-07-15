import { gql } from '@apollo/client';

export const QUERY_USERS = gql `
query allUsers {
  users {
    _id
    username
    email
    svaedBooks {
      bookId
      authprs
      title
      description
      link
      image
    }
  }
}
`;