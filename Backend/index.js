const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")


const cors = require("cors")
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Connected to DB Successfully"))
.catch((err) => {console.log("err")})

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)
 
app.listen(5000 || process.env.PORT, () => {
    console.log("Listening on port 5000")
})