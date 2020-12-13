import Product from '../Product/Product'
import { featuredProducts } from "../../featuredProducts";

const FeaturedProducts = () => {
    return (
        <section className="section is-medium">
            <div className="container">
                <h1 className="title mb-6">New products</h1>
                
                <div className="columns">

                    {featuredProducts.map((product, key) => {
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
        </section>
    )
}

export default FeaturedProducts
