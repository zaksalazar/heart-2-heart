const { Schema, model } = require("mongoose");
const { modelName } = require("./genericItems");

const genericItemsSchema = new Schema(
{
name: {type: String, required: true }, 

category: {type: String, }
},
);

const genericItems = model("generic", genericItemsSchema);

module.exports = genericItems; 