const router = require("express").Router();
const { DeleteUser, getUser } = require("../controller/user.controller");


router.get("/:id", getUser);
router.delete("/id",DeleteUser );

module.exports = router;
