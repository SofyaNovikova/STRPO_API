import { success, notFound } from '../../services/response/'
import { Book } from '.'
import { Author } from '../author';
import { Genre } from '../genre';
import { Publisher } from '../publisher';
import { Review } from '../review';

export const create = ({ bodymen: { body } }, res, next) =>
  Book.create(body)
    .then((book) => book.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) => {
  Book.find(query, select, cursor)
    .then((books) => books.map((book) => book.view()))
    .then(success(res))
    .catch(next)
}

export const show = ({ params }, res, next) => {
  Book.findById(params.id)
    .then(notFound(res))
    .then((book) => {
      Author.findById(book.authorId)
        .then((author) => {
          Genre.findById(book.genreId)
            .then((genre) => {
              Publisher.findById(book.publisherId)
                .then((publisher) => {
                  Review.find()
                    .then((reviews) => {
                      const bookReviews = book ? reviews.filter(review => review.bookId === book.id) : [];
                      return book ? book.expand(author, genre, publisher, bookReviews) : null
                    })
                    .then(success(res))
                    .catch(next)
                })
                .catch(next)
            })
            .catch(next)
        })
        .catch(next)
    })
    .catch(next)
}

export const update = ({ bodymen: { body }, params }, res, next) =>
  Book.findById(params.id)
    .then(notFound(res))
    .then((book) => book ? Object.assign(book, body).save() : null)
    .then((book) => book ? book.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Book.findById(params.id)
    .then(notFound(res))
    .then((book) => book ? book.remove() : null)
    .then(success(res, 204))
    .catch(next)
