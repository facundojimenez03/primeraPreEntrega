import { Router } from 'express';
import { productManager } from '../index.js';

const productRouter = Router();

productRouter.use((err, req, res, next) => {
    console.error("Error en la solicitud:", err);
    res.status(500).send('Error interno del servidor');
});

productRouter.get('/', async (req, res, next) => {
    try {
        const { limit } = req.query;
        let products = await productManager.getProducts();
        if (limit) {
            products = products.slice(0, parseInt(limit));
        }
        res.json(products);
    } catch (error) {
        next(error);
    }
});

productRouter.get('/:pid', async (req, res, next) => {
    const { pid } = req.params;
    try {
        const product = await productManager.getProductById(pid);
        if (product) {
            res.json(product);
        } else {
            res.status(404).send('Producto no encontrado');
        }
    } catch (error) {
        next(error);
    }
});

productRouter.post('/', async (req, res, next) => {
    try {
        const newProduct = await productManager.addProduct(req.body);
        res.json(newProduct);
    } catch (error) {
        next(error);
    }
});

productRouter.put('/:pid', async (req, res, next) => {
    const { pid } = req.params;
    try {
        const updatedProduct = await productManager.updateProduct(pid, req.body);
        res.json(updatedProduct);
    } catch (error) {
        next(error);
    }
});

productRouter.delete('/:pid', async (req, res, next) => {
    const { pid } = req.params;
    try {
        const success = await productManager.deleteProduct(pid);
        if (success) {
            res.send("El producto fue eliminado correctamente");
        } else {
            res.status(404).send('Producto no encontrado');
        }
    } catch (error) {
        next(error);
    }
});

export { productRouter };
