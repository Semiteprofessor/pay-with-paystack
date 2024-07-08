const express = require("express");
const app = express();
const port = 3060;
const paymentRoutes = require("./routes/pay.routes");

app.use(express.json());

app.use("/api/pay", paymentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
