const { Schema } = require('mongoose')

const Property = new Schema(
  {
    image: { type: String, required: true },
    price: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    mlsNum: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = Property
