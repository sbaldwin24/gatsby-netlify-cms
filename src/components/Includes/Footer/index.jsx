import React from 'react';
import Link from 'gatsby-link';
import { Logo, Linkedin } from '../../common';

import './style.scss'

const Footer = () => (
	<div>
		<footer className="footer">
			<div className="footer--secondary">
				<div className="container">
					<div className="footer-contentWrapper">
						<h4 className="footer-inspirational">Happy<em> Trees</em></h4>
					</div>
					<div className="footerNav-wrapper">
						<div className="grid">
							<div className="grid-1of3 grid-1of1--ipad u-alignCenter--ipad">
								<span className="footerNav-text">© 2018 Caruth Capital Partners. All Rights Reserved.</span>
							</div>
							<div className="grid-1of3 u-alignCenter grid-1of1--ipad">
								<Link className="brand-footer footerNav-logo-anchor" to="/">
									<Logo
										className="logo-footer"
										color="#fff"
										strokeWidth="2"
									/>
								</Link>
							</div>
							<div className="grid-1of3 u-alignRight grid-1of1--ipad u-alignCenter--ipad">
								<div className="u-marginBottomXxsmall"><span className="footerNav-text"><a href="https://goo.gl/maps/9orBKgGYmcv" target="_blank">3333 Welborn St., Suite 250, Dallas, TX 75219</a></span></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>
)

export default Footer;
