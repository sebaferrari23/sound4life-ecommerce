import {useContext} from 'react'
import {Store} from '../../store'

const WidgetCart = ({show, action}) => {

    const data = useContext(Store);

    const removeItemFromCart = (id, quantity) => {
        console.log(id);
        
        const index = data.itemsCart.items.findIndex( find => find.product.id === id);
        const newItemsCart = data.itemsCart.items;
        newItemsCart.splice(index, 1);

        data.setItemsCart({
            items: newItemsCart,
            totalCart: data.itemsCart.totalCart - quantity,
            count: 1
        })
    }

    const removeAllItemsFromCart = () => {
        data.setItemsCart({
            items:[],
            count: 1,
            totalCart: 0
        });
    }

    const cartList = data.itemsCart.items && data.itemsCart.items.map(item => 
        <div className="media is-flex is-align-items-center">
            <figure className="media-left">
                <p className="image is-64x64">
                    <img src={item.product.image} alt={item.product.title} />
                </p>
            </figure>
            <div className="media-content">
                <p className="title is-6">{item.product.title} <small>({item.quantity})</small></p>
            </div>
            <div className="media-right">
                <button onClick={ () => removeItemFromCart(item.product.id, item.quantity) } className="delete has-background-danger"></button>
            </div>
        </div>
    )

    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            <div className="mb-6 is-flex is-align-items-center is-justify-content-space-between">
                <p className="title mb-0">Your Cart ({data.itemsCart.totalCart})</p>
                <button onClick={action} className="delete"></button>
            </div>
            { cartList }
            { data.itemsCart.totalCart > 0 &&
                <button className="button is-danger is-rounded mt-6" onClick={removeAllItemsFromCart}>Remove all products</button>
            }
        </div>
    )
}
export default WidgetCart
