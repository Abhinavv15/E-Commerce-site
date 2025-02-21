require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const uploadRoutes = require('./routes/uploadRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const cors = require('cors');

const app = express();
const PORT = 7878;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); 
app.use('/uploads', express.static('uploads'));

mongoose.connect(process.env.mongoURL)
    .then(() => console.log("Successfully connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));


app.get("/ping", (req, res) => {
    res.send("pong");
});

app.use('/', userRoutes);
app.use('/', uploadRoutes);
app.use('/', productRoutes);
app.use('/', cartRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
