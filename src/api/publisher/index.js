import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Publisher, { schema } from './model'

const router = new Router()
const { name, latitude, longitude, content } = schema.tree

/**
 * @api {post} /publishers Create publisher
 * @apiName CreatePublisher
 * @apiGroup Publisher
 * @apiParam name Publisher's name.
 * @apiParam address Publisher's address.
 * @apiParam content Publisher's content.
 * @apiSuccess {Object} publisher Publisher's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Publisher not found.
 */
router.post('/',
  body({ name, longitude, latitude, content }),
  create)

/**
 * @api {get} /publishers Retrieve publishers
 * @apiName RetrievePublishers
 * @apiGroup Publisher
 * @apiUse listParams
 * @apiSuccess {Object[]} publishers List of publishers.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /publishers/:id Retrieve publisher
 * @apiName RetrievePublisher
 * @apiGroup Publisher
 * @apiSuccess {Object} publisher Publisher's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Publisher not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /publishers/:id Update publisher
 * @apiName UpdatePublisher
 * @apiGroup Publisher
 * @apiParam name Publisher's name.
 * @apiParam address Publisher's address.
 * @apiParam content Publisher's content.
 * @apiSuccess {Object} publisher Publisher's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Publisher not found.
 */
router.put('/:id',
  body({ name, longitude, latitude, content }),
  update)

/**
 * @api {delete} /publishers/:id Delete publisher
 * @apiName DeletePublisher
 * @apiGroup Publisher
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Publisher not found.
 */
router.delete('/:id',
  destroy)

export default router
