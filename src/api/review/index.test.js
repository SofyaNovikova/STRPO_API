import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Review } from '.'

const app = () => express(apiRoot, routes)

let review

beforeEach(async () => {
  review = await Review.create({})
})

test('POST /reviews 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ bookId: 'test', author: 'test', content: 'test', rate: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.bookId).toEqual('test')
  expect(body.author).toEqual('test')
  expect(body.content).toEqual('test')
  expect(body.rate).toEqual('test')
})

test('GET /reviews 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /reviews/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${review.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(review.id)
})

test('GET /reviews/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /reviews/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${review.id}`)
    .send({ bookId: 'test', author: 'test', content: 'test', rate: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(review.id)
  expect(body.bookId).toEqual('test')
  expect(body.author).toEqual('test')
  expect(body.content).toEqual('test')
  expect(body.rate).toEqual('test')
})

test('PUT /reviews/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ bookId: 'test', author: 'test', content: 'test', rate: 'test' })
  expect(status).toBe(404)
})

test('DELETE /reviews/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${review.id}`)
  expect(status).toBe(204)
})

test('DELETE /reviews/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
