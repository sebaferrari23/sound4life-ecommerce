import Headphones from '../../images/headphone-1.png';

const Hero = () => {
    return (
        <section className="hero is-primary is-bold is-large">

            <div className="hero-body">
                <div className="container">
                    <h1 className="title mb-6">¡Welcome to Sound4Life!</h1>
                    <h2 className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Nam nibh velit, aliquet nec fringilla sed, <br />tincidunt sed tortor.</h2>
                    <img className="hero__img is-hidden-mobile" src={Headphones} alt=""/>
                </div>
            </div>

        </section>
    )
}

export default Hero
