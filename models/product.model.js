const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    suplier: {
      type: String,
      require: true,
    },
    imageUrl: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    productLocation: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = {
  ProductModel,
};
