import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";


export const useShoppingCart = () => {

 //Defino el tipo de dato de useState para que sea un objeto con clave string y valor ProductInCart
 const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductInCart}>({});

 const onProductCountChange = ( { count, product }: { count: number, product: Product } ) => {
     // console.log(count, product);

     setShoppingCart( oldShoppingCart => {

        //Elimino el producto si el count es 0
         if( count === 0 ){
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;
         }

         //Otra forma de eliminar
         //     const newShoppingCart = { ...oldShoppingCart };
         //     delete newShoppingCart[product.id];
         //     return newShoppingCart;

         return {
            ...oldShoppingCart,
            [ product.id ]: { ...product, count }
         }

     })
 }

 return {
    shoppingCart,

    onProductCountChange
 }


}