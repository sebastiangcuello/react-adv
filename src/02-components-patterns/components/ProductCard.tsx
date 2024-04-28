import { CSSProperties, ReactElement, createContext } from 'react';
import { useProduct } from '../hooks/useProduct'
import { InitialValues, Product, ProductCardHandlers, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    //children?: ReactElement | ReactElement[];
    children: ( args?: ProductCardHandlers ) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {
  
    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ 
        onChange,
        product,
        value,
        initialValues
    })

    return (
        // es un componente de react que permite pasar datos a los componentes hijos
        <Provider value={{
            counter,
            increaseBy,
            maxCount,
            product
        }}> 
            <div 
                className={ `${ styles.productCard } ${ className } ` }
                style= { style }
            >
                { children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    increaseBy,
                    reset
                }) }
              </div>
        </Provider>

    )
}

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;