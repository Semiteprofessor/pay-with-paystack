require("dotenv").config();
const axios = require("axios");

const paystack = {
  initializePayment: async (email, amount) => {
    const url = "https://api.paystack.co/transaction/initialize";
    const data = {
      email,
      amount: amount * 100, // Paystack expects the amount in kobo
    };

    try {
      const response = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error initializing payment:", error);
      throw new Error("Payment initialization failed");
    }
  },

  verifyPayment: async (reference) => {
    const url = `https://api.paystack.co/transaction/verify/${reference}`;

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error verifying payment:", error);
      throw new Error("Payment verification failed");
    }
  },
};

module.exports = paystack;
