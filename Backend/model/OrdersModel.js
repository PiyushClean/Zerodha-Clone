const { model } = require("mongoose");

const OrrdersSchema = require("../schema/OrdersSchema.js");

const OrdersModel = model("order", OrrdersSchema);

module.exports = { OrdersModel };