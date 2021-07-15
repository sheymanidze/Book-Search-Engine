import { gql } from '@apollo/client';

export const QUERY_USERS = gql `
query allUsers {
  users {
    _id
    username
    email
    savedBooks {
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

export const QUERY_USER = gql`
query user ($username: String!) {
  user(username: $username) {
    _id
    username
    email
    savedBooks {
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

export const QUERY_BOOKS = gql`
query getBooks {
  savedBooks {
    bookId
    authors
    title
    description
    link
    image
  }
}
`;

export const QUERY_SINGLE_BOOK = gql`
query getSingleBook($bookId: ID!) {
  book(bookId: $bookId) {
    _id
    username
    savedBooks {
      bookId
      title
      authors
      description
      image
      link
    }
  }
}
`;