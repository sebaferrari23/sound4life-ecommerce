const Product = ( { image, title, brand, price, quantity} ) => {

    let button;
    if (quantity > 0) {
        button = <a href="#" class="card-footer-item"><i className="fas fa-shopping-cart"></i> Add to cart</a>;
    } else {
        button = <p class="card-footer-item">Out of stock</p>;
    }

    return (
    <div className="card">

        <div className="card-image">
            <figure className="image">
                <img src={ image } alt={title} />
            </figure>
        </div>

        <div className="card-content">
            <p className="title is-4">{ title }</p>
            <p className="subtitle is-6">{ brand }</p>
        </div>

        <div className="card-footer">
            <p className="card-footer-item has-text-info">
                <strong>{price}</strong>
            </p>
            {button}
        </div>

    </div>
    )
}

export default Product
