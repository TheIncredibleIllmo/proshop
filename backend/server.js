import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
// ** for node you need to specify the extension file
// ** and set the "type" property to "module" in package.json
import products from './data/products.js';
import connectDB from './config/db.js';
import colors from 'colors';

dotenv.config({ path: path.resolve(`${process.cwd()}/config/.env`) });

connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send('API running...');
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    const product = products.find((p) => p._id === productId);
    res.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(
    PORT,
    console.log(
        `Server listening on port ${PORT} in ${process.env.NODE_ENV}`.yellow
            .bold
    )
);
