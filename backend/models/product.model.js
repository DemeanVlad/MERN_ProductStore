import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
},{
    timestamps: true //createdAt, updateAt
});

const Product = mongoose.model('Product', productSchema);

export default Product;
//aici am creat schema bazei de date. Cam asa vrem sa arate schema unui produs
//fiecare produs are un nume,pret si imagine
// la final am creat un obiect care sa returneze toate fieldurile necesare