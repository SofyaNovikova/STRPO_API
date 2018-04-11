import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Genre, { schema } from './model'

const router = new Router()
const { name, content } = schema.tree

/**
 * @api {post} /genres Create genre
 * @apiName CreateGenre
 * @apiGroup Genre
 * @apiParam name Genre's name.
 * @apiParam content Genre's content.
 * @apiSuccess {Object} genre Genre's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Genre not found.
 */
router.post('/',
  body({ name, content }),
  create)

/**
 * @api {get} /genres Retrieve genres
 * @apiName RetrieveGenres
 * @apiGroup Genre
 * @apiUse listParams
 * @apiSuccess {Object[]} genres List of genres.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /genres/:id Retrieve genre
 * @apiName RetrieveGenre
 * @apiGroup Genre
 * @apiSuccess {Object} genre Genre's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Genre not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /genres/:id Update genre
 * @apiName UpdateGenre
 * @apiGroup Genre
 * @apiParam name Genre's name.
 * @apiParam content Genre's content.
 * @apiSuccess {Object} genre Genre's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Genre not found.
 */
router.put('/:id',
  body({ name, content }),
  update)

/**
 * @api {delete} /genres/:id Delete genre
 * @apiName DeleteGenre
 * @apiGroup Genre
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Genre not found.
 */
router.delete('/:id',
  destroy)

export default router
