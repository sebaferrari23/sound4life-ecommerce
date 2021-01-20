import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Spinner from '../general/Spinner'
import ProductDetail from './ProductDetails'
import { getFirestore } from '../../db'

const Detail = () => {
    const {id} = useParams();
    const [productDetail, setProductDetail] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        db.collection('products').doc(id).get()
        .then(product => {
            setProductDetail(product.data());
            setLoading(false);
        })
        .catch(e => console.log(e));
    }, []);

    return (
        <section className="section is-medium">
            <div className="container">
            { loading ? 
                <Spinner /> :
                productDetail &&
                <ProductDetail product={productDetail} />
            }
            </div>
        </section>
    )
}
export default Detail;