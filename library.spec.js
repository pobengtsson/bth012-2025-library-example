import { describe, it, expect, beforeEach } from 'vitest'
import { Library } from './library'

describe('library', () => {
  describe('when newly created', () => {
    let library
    beforeEach(()=> {
      library = new Library()
    })
    describe('when listing books in the library', () => {
      it('should return an list of three books', () => {
        expect(library.listBooks()).toHaveLength(3)
      })
    })
    describe('when adding a book to the library', () => {
      it('has four books', () => {
        library.addBook({title: 'how to build a library'})
        expect(library.listBooks()).toHaveLength(4)
      })
    })
    describe('when borrowing an non-existing book', () => {
      it('returns an error message', () => {
        const maybeErrorMsg = library.borrowBook({title: 'The most wanted but not written book ever'})
        expect(maybeErrorMsg).toEqual('Error: no book with that title.')
      })
    })
    describe('when borrowing an available book', () => {
      it('returns the book', () => {
        const maybeBorrowedBook = library.borrowBook({ title: 'Ten tales of dragons'})
        expect(maybeBorrowedBook.title).toEqual('Ten tales of dragons')
      })
      describe('when trying to borrow the same book again', () => {
        it('returns an error message', () => {
          library.borrowBook({ title: 'Ten tales of dragons'})
          const maybeErrorMsg = library.borrowBook({ title: 'Ten tales of dragons'})
          expect(maybeErrorMsg).toEqual('Error: book out for loan.')
        })
      })
    })
  })
})
