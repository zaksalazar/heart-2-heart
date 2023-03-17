const { Schema, model } = require("mongoose");

const supplySchema = new Schema(
  {
    recipientId: {
      //object id type for mongodb
      type: Schema.Types.ObjectId,
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    tags: [
      {
      type: String,
      }
    ],
    county: {
      type: String,
      require: true,
      enum: {
        values: ['Los Angeles', 'Orange', 'Riverside'],
        message: '{VALUE} is not supported'
      }
    },
    supplyImage: {
      type: String
    }
    // fulfilled: {
    //   type: Boolean,
    //   default: false,
    // },
    // items: [
    //   {
    //     name: String,
    //     description: String,
    //     quantity: Number,
    //     size: String,
    //     sponsorId: Schema.Types.ObjectId,
    //   },
    // ],
    // qty: {
    //   type: Number,
    //   required: true

    
  }
);

const Supply = model('Supply', supplySchema);

module.exports = Supply;
