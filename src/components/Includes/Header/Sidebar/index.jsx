import React from 'react';
import Link from 'gatsby-link';
import cx from 'classnames';
import './style.scss';

const Sidebar = ({ sidebar, toggle }) => (
	<div className={cx('sidebar', { active: sidebar })} onClick={toggle}>
		<div className="items">
			<Link to="/" activeClassName="current" exact >Home</Link>
			<Link to="/companies" activeClassName="current">Companies</Link>
			<Link to="/founders" activeClassName="current">Founders</Link>
			{/* <Link to="/blog" activeClassName="current">Blog</Link>
			<Link to="/contact" activeClassName="current">Contact</Link> */}
		</div>
	</div>
)

export default Sidebar;
