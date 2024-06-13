const authors = [
  { id: 1, name: "Geetanjali Shree", books: [1, 4] },
  { id: 2, name: "S. Hareesh", books: [2] },
  { id: 3, name: "Jhumpa Lahiri", books: [3, 5] },
];

const books = [
  { id: 1, title: "Tomb of Sand", publishYear: 2022, authorId: 1 },
  { id: 2, title: "Adam", publishYear: 2022, authorId: 2 },
  { id: 3, title: "Whereabouts", publishYear: 2018, authorId: 3 },
  {
    id: 4,
    title: "Landscapes of Loss: The Story of an Indian Drought",
    publishYear: 2021,
    authorId: 1,
  },
  {
    id: 5,
    title: "Economy and Society ",
    publishYear: 1922,
    authorId: 3,
  },
];

export const resolvers = {
  Book: {
    author: (parent) => {
      return authors.find((i) => i.id === parent.authorId);
    },
  },
  Author: {
    books: (parent) => {
      return books.filter((book) => parent.books.includes(book.id));
    },
  },
  Query: {
    authors: () => authors,
    books: () => books,
  },
  Mutation: {
    addBook: (parent, args) => {
      const newBook = {
        id: books[books.length - 1].id + 1,
        title: args.title,
        publishYear: args.publishYear,
        authorId: args.authorId,
      };
      books.push(newBook);
      return newBook;
    },
    addAuthor: (parent, args) => {
      const newAuthor = {
        id: authors[authors.length - 1].id + 1,
        name: args.name,
        books: args.bookIds,
      };
      authors.push(newAuthor);
      return newAuthor;
    },
  },
};
