import { useState } from 'react'

const ProductCount = ( { stock } ) => {
    
    const [count, setCount] = useState(1);

    const add = () => {
        if(count < stock) {
            setCount(count + 1);
        }
    }
    const remove = () => {
        if(count === 1) return;
        setCount(count - 1)
    }

    return (
        <div className="product-counter">
            <button className="button is-primary" onClick={ () => remove() } disabled={count===1} >
                <span className="icon is-small">
                    <i className="fas fa-minus"></i>
                </span>
            </button>
            <p>{count}</p>
            <button className="button is-primary" onClick={ () => add() } disabled={count >= stock}>
                <span className="icon is-small">
                    <i className="fas fa-plus"></i>
                </span>
            </button>
        </div>
    )
}

export default ProductCount
