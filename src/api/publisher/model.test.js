import { Publisher } from '.'

let publisher

beforeEach(async () => {
  publisher = await Publisher.create({ name: 'test', address: 'test', content: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = publisher.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(publisher.id)
    expect(view.name).toBe(publisher.name)
    expect(view.address).toBe(publisher.address)
    expect(view.content).toBe(publisher.content)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = publisher.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(publisher.id)
    expect(view.name).toBe(publisher.name)
    expect(view.address).toBe(publisher.address)
    expect(view.content).toBe(publisher.content)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
