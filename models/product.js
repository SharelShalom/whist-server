const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
      required: true,
      type: String,
      minlength: 2,
      maxlength: 50,
    },
    description: {
        required: true,
        type: String,
        minlength: 2,
        maxlength: 50,
    },
    price: {
        require: true,
        type: Number,
    },
    image: {
        type: String,
        minlength: 2,
        maxlength: 200,
    },
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;