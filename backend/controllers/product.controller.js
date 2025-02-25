import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req,res) => {
    try {
      const products = await Product.find({});
      res.status(200).json({succes: true, data: products })
    } catch (error) {
      console.log("error in fetching products: ", error.message);
      res.status(500).json({ succes: false, message:"Server error"});
        
    }
};

export const createProduct = async (req,res) => {
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
};

export  const updateProduct = async (req,res) => {
    const {id} = req.params;
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({succes: false, message:"cannot find object, server error"})
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product,{new: true});
        res.status(200).json({ succes: true, data: updatedProduct});
    } catch (error) {
        res.status(500).json({ succes: false, message:"cannot update, server error"});
    }
};

export const deleteProduct =  async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({succes: false, message:"cannot find object, server error"})
    }
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ succes: true, message: "Product delete" })
    } catch (error) {
        console.log("error in deleting products: ", error.message);
        res.status(500).json({ succes: false, message: "Server error"})
    }
};