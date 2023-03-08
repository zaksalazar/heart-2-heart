const { Schema, model } = require("mongoose");

const supplySchema = new Schema(
  {
    recipientId: {
      //object id type for mongodb
      type: Schema.Types.ObjectId,
    },
    fulfilled: {
      type: Boolean,
      default: false,
    },
    items: [
      {
        name: String,
        description: String,
        quantity: Number,
        size: String,
        sponsorId: Schema.Types.ObjectId,
      },
    ],
    // qty: {
    //   type: Number,
    //   required: true

    description: {
      type: String,
    },
  }
);

const Supplies = model("supplies", supplySchema);

module.exports = Supplies;
