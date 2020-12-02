import { useState } from 'react';

const Navbar = () => {

	const [isActive, setisActive] = useState(false);

    return (
        <header className="navbar">

			<div className="container">
				
				<div className="navbar-brand">

					<a href="/" className="navbar-item">
						<img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
					</a>

					<button
						onClick={() => { setisActive(!isActive); }}
						className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarMenu"
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</button>

				</div>

				<div id="navbarMenu" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
					<div className="navbar-end">
						<a href="/" className="navbar-item">Headphones</a>
						<a href="/" className="navbar-item">Earbuds</a>
					</div>
				</div>

			</div>

        </header>
    )
}

export default Navbar
