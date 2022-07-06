const express = require('express');
const cors = require('cors');
const product = require('../routes/productRouter')
const transaction = require('../routes/transactionRouter');
const helloworld = require('../routes/helloworld')

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

module.exports = function(app) {
    app.use(express.json());;
    app.use(express.urlencoded({ extended: true }));
    app.use(cors(corsOptions)); // Use this after the variable declaration
    app.use('/api/products', product);
    app.use('/api/helloworld', helloworld);
    app.use('/api/transactions', transaction);
};