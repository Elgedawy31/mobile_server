const { ProductModel } = require("../models/product.model");

const CreateProduct = async (req, res, next) => {
  try {
    const savedproduct = new ProductModel(req.body);

    savedproduct.save();

    res.status(200).json(savedproduct);
  } catch (error) {
    res.status(404).json(error);
  }
};

const getProducts = async (req, res, next) => {
  try {
    const { query } = req;

    const search = {};
    query.title ? (search.title = query.title) : null;
    query.price ? (search.price = query.price) : null;
    query.suplier ? (search.suplier = query.suplier) : null;

    const Products = await ProductModel.find(search);

    res.status(200).json(Products);
  } catch (error) {
    res.status(500).json(error);
  }
};
const getProduct = async (req, res, next) => {
  try {
    const { params } = req;

    const Products = await ProductModel.find({ _id: params.id });

    res.status(200).json(Products);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { CreateProduct, getProducts, getProduct };
