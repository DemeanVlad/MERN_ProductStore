import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();

app.use(express.json()); // middleware ce permite sa acceptam fisiere json in req.body

app.get("/api/products", async (req,res) => {
    try {
      const products = await Product.find({});
      res.status(200).json({succes: true, data: products })
    } catch (error) {
      console.log("error in fetching products: ", error.message);
      res.status(500).json({ succes: false, message:"Server error"});
        
    }
});

app.post("/api/products", async (req,res) => {
    const product = req.body; // user will send this data

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({ succes: false, message: "Please provide all fields!" });
    }

    const newProduct = new Product(product);
   
    try {
        await newProduct.save();
        res.status(201).json({ succes: true, data: newProduct });    
    } catch (error) {
        console.error("Error in product:", error.message);
        res.status(500).json({ succes: false, message:"Server error" });
    }
});

app.delete("/api/products/:id", async (req,res) => {
    const {id} = req.params;

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ succes: true, message: "Product delete" })
    } catch (error) {
        console.log("error in deleting products: ", error.message);
        res.status(404).json({ succes: false, message: "Product not found"})
    }
});



app.listen(5002, () => {
    connectDB();
    console.log("Server running")
})

