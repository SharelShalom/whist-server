// import { Response, Request } from "express";
const Product = require("../models/product");

module.exports.index = async (req, res) => {
  const products = await Product.find().sort("title");
  res.send(products);
};

module.exports.show = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product)
    return res.status(404).json("The product with the given id not found.");

  res.send(product);
};

module.exports.create = async (req, res) => {
  const product = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
  });

  await product.save();

  res.send(product);
};

module.exports.delete = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product)
    return res.status(404).send("The product with the given id not found.");

  res.send(product);
};

module.exports.update = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
  });

  if (!product)
    return res.status(404).send("The product with given id not found.");

  res.send(product);
};
