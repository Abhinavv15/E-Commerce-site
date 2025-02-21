const express = require("express");
const router = express.Router();
const { addToCart, getCart, updateCart, removeFromCart } = require("../controllers/cartController");

router.post("/addToCart/:productId", addToCart);
router.get("/getCart", getCart); // New route to get cart items
router.put("/updateCart", updateCart); // Route to update cart item quantity
router.delete("/removeFromCart", removeFromCart); // Route to remove item from cart

module.exports = router;
