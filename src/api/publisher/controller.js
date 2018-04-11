import { success, notFound } from '../../services/response/'
import { Publisher } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Publisher.create(body)
    .then((publisher) => publisher.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Publisher.find(query, select, cursor)
    .then((publishers) => publishers.map((publisher) => publisher.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Publisher.findById(params.id)
    .then(notFound(res))
    .then((publisher) => publisher ? publisher.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Publisher.findById(params.id)
    .then(notFound(res))
    .then((publisher) => publisher ? Object.assign(publisher, body).save() : null)
    .then((publisher) => publisher ? publisher.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Publisher.findById(params.id)
    .then(notFound(res))
    .then((publisher) => publisher ? publisher.remove() : null)
    .then(success(res, 204))
    .catch(next)
