const express = require("express");
const router = express.Router();
const transactionController = require('../controller/transactionController');

router.get("/", transactionController.index);
router.get("/:id", transactionController.show);
router.post("/", transactionController.create);
router.delete("/:id", transactionController.delete);
router.put("/:id", transactionController.update);

module.exports = router;
