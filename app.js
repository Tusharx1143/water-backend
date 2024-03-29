require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require('path')
//My routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

const productRoutes = require("./routes/item");
const orderRoutes = require("./routes/order");
const razorpayRoutes = require("./routes/razorpay");

//DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api",razorpayRoutes)
//PORT
const port = process.env.PORT || 8000;


app.get('/api/logo', (req, res) => {
	res.sendFile(path.join(__dirname, 'logo'))
})

//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
