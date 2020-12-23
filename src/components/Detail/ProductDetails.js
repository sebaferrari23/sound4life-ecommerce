const ProductDetail = ({product}) => {
    return (
        <article className="columns is-align-items-center">
            <div className="column is-half">
                <figure className="image is-16by9">
                    <img src={product.image} alt={product.title} />
                </figure >
            </div>
            <div className="column">
                <h1 className="title">{product.title}</h1>
                <div class="content">
                    <p className="mb-5">{product.brand}</p>
                    <p className="mb-6">{product.descripcion}</p>
                    <p><strong>{product.price}</strong></p>
                </div>
            </div>
        </article>
    )
}

export default ProductDetail
