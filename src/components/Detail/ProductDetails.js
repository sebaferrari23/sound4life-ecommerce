import ProductCount from "../Product/ProductCount"

const ProductDetail = ({product}) => {

    let button;
    if (product.quantity > 0) {
        button = <button className="button is-primary">
        <span className="icon">
            <i className="fas fa-shopping-cart"></i>
        </span><span>Add to cart</span></button>;
    } else {
        button = <p className="card-footer-item">Out of stock</p>;
    }

    return (
        <article className="columns is-align-items-center">
            <div className="column is-half">
                <figure className="image is-16by9 is-animated">
                    <img src={product.image} alt={product.title} />
                </figure >
            </div>
            <div className="column">
                <h1 className="title">{product.title}</h1>
                <div className="content pr-6">
                    <p className="mb-5">{product.brand}</p>
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
            </div>
        </article>
    )
}

export default ProductDetail
