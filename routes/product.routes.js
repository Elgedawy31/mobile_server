const router = require("express").Router();
const { CreateProduct, getProducts  ,getProduct} = require("../controller/product.controller");

router.post("/", CreateProduct);
router.get('/' , getProducts)
router.get('/:id' , getProduct)

module.exports = router;
