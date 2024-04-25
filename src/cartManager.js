import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';

export class CartManager {
    constructor() {
        this.path = 'cart.json';
        this.carts = [];
    }
    getCarts = async () => {
        try {
            const response = await fs.readFile(this.path, "utf8");
            if (!response) {
                return []; 
            }
            const responseJSON = JSON.parse(response);
            return responseJSON;
        } catch (error) {
            console.error("Error al leer el archivo cart.json:", error);
            throw new Error("Error al obtener los carritos");
        }
    }
    
    getCartProduct = async (id) => {
        const carts = await this.getCarts()

        const cart = carts.find(cart => cart.id === id)
        if (cart) {
            return cart.products
        } else {
            console.log("carrito no encontrado")
        }

    }
    newCart = async () => {
    try {
        const id = uuidv4();
        const newCart = { id, products: [] };
        this.carts = await this.getCarts();
        this.carts.push(newCart);
        await fs.writeFile(this.path, JSON.stringify(this.carts));
        return newCart;
    } catch (error) {
        console.error("Error al crear carrito:", error);
        throw new Error("Error al crear carrito");
    }
}


addProductToCart = async (cart_id, product_id) => {
    try {
        const carts = await this.getCarts();
        const index = carts.findIndex(cart => cart.id === cart_id);
        
        if (index !== -1) {
            const cart = carts[index];
            const existingProductIndex = cart.products.findIndex(product => product.product_id === product_id);
            
            if (existingProductIndex !== -1) {
                
                cart.products[existingProductIndex].quantity += 1;
            } else {
                
                cart.products.push({ product_id, quantity: 1 });
            }

            
            await fs.writeFile(this.path, JSON.stringify(carts));
            console.log("Producto agregado con éxito al carrito");
        } else {
            console.log("Carrito no encontrado");
        }
    } catch (error) {
        console.error("Error al agregar producto al carrito:", error);
        throw new Error("Error al agregar producto al carrito");
    }
}

}

