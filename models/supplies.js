const { Schema, model, Types } = require("mongoose");

const supplySchema = new Schema(
  {
    item: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    qty: {
      type: Number,
      required: true
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Supplies = mongoose.model('supplies', supplySchema);

module.exports = Supplies;