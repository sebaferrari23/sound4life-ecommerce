import ProductCount from "../Product/ProductCount"

const CartItem = ({ image, title, quantity, price }) => {
    return (
        <>
            <td>
                <div className="is-flex is-align-items-center">
                    <figure className="image is-96x96 mr-3">
                        <img src={image} alt={title} />
                    </figure>
                    <h3 class="title is-6">{title}</h3>
                </div>
            </td>
            <td>
                <p>{price}</p>
            </td>
            <td>
                <ProductCount stock={quantity} />
            </td>
            <td>
                <p>{price}</p>
            </td>
            <td>
                <button className="delete is-medium ml-4"></button>
            </td>
        </>
    )
}

export default CartItem
