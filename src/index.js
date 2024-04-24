import express from 'express'
import { ProductManager } from './productManager.js'
import { CartManager } from './cartManager.js';
import { productRouter } from './routes/product.router.js';
import { cartRouter } from './routes/cart.router.js';

const PORT = 8080;

const app = express();

export const productManager = new ProductManager;
export const cartManager = new CartManager

app.use(express.json())
app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)

app.listen(PORT, (req,res)=> {
    console.log(`servidor escuchando ${PORT}`)
})