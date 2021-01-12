const Newsletter = () => {
    return (
        <section className="hero is-primary is-medium is-bold">
            <div className="hero-body">
                <div className="container">
                    <div className="is-flex is-align-items-center is-justify-content-center">

                        <h3 className="title is-uppercase is-2 mb-0 mr-6">Subscribe to our newsletter</h3>

                        <form action="#">
                            <div className="field has-addons">
                                <div className="control">
                                    <input className="input  is-rounded" type="email" placeholder="name@example.com" />
                                </div>
                                <div className="control">
                                    <button type="submit" className="button is-dark is-rounded">Submit</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
