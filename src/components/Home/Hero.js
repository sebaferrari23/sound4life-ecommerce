import Navbar from '../Navbar'

const Hero = () => {
    return (
        <section className="hero is-primary is-bold is-fullheight">
            <div className="hero-head">
                <Navbar />
            </div>

            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title">¡Welcome to Sound4Life!</h1>
                    <h2 className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Nam nibh velit, aliquet nec fringilla sed, tincidunt sed tortor.</h2>
                </div>
            </div>

        </section>
    )
}

export default Hero
