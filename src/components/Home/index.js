import Hero from "./Hero"
import FeaturedProducts from "./FeaturedProducts"
import { FeaturedCategories } from "./FeaturedCategories"

const Home = () => {
    return (
        <>
            <Hero />
            <section className="section is-medium">
                <div className="container">
                    <FeaturedProducts />
                    <FeaturedCategories />
                </div>
            </section>
        </>
    )
}

export default Home