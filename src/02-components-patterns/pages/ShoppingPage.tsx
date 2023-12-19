import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import noImage from '../assets/no-image.jpg'

const product = {
    id: '1',
    title: 'Coffee Mug - 1',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
        }}>
        
        <ProductCard product= { product } >
            <ProductCard.Image />
            <ProductCard.Title title= { 'Hola'} />
            <ProductCard.Buttons />
        </ProductCard> 

        <ProductCard product= { product } >
            <ProductImage img= { noImage } />
            <ProductTitle />
            <ProductButtons />
        </ProductCard> 

        </div>
    </div>
  )
}
