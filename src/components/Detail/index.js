import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { products } from '../../constant/products'
import Spinner from '../general/Spinner'
import ProductDetail from './ProductDetails'

const Detail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: products[id-1].id, 
                title: products[id-1].title,
                brand: products[id-1].brand, 
                image: products[id-1].image,
                descripcion: products[id-1].description, 
                quantity: products[id-1].quantity,
                price: products[id-1].price,
            })
        }, 500);
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