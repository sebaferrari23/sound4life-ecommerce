import { useState } from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {

	const [isMenuActive, setIsMenuActive] = useState(false);
	const [navbarBg, setNavbarBg] = useState(false);

	const changeBackground = () => {
		if(window.scrollY >= 80) {
			setNavbarBg(true);
		} else {
			setNavbarBg(false);
		}
	}

	window.addEventListener('scroll', changeBackground);

    return (
        <header className={`navbar is-fixed-top is-spaced ${!navbarBg ? "is-transparent" : ""}`}>

			<div className="container">
				
				<div className="navbar-brand">

					<a href="/" className="navbar-item">
						<h1 className="title is-uppercase">Sound4Life</h1>
					</a>

					<button
						onClick={() => { setIsMenuActive(!isMenuActive); }}
						className={`navbar-burger burger ${isMenuActive ? "is-active" : ""}`}
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarMenu"
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</button>

				</div>

				<div id="navbarMenu" className={`navbar-menu mr-4 ${isMenuActive ? "is-active" : ""}`}>
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
