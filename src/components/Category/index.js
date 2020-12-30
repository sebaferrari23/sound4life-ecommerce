import {useState, useEffect} from 'react';
import { products } from '../../constant/products';
import ProductsList from '../Product/ProductsList';
import Spinner from '../general/Spinner';
import {useParams} from 'react-router-dom'

const Category = () => {

    const [fetchProducts, setProducts] = useState([]);
    const {category_name} = useParams();

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000)
    })

    useEffect(() => {
        getProducts.then(rta => setProducts(rta));
    }, []);

    return (
        <section className="section is-medium">
            <div className="container">
                { fetchProducts.length ?
                <ProductsList productsList={fetchProducts} productsCategory={category_name} productsTitle={category_name} /> : <Spinner /> }
            </div>
        </section>
    )
}

export default Category