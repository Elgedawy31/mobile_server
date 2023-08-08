const router = require("express").Router();

const {
  addToCart,
  getCart,
  deleteCartItem,
} = require("../controller/cart.controller");


router.post("/", addToCart);
router.get("/find/:id", getCart);
router.delete("/:cartItemID", deleteCartItem);

module.exports = router;
