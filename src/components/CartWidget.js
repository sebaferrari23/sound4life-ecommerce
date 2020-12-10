const CartWidget = () => {
    return (
        <button className="cart-widget navbar-item is-clickable is-pulled-right">
            <span className="icon">
                <i className="fas fa-lg fa-shopping-cart"></i>
                <span className="cart-widget__badge has-background-danger">1</span>
            </span>
        </button>
    )
}

export default CartWidget
