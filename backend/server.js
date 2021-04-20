import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
// ** for node you need to specify the extension file
// ** and set the "type" property to "module" in package.json
import connectDB from './config/db.js';
import productRoutes from './routes/productRoute.js';

dotenv.config({ path: path.resolve(`${process.cwd()}/config/.env`) });

connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send('API running...');
});

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(
    PORT,
    console.log(
        `Server listening on port ${PORT} in ${process.env.NODE_ENV}`.yellow
            .bold
    )
);
