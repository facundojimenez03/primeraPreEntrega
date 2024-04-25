 # RUTA PRODUCTS
   ## METODO POST
- se agrega un producto con el metodo post, y se guarda en nuestros products.json
![1](https://github.com/Valentinajimenez0/primerPreEntregaBackend/assets/134071168/7ccf8bdb-6ecf-4b5d-a6b6-b1ea3f17429d)
![2](https://github.com/Valentinajimenez0/primerPreEntregaBackend/assets/134071168/597ae88f-ff77-495c-8d87-dadf9dd02d17)



- se agrega otro producto y si quiero repetir la peticion, de agregar el mismo producto, no te deja por tener el mismo code

![3](https://github.com/Valentinajimenez0/primerPreEntregaBackend/assets/134071168/9569de6f-0f37-43a4-8a6e-53a30d6635fb)
![4](https://github.com/Valentinajimenez0/primerPreEntregaBackend/assets/134071168/7d04a14b-30b0-4ee7-8ed4-8fd9fab5b7d4)
![5](https://github.com/Valentinajimenez0/primerPreEntregaBackend/assets/134071168/159442cf-2b39-4c5a-9091-4e0b47d8f825)

   ## METODO GET

- se obtienen todos los productos del carrito

![6](https://github.com/Valentinajimenez0/primerPreEntregaBackend/assets/134071168/942d3c2b-ee4f-4966-970b-5f5ad8575f8c)

- se obtiene un producto en especifico enviando su ID

![7](https://github.com/Valentinajimenez0/primerPreEntregaBackend/assets/134071168/8bc72300-093e-4b53-9334-02715b2eee07)

### utilizamos limit con get
![8](https://github.com/Valentinajimenez0/primerPreEntregaBackend/assets/134071168/05046946-ff01-4268-af6e-682e9b7e3b5e)

   ## METODO PUT

- se modifica el nombre del producto con ID 1 

![9](https://github.com/Valentinajimenez0/primerPreEntregaBackend/assets/134071168/860639c5-4f72-43d7-8e20-33855d7d0a9c)
![10](https://github.com/Valentinajimenez0/primerPreEntregaBackend/assets/134071168/f3a3f2de-2848-44cd-a7f3-0e5447a5fcf4)


   ## METODO DELETE

  - Se elimina el producto pasandole por parametro el ID 

![11](https://github.com/Valentinajimenez0/primerPreEntregaBackend/assets/134071168/7337eb8d-ae36-480f-a51c-bae4fd698e23)
![12](https://github.com/Valentinajimenez0/primerPreEntregaBackend/assets/134071168/c2a25322-9c76-4482-88f2-249e901f8193)



  # RUTA CARTS
  ## METODO POST
- genero un carrito nuevo, que automaticamente se le coloca un ID del tipo number

![13](https://github.com/Valentinajimenez0/primerPreEntregaBackend/assets/134071168/3f42755f-4660-4c31-b51e-ef6c48d89294)
![14](https://github.com/Valentinajimenez0/primerPreEntregaBackend/assets/134071168/792cd7bc-ece4-4dd3-a31e-7a5107a10149)


- apreto send tres veces mas para crear tres carritos distintos, pero el ID se incrementa con cada carrito, generadon que cada uno tenga su propio ID 

![15](https://github.com/Valentinajimenez0/primerPreEntregaBackend/assets/134071168/d8b6e369-6cf4-46cd-a835-6fe9d9df9c39)


- agrego un producto llamado "producto nuevo" al carrito con ID 2 

![16](https://github.com/Valentinajimenez0/primerPreEntregaBackend/assets/134071168/60555f60-ba0e-4c58-8241-aef3341d2c68)
![17](https://github.com/Valentinajimenez0/primerPreEntregaBackend/assets/134071168/81143094-9b45-444b-9a0f-400a3fb7e75c)


- si agrego el mismo producto, se incrementa la quantity

![18](https://github.com/Valentinajimenez0/primerPreEntregaBackend/assets/134071168/a0d484f5-388c-406a-8447-f66d96bb9f47)
![19](https://github.com/Valentinajimenez0/primerPreEntregaBackend/assets/134071168/d385fde5-51a8-4124-8aac-9d34f35f77af)

 ## METODO GET

 obtengo con el metodo GET el carrito con ID 2 y me muestra que contiene 3 cantidades de un producto.

![20](https://github.com/Valentinajimenez0/primerPreEntregaBackend/assets/134071168/b468ed04-1475-4c5e-8a1c-2387fa7cc997)
