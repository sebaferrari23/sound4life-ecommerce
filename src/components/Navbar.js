import { useState } from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {

	const [isActive, setisActive] = useState(false);

    return (
        <header className="navbar is-fixed-top is-spaced">

			<div className="container">
				
				<div className="navbar-brand">

					<a href="/" className="navbar-item">
						<h1 class="title is-uppercase">Sound4Life</h1>
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

				<div id="navbarMenu" className={`navbar-menu mr-4 ${isActive ? "is-active" : ""}`}>
					<div className="navbar-end">
						<a href="/" className="navbar-item">Headphones</a>
						<a href="/" className="navbar-item">Earbuds</a>
					</div>
				</div>

				<CartWidget />

			</div>

        </header>
    )
}

export default Navbar
