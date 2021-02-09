import {Link} from 'react-router-dom'
import { categories } from '../../constant/categories'

export const FeaturedCategories = () => {
    return (
        <div className="pt-6">
            <div className="columns">
                
                { categories.map( 
                    category => 
                        <div className="column" key={category.id}>
                            <section className="hero is-category is-medium is-dark is-relative is-clipped">
                                <Link to={category.route} className="hero-body">
                                    <div className="title">{category.title}</div>
                                </Link>
                                <img className="is-overlay" src={category.image} alt={category.title} />
                            </section>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
