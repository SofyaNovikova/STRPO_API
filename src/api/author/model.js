import mongoose, { Schema } from 'mongoose'

const authorSchema = new Schema({
  name: {
    type: String
  },
  content: {
    type: String
  },
  years: {
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

authorSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      content: this.content,
      years: this.years,
      photo: this.photo,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  },
  expand (books) {
    const res = this.view();
    return {
      ...res,
      books: books.map(book => ({
        name: book.name,
        id: book.id
      }))
    }
  }
}

const model = mongoose.model('Author', authorSchema)

export const schema = model.schema
export default model
