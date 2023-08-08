const express = require("express");
const app = express();
const mongoose = require("mongoose");
const env = require("dotenv");
const cors = require("cors");
const ProductRouter = require("./routes/product.routes");
const AuthRouter = require("./routes/auth.routes");
const UserRouter = require("./routes/user.routes");
const CartRouter = require("./routes/cart.routes");
const OrderRouter = require("./routes/order.routes");

env.config();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connented To DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/products", ProductRouter);
app.use("/auth", AuthRouter);
app.use("/user", UserRouter);
app.use("/cart", CartRouter);
app.use("/orders", CartRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log(
    `server is runing at http://localhost:${process.env.PORT || 8080} `
  );
});
