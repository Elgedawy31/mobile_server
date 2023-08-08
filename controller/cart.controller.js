const { CartModel } = require("../models/cart.models");

const addToCart = async (req, res) => {
  try {
    const { userID, quantity, cartItem } = req.body;
    const cart = await CartModel.findOne({ userID });

    if (cart) {
      const existedProduct = cart.products.find(
        (product) => product.cartItem.toString() === cartItem
      );

      if (existedProduct) {
        existedProduct.quantity += 1;
      } else {
        cart.products.push({ quantity, cartItem });
      }

      await cart.save();

      res.status(200).json("Added To Cart");
    } else {
      const NewProduct = new CartModel({
        userID,
        products: [
          {
            cartItem,
            quantity,
          },
        ],
      });

      await NewProduct.save();

      res.status(200).json("Added To Cart");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const getCart = async (req, res) => {
  try {
    const cart = await CartModel.find({ userID: req.params.id }).populate(
      "products.cartItem"
    );

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteCartItem = async (req, res) => {
  const cartItemID = req.params.cartItemID;

  try {
    const updatedCart = await CartModel.findByIdAndUpdate(
      { "products._id": cartItemID },
      { $pull: { products: { _id: cartItemID } } },
      {
        new: true,
      }
    );
    if (!updatedCart) {
      res.status(404).json("Cart Item Not Found");
    }

    res.status(200).json({ updatedCart });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { addToCart, getCart, deleteCartItem };
