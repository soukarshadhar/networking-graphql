export const typeDefs = `
  type Author {
    id: ID!
    name: String!
    books: [Book]
  }

  type Book {
    id: ID!
    title: String!
    publishYear: Int
    author: Author
  }

  type Query {
    authors: [Author]
    books: [Book]
  }

  type Mutation {
    addBook(title: String!, publishYear: Int!, authorId: Int!): Book
    addAuthor(name: String!, bookIds: [Int!]!): Author
  }
`;
