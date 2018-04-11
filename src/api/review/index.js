import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Review, { schema } from './model'

const router = new Router()
const { bookId, author, content, rate } = schema.tree

/**
 * @api {post} /reviews Create review
 * @apiName CreateReview
 * @apiGroup Review
 * @apiParam bookId Review's bookId.
 * @apiParam author Review's author.
 * @apiParam content Review's content.
 * @apiParam rate Review's rate.
 * @apiSuccess {Object} review Review's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Review not found.
 */
router.post('/',
  body({ bookId, author, content, rate }),
  create)

/**
 * @api {get} /reviews Retrieve reviews
 * @apiName RetrieveReviews
 * @apiGroup Review
 * @apiUse listParams
 * @apiSuccess {Object[]} reviews List of reviews.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /reviews/:id Retrieve review
 * @apiName RetrieveReview
 * @apiGroup Review
 * @apiSuccess {Object} review Review's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Review not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /reviews/:id Update review
 * @apiName UpdateReview
 * @apiGroup Review
 * @apiParam bookId Review's bookId.
 * @apiParam author Review's author.
 * @apiParam content Review's content.
 * @apiParam rate Review's rate.
 * @apiSuccess {Object} review Review's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Review not found.
 */
router.put('/:id',
  body({ bookId, author, content, rate }),
  update)

/**
 * @api {delete} /reviews/:id Delete review
 * @apiName DeleteReview
 * @apiGroup Review
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Review not found.
 */
router.delete('/:id',
  destroy)

export default router
