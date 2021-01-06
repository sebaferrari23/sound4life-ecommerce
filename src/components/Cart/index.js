import {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom"
import { products } from "../../constant/products"
import Spinner from '../general/Spinner'
import CartItems from './CartItems'

const Cart = () => {
    const [productsCart, setProductsCart] = useState([]);

    let history = useHistory();
    
    const handleGoBack = () => {
        history.goBack();
    }

    const getProductsCart = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 500)
    })

    useEffect(() => {
        getProductsCart.then(rta => setProductsCart(rta));
    }, []);

    return (
        <section className="section is-medium">
            <div className="container">
                <h3 className="title is-uppercase mb-6">Shopping Cart</h3>
                { productsCart.length  ?
                    <CartItems items={productsCart} /> : <Spinner /> }
                
                <button className="button is-primary is-outlined is-rounded" onClick={handleGoBack}><span className="icon"><i className="fas fa-arrow-left"></i></span><span>Continue shopping</span></button>
                <button className="button is-primary is-pulled-right is-rounded">Go to Checkout</button>
            </div>
        </section>
    )
}

export default Cart
