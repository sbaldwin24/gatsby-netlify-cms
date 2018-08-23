import React from 'react';
import Link from 'gatsby-link';

const aboutHeader = './business-deal.jpg';
const foundersFillerTwo = './founders-first-image.jpg';
const foundersFillerThree = './filler-3.jpg';
const foundersFillerFour = './filler-4.jpg';
const benWilhite = './ben-detar-wilhite.jpeg'

const FoundersDetails = () => (
	<div>
		<header className="header header-secondary header--absoluteSlash false" style={{ backgroundImage: `url(${aboutHeader})`, backgroundSize: 'cover' }}>
			<div id="header-wrapper" className="header-wrapper">
				<div className="container u-alignCenter--ipad">
					<div>
						<h2 className="header-title header-title--secondary">Fluffy Kittens</h2>
						<h5 className="header-subheading">Happy little Trees</h5>
						<div className="u-marginBottomSmall">
							<hr className="u-marginBottomSmall" />
						</div>
					</div>
				</div>
			</div>
		</header>
		<div className="u-marginBottomLarge">
			<div className="secondaryHorizontalCard-wrapper">
				<div className="secondaryHorizontalCard-innerWrapper">
					<div className="secondaryHorizontalCard-background" style={{ backgroundImage: `url(${foundersFillerTwo})` }}>&nbsp;</div>
					<div className="container">
						<div className="secondaryHorizontalCard-contentWrapper">
							<h6 className="secondaryHorizontalCard-subtitle">About Caruth Capital Partners</h6>
							<h4 className="secondaryHorizontalCard-title">Happy Trees</h4>
							<p className="secondaryHorizontalCard-description u-marginBottomMedium">Maybe there's a happy little waterfall happening over here. We can fix anything. There it is. I get carried away with this brush cleaning. You can do anything your heart can imagine. A tree cannot be straight if it has a crooked trunk.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="secondaryHorizontalCard-wrapper">
				<div className="secondaryHorizontalCard-innerWrapper">
					<div className="secondaryHorizontalCard-background" style={{ backgroundImage: `url(${foundersFillerThree})` }}>&nbsp;</div>
					<div className="container">
						<div className="secondaryHorizontalCard-contentWrapper">
							<h6 className="secondaryHorizontalCard-subtitle">Fluffy clouds</h6>
							<h4 className="secondaryHorizontalCard-title">Fluffy rabbits</h4>
							<p className="secondaryHorizontalCard-description u-marginBottomMedium">There are no mistakes. You can fix anything that happens. Each highlight must have it's own private shadow. Volunteering your time; it pays you and your whole community fantastic dividends. Trees cover up a multitude of sins.</p>
							<div className="u-marginBottomMedium--ipad"><Link className="btn " to="/companies">Our Companies</Link></div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="secondaryHorizontalCard-wrapper">
			<div className="secondaryHorizontalCard-innerWrapper">
				<div className="secondaryHorizontalCard-background" style={{ backgroundImage: `url(${foundersFillerFour})` }}>&nbsp;</div>
				<div className="container">
					<div className="secondaryHorizontalCard-contentWrapper">
						<h6 className="secondaryHorizontalCard-subtitle">Our Platform</h6>
						<h4 className="secondaryHorizontalCard-title">Fluffy &amp; Clouds</h4>
						<p className="secondaryHorizontalCard-description u-marginBottomMedium">There are no mistakes. You can fix anything that happens. Each highlight must have it's own private shadow. Volunteering your time; it pays you and your whole community fantastic dividends. Trees cover up a multitude of sins. </p>
					</div>
				</div>
			</div>
		</div>

		<br />
		<br />
		<br />
		<div className="container">
			<h4 className="u-alignCenter u-marginBottomLarge u-marginBottomMedium--ipad">Our Team</h4>
			<div className="grid">
				<div className="grid-1of3 grid-1of2--portable grid-1of1--ipad">
					<Link to="https://www.linkedin.com/in/ben-detar-wilhite-23985224" target="_blank" className="primaryVerticalCard-wrapper">
						<div className="primaryVerticalCard-image" style={{ backgroundImage: `url(${benWilhite})` }}>
							<div className="primaryVerticalCard-linkedin"><img className="primaryVerticalCard-linkedin" src="./linkedin.png" alt="linkedIn icon" /></div>
						</div>
						<h6 className="primaryVerticalCard-name">Ben deTar Wilhite</h6>
						<span className="primaryVerticalCard-title">Managing Partner</span>
					</Link>
				</div>
				<div className="grid-1of3 grid-1of2--portable grid-1of1--ipad">
					<Link to="https://www.linkedin.com/in//" target="_blank" className="primaryVerticalCard-wrapper">
						<div className="primaryVerticalCard-image" style={{ backgroundImage: `url(${benWilhite})` }}>
							<div className="primaryVerticalCard-linkedin"><img className="primaryVerticalCard-linkedin" src="./linkedin.png" alt="linkedIn icon" /></div>
						</div>
						<h6 className="primaryVerticalCard-name">Ronald Reagan</h6><span className="primaryVerticalCard-title">Associate Partner</span>
					</Link>
				</div>
				<div className="grid-1of3 grid-1of2--portable grid-1of1--ipad">
					<Link to="https://www.linkedin.com/in/" target="_blank" className="primaryVerticalCard-wrapper">
						<div className="primaryVerticalCard-image" style={{ backgroundImage: `url(${benWilhite})` }}>
							<div className="primaryVerticalCard-linkedin"><img className="primaryVerticalCard-linkedin" src="./linkedin.png" alt="linkedIn icon" /></div>
						</div>
						<h6 className="primaryVerticalCard-name">Alex Jones</h6><span className="primaryVerticalCard-title">Truth teller</span>
					</Link>
				</div>
			</div>
		</div>
	</div>
)
export { FoundersDetails };
