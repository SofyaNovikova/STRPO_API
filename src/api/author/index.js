import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Author, { schema } from './model'

const router = new Router()
const { name, content, years, photo } = schema.tree

/**
 * @api {post} /authors Create author
 * @apiName CreateAuthor
 * @apiGroup Author
 * @apiParam name Author's name.
 * @apiParam content Author's content.
 * @apiParam years Author's years.
 * @apiParam photo Author's photo.
 * @apiSuccess {Object} author Author's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Author not found.
 */
router.post('/',
  body({ name, content, years, photo }),
  create)

/**
 * @api {get} /authors Retrieve authors
 * @apiName RetrieveAuthors
 * @apiGroup Author
 * @apiUse listParams
 * @apiSuccess {Object[]} authors List of authors.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /authors/:id Retrieve author
 * @apiName RetrieveAuthor
 * @apiGroup Author
 * @apiSuccess {Object} author Author's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Author not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /authors/:id Update author
 * @apiName UpdateAuthor
 * @apiGroup Author
 * @apiParam name Author's name.
 * @apiParam content Author's content.
 * @apiParam years Author's years.
 * @apiParam photo Author's photo.
 * @apiSuccess {Object} author Author's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Author not found.
 */
router.put('/:id',
  body({ name, content, years, photo }),
  update)

/**
 * @api {delete} /authors/:id Delete author
 * @apiName DeleteAuthor
 * @apiGroup Author
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Author not found.
 */
router.delete('/:id',
  destroy)

export default router
