const { Schema, model } = require("mongoose");
const { modelName } = require("./genericItems");

const genericItemsSchema = new Schema(
  {
{
  name: "Baby Formula",
  category: "Baby"
},

{
  name: "diapers",
  category: "baby"
},

{
  name: "socks",
  category: "clothing"
},

{
  name: "propane",
  category: "home goods"
},

{
  name: "sleeping Bag",
  category: "camping"
},

{
  name: "tooth brush",
  category: "hygiene"

},
);

const generticItems = model("generic", genericItemsSchema);

module.exports = genertic; 