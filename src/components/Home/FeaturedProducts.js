import {useState, useEffect} from 'react';
import { featuredProducts } from "../../featuredProducts";
import ProductsList from '../Product/ProductsList';
import Spinner from '../Spinner';

const FeaturedProducts = () => {

    const [products, setProducts] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(featuredProducts);
        }, 2000)
    })

    useEffect(() => {
        getProducts.then(rta => setProducts(rta));
    }, []);

    return (
        <section className="section is-medium">
            <div className="container">
                { products.length ?
                <ProductsList productsList={products}  productsTitle="New products" /> : <Spinner /> }
            </div>
        </section>
    )
}

export default FeaturedProducts