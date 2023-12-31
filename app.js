const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const productsRoutes = require("./api/routes/product");
const ordersRoutes = require("./api/routes/order");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Acess-Control-Allow-Origin", "*");
  res.header(
    "Acess-Control-Allow-Headers",
    "Origin , X-Requested-With, Content-Type , Accept  , Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header(
      "Acess-Control-Allow-Methods",
      "PUT , POST , PATCH , DELETE , GET"
    );
    return res.status(200).json({});
  }
});

app.use("/products", productsRoutes);
app.use("/orders", ordersRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
