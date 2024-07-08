const paystack = require("../paystack/pay.paystack");

const initializePayment = async (req, res) => {
  const { email, amount } = req.body;
  try {
    const response = await paystack.initializePayment(email, account);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const verifyPayment = async (req, res) => {
  const { reference } = req.params;
  try {
    const response = await paystack.verifyPayment(reference);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { initializePayment, verifyPayment };
