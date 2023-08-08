const { OrderModel } = require("../models/order.model");

const getUserOrders = async (req, res) => {
  try {
    const order = await OrderModel.find({ userID: req.params.id }).populate({
      path: "productID",
      select: "-description -productLocation",
    });

    res.status(200).json(order);
  } catch (error) {
    res.staus(500).json(error);
  }
};

module.exports = { getUserOrders };
