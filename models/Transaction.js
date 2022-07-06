const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  totalPrice: {
    required: true,
    type: Number,
  },
  created_at: {
    required: true,
    type: Date,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
