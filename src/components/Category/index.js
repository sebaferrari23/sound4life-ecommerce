import {useState, useEffect} from 'react';
import ProductsList from '../Product/ProductsList';
import Spinner from '../general/Spinner';
import {useParams} from 'react-router-dom'
import { getFirestore } from '../../db';

const Category = () => {

    const {category_name} = useParams();
    const [fetchProducts, setFetchProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();

        db.collection('products').where('category', '==', category_name).get()
        .then(productsByCategory => {
            let productsByCategoryArr = [];
            productsByCategory.docs.forEach(doc => {
                productsByCategoryArr.push({id: doc.id, data: doc.data()})
            })
            setFetchProducts(productsByCategoryArr);
            setLoading(false);
        })
        .catch(e => console.log(e));
    }, [category_name]);

    return (
        <section className="section is-medium">
            <div className="container">
                { loading ? 
                    <Spinner /> :
                    fetchProducts.length &&
                    <ProductsList productsList={fetchProducts} productsTitle={category_name} />
                }
            </div>
        </section>
    )
}

export default Category