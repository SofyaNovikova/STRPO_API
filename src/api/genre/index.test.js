import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Genre } from '.'

const app = () => express(apiRoot, routes)

let genre

beforeEach(async () => {
  genre = await Genre.create({})
})

test('POST /genres 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', content: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.content).toEqual('test')
})

test('GET /genres 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /genres/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${genre.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(genre.id)
})

test('GET /genres/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /genres/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${genre.id}`)
    .send({ name: 'test', content: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(genre.id)
  expect(body.name).toEqual('test')
  expect(body.content).toEqual('test')
})

test('PUT /genres/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', content: 'test' })
  expect(status).toBe(404)
})

test('DELETE /genres/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${genre.id}`)
  expect(status).toBe(204)
})

test('DELETE /genres/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
