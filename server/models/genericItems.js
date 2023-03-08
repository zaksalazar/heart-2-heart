const { Schema, model } = require("mongoose");

const genericItemsSchema = new Schema(
  {
{
  name: "Baby Formula",
  category: "Baby"
}

{
  Name: "diapers",
  category: "baby"
},

{
  name: "Socks",
  category: "clothing"
},

{
  name: "Propane",
  category: "home goods"
},

{
  name: "Sleeping Bag",
  category: "camping"
},

{
  name: "tooth brush",
  category: "hygiene"

},
}
);

const generticItems = model("generic", genericItemsSchema);

module.exports = genertic; 