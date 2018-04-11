import mongoose, { Schema } from 'mongoose'

const reviewSchema = new Schema({
  bookId: {
    type: String
  },
  author: {
    type: String
  },
  content: {
    type: String
  },
  rate: {
    type: Number
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

reviewSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      bookId: this.bookId,
      author: this.author,
      content: this.content,
      rate: this.rate,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Review', reviewSchema)

export const schema = model.schema
export default model
