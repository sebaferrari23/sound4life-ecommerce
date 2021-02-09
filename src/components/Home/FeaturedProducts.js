import {useState, useEffect} from 'react';
import ProductsList from '../Product/ProductsList';
import Spinner from '../general/Spinner';
import { getFirestore } from '../../db';

const FeaturedProducts = () => {

    const [fetchFeaturedProducts, setFetchFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();

        db.collection('products').where('featured', '==', true).get()
        .then(featuredProducts => {
            let productsArr = [];
            featuredProducts.docs.forEach(doc => {
                productsArr.push({id: doc.id, data: doc.data()})
            })
            setFetchFeaturedProducts(productsArr);
            setLoading(false);
        })
        .catch(e => console.log(e));
    }, []);

    return (
        <div className="mb-6">
            { loading ? 
                <Spinner /> :
                fetchFeaturedProducts.length &&
                <ProductsList productsList={fetchFeaturedProducts} productsTitle="Featured products" />
            }
        </div>
    )
}

export default FeaturedProducts