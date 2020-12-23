import {useEffect, useState} from 'react';
import { featuredProducts } from "../../featuredProducts";
import Spinner from '../Spinner';
import ProductDetail from './ProductDetails';

const Detail = () => {
    const [product, setProduct] = useState(null);

    console.log(product);

    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: featuredProducts['0'].id, 
                title: featuredProducts['0'].title,
                brand: featuredProducts['0'].brand, 
                image: featuredProducts['0'].image,
                descripcion: featuredProducts['0'].description, 
                price: featuredProducts['0'].price,
            })
        }, 2000);
    });

    useEffect(() => {
        getProduct
        .then(response => setProduct(response))
        .catch(error => console.log(error));
    }, []);

    return (
        <section className="section is-medium">
            <div className="container">
            { product ? <ProductDetail product={product} />: <Spinner /> }
            </div>
        </section>
    )
}
export default Detail;