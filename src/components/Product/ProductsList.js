import Product from './Product'

const ProductsList = ({productsTitle, productsList}) => {
    return (
        <>
            <h3 className="title is-uppercase mb-6">{ productsTitle }</h3>
            <div className="columns">
                { productsList.length && productsList.map((product) => {
                    return (
                        <div className="column is-4" key={product.id}>
                            <Product 
                                id={product.id}
                                image={product.data.image}
                                title={product.data.title}
                                brand={product.data.brand}
                                price={product.data.price}
                                quantity={product.data.quantity}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default ProductsList
