require("dotenv").config();
const axios = require("axios");

const initializePayment = async (req, res, next) => {
  const { email, amount } = req.body;
  const url = "https://api.paystack.co/transaction/initialize";
  const data = {
    email,
    amount: amount * 100,
  };
  try {
    const res = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error initializing payment:", error);
    return res.status(500).json({ message: "Payment initialization failed" });
  }
};

const verifyPayment = async (req, res) => {
  const url = `https://api.paystack.co/transaction/verify/${reference}`;
  try {
  } catch (error) {}
};
