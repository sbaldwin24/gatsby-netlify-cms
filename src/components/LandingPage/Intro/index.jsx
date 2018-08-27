import React from 'react';
import Link from 'gatsby-link';
import './styles.scss';

const Intro = () => (
	<header
		className="intro intro-wrapper"
		style={{ backgroundImage: "url('./margaret-hunt-hill-bridge.jpg')" }}
	>
		<div className="intro-content">
			<div className="container u-alignCenter--ipad">
				<div className="header-flexWrapper">
					<h1 className="header-title intro-content">This is a happy place. Just beat the devil out of it.</h1>
					<div className="header-separator">
						<hr className="u-marginBottomSmall" />
						<div className="arrowCta-wrapper">
							<a href="#mainContent" className="arrowCta-element">Little trees and bushes grow however makes them happy.</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
)

export { Intro };
