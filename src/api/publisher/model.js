import mongoose, { Schema } from 'mongoose'

const publisherSchema = new Schema({
  name: {
    type: String
  },
  longitude: {
    type: Number
  },
  latitude: {
    type: Number
  },
  content: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

publisherSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      longitude: this.longitude,
      latitude: this.latitude,
      content: this.content,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Publisher', publisherSchema)

export const schema = model.schema
export default model
