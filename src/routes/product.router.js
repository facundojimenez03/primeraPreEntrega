import { Router } from 'express';
import { productManager } from '../index.js'; 

const productRouter = Router();

productRouter.get('/', async (req, res) => {
    try {
        const { limit } = req.query;
        const products = await productManager.getProducts();
        if (limit) {
            const limitedProducts = products.slice(0, limit);
            return res.json(limitedProducts);
        }
        return res.json(products);
    } catch (error) {
        console.log(error);
        res.send('ERROR AL INTENTAR RECIBIR LOS PRODUCTOS');
    }
});

productRouter.get('/:pid', async (req, res) => {
    const { pid } = req.params;
    try {
        const product = await productManager.getProductById(pid);
        if (product) {
            res.json(product);
        } else {
            console.log(`ERROR: Producto con ID ${pid} no encontrado`);
            res.status(404).send('Producto no encontrado');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(`ERROR AL RECIBIR EL PRODUCTO CON ID ${pid}`);
    }
});

productRouter.post('/', async (req, res) => {
    try {
        const { title, description, price, thumbnail, code, stock, status = true, category } = req.body;
        const response = await productManager.addProduct({ title, description, price, thumbnail, code, stock, status, category });
        res.json(response);
    } catch (error) {
        console.log("Error al intentar agregar producto:", error);
        res.status(500).send("Error al intentar agregar producto");
    }
});

productRouter.put('/:pid', async (req, res) => {
    const { pid } = req.params;
    try {
        const { title, description, price, thumbnail, code, stock, status = true, category } = req.body;
        const response = await productManager.updateProduct(pid, { title, description, price, thumbnail, code, stock, status, category });
        res.json(response);
    } catch (error) {
        console.log("Error al intentar editar producto:", error);
        res.status(500).send(`Error al intentar editar producto ${pid}`);
    }
});

productRouter.delete('/:pid', async (req, res) => {
    const { pid } = req.params;
    try {
        const success = await productManager.deleteProduct(pid);
        if (success) {
            res.send("El producto fue eliminado correctamente");
        } else {
            console.log(`ERROR: Producto con ID ${pid} no encontrado`);
            res.status(404).send('Producto no encontrado');
        }
    } catch (error) {
        console.log("Error al intentar eliminar producto:", error);
        res.status(500).send(`Error al intentar eliminar el producto ${pid}`);
    }
});

export { productRouter };
