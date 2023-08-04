const express = require("express");
const app = express();
const mongoose = require("mongoose");
const env = require("dotenv");
const cors = require("cors");
const ProductRouter = require("./routes/product.routes");

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

app.listen(process.env.PORT || 8080, () => {
  console.log(
    `server is runing at http://localhost:${process.env.PORT || 8080} `
  );
});
