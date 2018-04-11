import { Review } from '.'

let review

beforeEach(async () => {
  review = await Review.create({ bookId: 'test', author: 'test', content: 'test', rate: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = review.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(review.id)
    expect(view.bookId).toBe(review.bookId)
    expect(view.author).toBe(review.author)
    expect(view.content).toBe(review.content)
    expect(view.rate).toBe(review.rate)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = review.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(review.id)
    expect(view.bookId).toBe(review.bookId)
    expect(view.author).toBe(review.author)
    expect(view.content).toBe(review.content)
    expect(view.rate).toBe(review.rate)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
