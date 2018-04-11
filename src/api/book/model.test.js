import { Book } from '.'

let book

beforeEach(async () => {
  book = await Book.create({ name: 'test', content: 'test', genreId: 'test', authorId: 'test', rating: 'test', photo: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = book.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(book.id)
    expect(view.name).toBe(book.name)
    expect(view.content).toBe(book.content)
    expect(view.genreId).toBe(book.genreId)
    expect(view.authorId).toBe(book.authorId)
    expect(view.rating).toBe(book.rating)
    expect(view.photo).toBe(book.photo)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = book.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(book.id)
    expect(view.name).toBe(book.name)
    expect(view.content).toBe(book.content)
    expect(view.genreId).toBe(book.genreId)
    expect(view.authorId).toBe(book.authorId)
    expect(view.rating).toBe(book.rating)
    expect(view.photo).toBe(book.photo)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
