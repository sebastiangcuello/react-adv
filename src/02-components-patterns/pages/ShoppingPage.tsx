import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css';
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";

export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div >
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>

            {
                products.map( product => (
                    <ProductCard 
                        product= { product } 
                        className="bg-dark text-white"
                        key = { product.id }
                        onChange={ onProductCountChange }
                        value = { shoppingCart[product.id]?.count || 0 }
                    >
                        <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                        <ProductTitle className="text-bold" />
                        <ProductButtons className="custom-buttons" />
                    </ProductCard> 
                ))
            }


            </div>

            <div className="shopping-cart">
            {
                //Object.entires sirve para recorrer un objeto y devuelve un array de arrays con clave y valor
                //En este caso recorro el objeto shoppingCart y lo convierto en un array de ProductCard
                //El key es el id del producto
                //El product es el objeto con la clave y el valor

                Object.entries( shoppingCart ).map( ([ key, product ]) => (
                    <ProductCard 
                        product= { product } 
                        className="bg-dark text-white"
                        key = { key }
                        style={{ width: '100px' }}
                        onChange={ onProductCountChange }
                        value={ product.count }
                    >
                        <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                        <ProductButtons 
                            className="custom-buttons"
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        />
                    </ProductCard> 
                ))
            }   
            </div>
        </div>
    )
}
