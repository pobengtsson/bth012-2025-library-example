export class Library {
  libraryBookList = [
    { title: 'How any student can learn javascrip in their sleep' },
    { title: 'Ten greatest game characters ever and ther family' },
    { title: 'Ten tales of dragons' },
  ]

  listBooks() {
    return this.libraryBookList
  }

  addBook(book) {
    this.libraryBookList.push(book)
  }

  borrowBook(requestedBook) {
    const libraryBook = this.libraryBookList
      .find((book) => book.title === requestedBook.title)

    if (!libraryBook)
      return 'Error: no book with that title.'

    if (libraryBook.isBorrowed)
      return 'Error: book out for loan.'

    // book is avaialable for loan
    libraryBook.isBorrowed = true // mark is as loaned out
    return libraryBook
  }
}
