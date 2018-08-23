import React from 'react';
import Link from 'gatsby-link';
import { Container, Logo } from '../../../common';
import './style.scss';

const Navbar = () => (
	<Container className="nav">
		<div className="nav" style={{ display: 'flex', alignItems: 'center' }}>
			<Link to="/">
				<Logo className="logo" fill="#fff" width="400px" height="auto" />
			</Link>
			<div className="links">
				<Link to="/" activeClassName="current" exact>Home</Link>
				<Link to="/companies" activeClassName="current">Companies</Link>
				<Link to="/founders" activeClassName="current">Founders</Link>
				{/* <Link to="/blog" activeClassName="current">Blog</Link>
				<Link to="/contact" activeClassName="current">Contact</Link> */}
			</div>
		</div>
	</Container>
)

export default Navbar;
