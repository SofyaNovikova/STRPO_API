import mongoose, { Schema } from 'mongoose'

const bookSchema = new Schema({
  name: {
    type: String
  },
  content: {
    type: String
  },
  genreId: {
    type: String
  },
  authorId: {
    type: String
  },
  publisherId: {
    type: String
  },
  photo: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

bookSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      content: this.content,
      genreId: this.genreId,
      authorId: this.authorId,
      publisherId: this.publisherId,
      photo: this.photo,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }
    return full ? {
      ...view
      // add properties for a full view
    } : view
  },
  expand (author, genre, publisher, reviews) {
    const res = this.view();
    return {
      ...res,
      author: author ? {
        name: author.name,
        id: author.id
      } : undefined,
      genre: genre ? {
        name: genre.name,
        id: genre.id
      } : undefined,
      publisher: publisher ? {
        name: publisher.name,
        id: publisher.id
      } : undefined,
      reviews: reviews || []
    }
  }
}

const model = mongoose.model('Book', bookSchema)

export const schema = model.schema
export default model
