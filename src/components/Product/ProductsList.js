import Product from './Product'

const ProductsList = (props) => {
    return (
        <div>
            <h3 className="title mb-6">{ props.productsTitle }</h3>
            <div className="columns">
                { props.productsList.length && props.productsList.map((product, key) => {
                    return (
                        <div className="column" key={key}>
                            <Product 
                                image={product.image}
                                title={product.title}
                                brand={product.brand}
                                price={product.price}
                                quantity={product.quantity}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ProductsList
