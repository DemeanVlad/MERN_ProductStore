import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

app.use(express.json()); // middleware ce permite sa acceptam fisiere json in req.body

app.use("/api/products", productRoutes); //product routes

app.listen(5002, () => {
    connectDB();
    console.log("Server running " + PORT)
})

