import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Publisher } from '.'

const app = () => express(apiRoot, routes)

let publisher

beforeEach(async () => {
  publisher = await Publisher.create({})
})

test('POST /publishers 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', address: 'test', content: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.address).toEqual('test')
  expect(body.content).toEqual('test')
})

test('GET /publishers 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /publishers/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${publisher.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(publisher.id)
})

test('GET /publishers/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /publishers/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${publisher.id}`)
    .send({ name: 'test', address: 'test', content: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(publisher.id)
  expect(body.name).toEqual('test')
  expect(body.address).toEqual('test')
  expect(body.content).toEqual('test')
})

test('PUT /publishers/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', address: 'test', content: 'test' })
  expect(status).toBe(404)
})

test('DELETE /publishers/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${publisher.id}`)
  expect(status).toBe(204)
})

test('DELETE /publishers/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
