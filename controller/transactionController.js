// import { Response, Request } from "express";
const Transaction = require("../models/Transaction");
const mongoose = require('mongoose');

module.exports.index = async (req, res) => {
  const transactions = await Transaction.find().populate('products');
  res.send(transactions);
};

module.exports.show = async (req, res) => {
  const transaction = await Transaction.findById(req.params.id).populate('products');

  if (!transaction)
    return res.status(404).json("The transaction with the given id not found.");

  res.send(transaction);
};

module.exports.create = async (req, res) => {
  const transaction = new Transaction({
    products: req.body.products,
    totalPrice: req.body.totalPrice,
    created_at: new Date(),
  });

  await transaction.save();

  res.send(transaction);
};

module.exports.delete = async (req, res) => {
  const transaction = await Transaction.findByIdAndDelete(req.params.id);

  if (!transaction)
    return res.status(404).send("The transaction with the given id not found.");

  res.send(transaction);
};

module.exports.update = async (req, res) => {
  const transaction = await Transaction.findByIdAndUpdate(req.params.id, {
    products: req.body.products,
    totalPrice: req.body.totalPrice,
  });

  if (!transaction)
    return res.status(404).send("The transaction with given id not found.");

  res.send(transaction);
};
