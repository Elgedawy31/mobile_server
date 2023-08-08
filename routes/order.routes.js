const router = require("express").Router();
const { getUserOrders } = require("../controller/order.controoler");

router.get("/:id", getUserOrders);

module.exports = router;
