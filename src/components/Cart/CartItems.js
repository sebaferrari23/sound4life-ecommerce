import CartItem from './CartItem'

const CartItems = ({items}) => {
    return (
        <div className="table-container">
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                { items.length && items.map((product) => {
                    return (
                        <tr key={product.id}>
                            <CartItem
                                id={product.id}
                                image={product.image}
                                title={product.title}
                                brand={product.brand}
                                price={product.price}
                                quantity={product.quantity}
                            />
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    )
}

export default CartItems
