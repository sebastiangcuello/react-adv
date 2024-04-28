import { useEffect, useRef, useState } from 'react';
import { InitialValues, Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
 }

export const useProduct = ( { onChange, product, value = 0, initialValues }: useProductArgs ) => {

    const [counter, setCounter] = useState<number>( initialValues?.count || value );

    // para evitar que se ejecute el useEffect en la primera renderización
    // el useRef es un hook que nos permite mantener el estado de una variable entre renderizaciones
    let isMounted = useRef(false); 

    console.log(initialValues?.count);

    const increaseBy = ( value: number ) => {

        let newValue = Math.max( counter + value, 0 );
        
        if(initialValues?.maxCount){
            newValue = Math.min( newValue, initialValues.maxCount );
        }

        setCounter( newValue );
        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter( initialValues?.count || value );
    };

    useEffect(() => {
        isMounted.current = true; // cuando se monte el componente cambia a true
    }, []);

    useEffect(() => {
        if( !isMounted.current ) return; // si es la primera renderización no hagas nada

      setCounter( initialValues?.count || value );  
    }, [ value, initialValues ]);

    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,

        increaseBy,
        reset
    }
}
