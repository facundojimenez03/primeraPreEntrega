import { Router } from 'express';
import { cartManager } from "../index.js";

const cartRouter = Router();

cartRouter.post("/", async (req, res) => {
    try {
        const response = await cartManager.newCart(); 
        res.json(response);
    } catch (error) {
        res.send("error al crear carrito");
    }
});

cartRouter.get("/:cid", async (req, res) => {
    const { cid } = req.params;
    try {
        const response = await cartManager.getCartProduct(cid); 
        res.json(response);
    } catch (error) {
        res.send("error al intentar enviar los productos");
    }
});

cartRouter.post("/:cid/products/:pid", async (req, res) => {
    const { cid, pid } = req.params;
    try {
        await cartManager.addProductToCart(cid, pid);
        res.send("productos agregados exitosamente");
    } catch (error) {
        res.send("error al guardar el producto en el carrito");
    }
});

export { cartRouter };


