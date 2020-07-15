const express = require("express");
const app = express();
const request = require("request");
const R = require("ramda");

var url = "http://makeup-api.herokuapp.com/api/v1/products.json";

var getUniqueBrandNames = function (body) {
  var products = JSON.parse(body);
  var uniqueBrandList = [];
  products.forEach((element) => {
    if (element.brand) {
      uniqueBrandList.push(element.brand);
    }
  });
  return R.uniq(uniqueBrandList);
};

app.get("/ping", (req, res) => res.send({ message: "pong" }));
app.get("/pong", (req, res) => res.send({ message: "ping" }));

app.get("/brands", (req, res) => {
  request(url, function (error, response, body) {
    res.send(getUniqueBrandNames(body));
  });
});

app.get("/products", (req, res) => {
  var brandUrl = url + "?brand=" + req.query.brand;
  request(brandUrl, function (error, response, body) {
    res.send(JSON.parse(body));
  });
});

app.listen(process.env.PORT || 3000, () =>
  console.log(
    `Example app listening at http://localhost:${process.env.PORT || 3000}`
  )
);
