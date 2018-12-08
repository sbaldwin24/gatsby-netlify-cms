import React from 'react';
import Link from 'gatsby-link';

const ataRiskLogo = './ata-risk-logo.png';
const secureLLCLogo = './secure-logo-blue.jpeg';
const premierOutDoorLogo = './premier-outdoor-logo-blue.png';

const Details = () => (
	<div>
		<div className="primaryHorizontal-cardsWrapper">
			<header className="header header-secondary header--absoluteSlash false header--alreadyLoadedOnce" style={{ backgroundImage: "url('./business-deal.jpg')" }}>
				<div id="header-wrapper" className="header-wrapper">
					<div className="container u-alignCenter--ipad">
						<div>
							<h2 className="header-title header-title--secondary">Maybe there's a happy little waterfall happening over here. We can fix anything.</h2>
							<h5 className="header-subheading">Let's have a happy little tree in here. Just let your mind wander and enjoy. This should make you happy. Let's get crazy.</h5>
							<hr className="u-marginBottomSmall" />
						</div>
					</div>
				</div>
			</header>
		</div>

		<div className="u-paddingTopLarge">
			<div>
				<div className="container">
					<div className="grid">
						<div className="grid-1of4 grid-1of3--portable grid-1of2--ipad">
							<div className="primarySquareCard-wrapper" style={{ backgroundImage: `url(${ataRiskLogo})` }} />
						</div>
						<div className="grid-1of4 grid-1of3--portable grid-1of2--ipad">
							<div className="primarySquareCard-wrapper" style={{ backgroundImage: `url(${secureLLCLogo})` }} />
						</div>
						<div className="grid-1of4 grid-1of3--portable grid-1of2--ipad">
							<div className="primarySquareCard-wrapper" style={{ backgroundImage: `url(${premierOutDoorLogo})` }} />
						</div>
						<div className="grid-1of4 grid-1of3--portable grid-1of2--ipad">
							<div className="primarySquareCard-wrapper" style={{ backgroundImage: `url(${secureLLCLogo})` }} />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export { Details };
