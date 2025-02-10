const express = require('express');
const multer = require('multer');
const { productModel } = require('../model/product.model'); 

let productRouter = express.Router();

productRouter.get("/", async (req, res) => {
    try {
        const products = await productModel.find();
        res.send({"message":"Successfully retrieved the data from the database",data:products});
    } catch (error) {
        res.send({"error-message":error});
    }
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/'); 
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

productRouter.get("/test-products", async (req, res) => {
    try {
        const products = await productModel.find();
        res.send({ "message": "Successfully retrieved the products", data: products });
    } catch (error) {
        res.send({ "error-message": error });
    }
});

productRouter.post("/create", upload.array('productImage', 12), async (req, res) => {
    try {
        const { productName, productDescription, productPrice } = req.body;

        const imgPaths = req.files.map((file) => `/uploads/${file.filename}`);

        const newProduct = new productModel({
            productName,
            productDescription,
            productPrice,
            productImage: imgPaths
        });

        await newProduct.save();
        res.status(201).json({ message: "Product created successfully" });

    } catch (error) {
        res.status(500).json({ message: "Error creating product", error: error.message });
        console.log(error);
    }
});

productRouter.put("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { productName, productDescription, productPrice, productImage } = req.body;

        const updatedProduct = await productModel.findByIdAndUpdate(id, {
            productName,
            productDescription,
            productPrice,
            productImage
        }, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product updated successfully", data: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: "Error updating product", error: error.message });
    }
});

productRouter.get("/filter-by-email", async (req, res) => {
    const { email } = req.query;
    try {
        const products = await productModel.find({ userEmail: email });
        res.status(200).json({ message: "Filtered products retrieved successfully", data: products });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving filtered products", error: error.message });
    }
});

productRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await productModel.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting product", error: error.message });
    }
});

module.exports = { productRouter };