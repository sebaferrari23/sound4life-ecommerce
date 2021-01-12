import { Link } from 'react-router-dom';
const Product = ( { id, image, title, brand, price} ) => {
    return (
        <div className="card">

            <Link to={`/details/${id}`} className="card-image">
                <figure className="image">
                    <img src={ image } alt={title} />
                </figure>
            </Link>

            <div className="card-content has-text-centered">
                <Link to={`/details/${id}`} className="title is-block is-4">{ title }</Link>
                <p className="subtitle is-6">{ brand }</p>
                <div className="is-flex is-justify-content-space-between">
                    <p className="title mb-0 is-3">
                        <strong>{price}</strong>
                    </p>
                    <Link to={`/details/${id}`} className="button is-rounded is-primary">See more</Link>
                </div>
            </div>
        </div>
    )
}

export default Product
