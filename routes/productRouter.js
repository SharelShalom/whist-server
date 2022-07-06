// import { Router } from "express";
const express = require("express");
const router = express.Router();
const productController = require('../controller/productController');

router.get("/", productController.index);
router.get("/:id", productController.show);
router.post("/", productController.create);
router.delete("/:id", productController.delete);
router.put("/:id", productController.update);

module.exports = router;
