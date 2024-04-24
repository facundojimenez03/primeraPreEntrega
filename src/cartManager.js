import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';

export class CartManager {
    constructor() {
        this.path = 'cart.json';
        this.carts = [];
    }

    async getcarts() {
        try {
            const response = await fs.readFile(this.path, 'utf8');
            const responseJSON = JSON.parse(response);
            return responseJSON;
        } catch (error) {
            console.error('Error al leer el archivo de carritos:', error);
            return [];
        }
    }

    async getCardProducts(id) {
        const carts = await this.getcarts();

        const cart = carts.find(cart => cart.id === id);

        if (cart) {
            return cart.products;
        } else {
            console.log("Carrito no encontrado");
        }
    }

    async newCart() {
        const id = uuidv4();
        const newCart = { id, products: [] };

        this.carts = await this.getcarts();
        this.carts.push(newCart);

        await fs.writeFile(this.path, JSON.stringify(this.carts));
        return newCart;
    }

    async addProductToCart(cart_id, product_id) {
        const carts = await this.getcarts();
        const index = carts.findIndex(cart => cart.id === cart_id);
        if (index !== -1) {
            const cartProduct = await this.getCardProducts(cart_id);
            const existingProductIndex = cartProduct.findIndex(product => product.product_id === product_id);
            if (existingProductIndex !== -1) {
                cartProduct[existingProductIndex].quantity += 1;
            } else {
                cartProduct.push({ product_id, quantity: 1 });
            }
            carts[index].products = cartProduct;
            await fs.writeFile(this.path, JSON.stringify(carts));
            console.log('Producto agregado con éxito');
        } else {
            console.log("Carrito no encontrado");
        }
    }
}
