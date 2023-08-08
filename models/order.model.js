const mongoose = require("mongoose");

const OrderShcema = new mongoose.Schema(
  {
    userID: {
      type: String,
      require: true,
    },
    // customID: {
    //   type: String,
    //   require: true,
    // },
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
    quantity: {
      type: Number,
      require: true,
    },
    total: {
      type: Number,
      require: true,
    },
    subTotal: {
      type: Number,
      require: true,
    },
    deliveryStatus: {
      type: String,
      default: "pending",
      enum: ["pending", "open", "closed"],
    },
    paymentStatus: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const OrderModel = mongoose.model("order", OrderShcema);

module.exports = {
  OrderModel,
};
