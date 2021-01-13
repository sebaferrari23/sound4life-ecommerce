import { useContext } from 'react'
import {Store} from '../../store'
import { useHistory } from "react-router-dom"
import ProductCount from "../Product/ProductCount"

const ProductDetail = ({product}) => {

    const data = useContext(Store);
    console.log(data.itemsCart);

    //let history = useHistory();
    
    const onAddItem = (id) => {
        data.itemsCart.items.filter(item => item.product.id === id).length === 0 ?
        data.setItemsCart({
            ...data.itemsCart,
            items: [...data.itemsCart.items, { product, quantity: data.itemsCart.count }],
            totalCart: data.itemsCart.totalCart + data.itemsCart.count,
            count: 1
        }) :
        isInCart(id);
        //history.push("/cart");
    }

    const isInCart = (id) => {
        const index = data.itemsCart.items.findIndex( find => find.product.id === id);
        const newItemsCart = data.itemsCart.items;
        newItemsCart[index] = {...newItemsCart[index], quantity: newItemsCart[index].quantity + data.itemsCart.count}
        data.setItemsCart({
            ...data.itemsCart,
            items: newItemsCart,
            totalCart: data.itemsCart.totalCart + data.itemsCart.count
        })
    }

    let button;
    if (product.quantity > 0) {
        button = <button onClick={() => onAddItem(product.id)} className="button is-rounded is-primary">
        <span className="icon">
            <i className="fas fa-shopping-cart"></i>
        </span><span>Add to cart</span></button>;
    } else {
        button = <p className="card-footer-item">Out of stock</p>;
    }

    return (
        <article className="columns is-align-items-center">
            <div className="column is-half">
                <figure className="image is-animated">
                    <img src={product.image} alt={product.title} />
                </figure >
            </div>
            <div className="column pr-6">
                <h1 className="title">{product.title}</h1>
                <h3 class="subtitle">{product.brand}</h3>
                <p className="mb-5">{product.descripcion}</p>
                <p className="title"><strong>{product.price}</strong></p>
                <div className="columns mb-5 is-align-items-center">
                    <div className="column">
                        <ProductCount stock={product.quantity} />
                    </div>
                    <div className="column">
                        {button}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProductDetail
