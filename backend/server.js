import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
// ** for node you need to specify the extension file
// ** and set the "type" property to "module" in package.json
import connectDB from './config/db.js';
import productRoutes from './routes/productRoute.js';
import { errorHandler, notFoundFallback } from './middleware/errorHandler.js';

dotenv.config({ path: path.resolve(`${process.cwd()}/config/.env`) });

connectDB();

const app = express();

app.use('/api/products', productRoutes);

app.use(notFoundFallback);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(
    port,
    console.log(
        `Server listening on port ${port} in ${process.env.NODE_ENV}`.yellow
            .bold
    )
);
