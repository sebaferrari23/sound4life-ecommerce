const NavCart = ({action, quantity}) => {
    return (
        <button className="cart-widget navbar-item is-clickable is-pulled-right" onClick={action}>
            <span className="icon">
                <i className="fas fa-lg fa-shopping-cart"></i>
                <span className="cart-widget__badge has-background-danger">{quantity}</span>
            </span>
        </button>
    )
}

export default NavCart
