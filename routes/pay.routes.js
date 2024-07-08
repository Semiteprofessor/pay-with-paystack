const express = require("express");
const { initializePayment, verifyPayment } = require("../core/pay.core");
const router = express.Router();

router.post("/payment", initializePayment);

router.get("/verify/:reference", verifyPayment);

module.exports = router;
