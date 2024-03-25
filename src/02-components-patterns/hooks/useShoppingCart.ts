import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";


export const useShoppingCart = () => {

 //Defino el tipo de dato de useState para que sea un objeto con clave string y valor ProductInCart
 const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductInCart}>({});

 const onProductCountChange = ( { count, product }: { count: number, product: Product } ) => {
     // console.log(count, product);

     setShoppingCart( oldShoppingCart => {

         const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

         if( Math.max( productInCart.count + count, 0 ) > 0 ) {
             productInCart.count += count;
             return {
                 ...oldShoppingCart,
                 [product.id]: productInCart
             }
         }

         //Tengo que eliminar el producto del carrito porque la cantidad es 0
         const { [product.id]: toDelete, ...rest } = oldShoppingCart;
         return rest;

         //Otra forma de eliminar
         //     const newShoppingCart = { ...oldShoppingCart };
         //     delete newShoppingCart[product.id];
         //     return newShoppingCart;

     })
 }

 return {
    shoppingCart,

    onProductCountChange
 }


}