import { Author } from '.'

let author

beforeEach(async () => {
  author = await Author.create({ name: 'test', content: 'test', years: 'test', photo: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = author.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(author.id)
    expect(view.name).toBe(author.name)
    expect(view.content).toBe(author.content)
    expect(view.years).toBe(author.years)
    expect(view.photo).toBe(author.photo)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = author.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(author.id)
    expect(view.name).toBe(author.name)
    expect(view.content).toBe(author.content)
    expect(view.years).toBe(author.years)
    expect(view.photo).toBe(author.photo)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
