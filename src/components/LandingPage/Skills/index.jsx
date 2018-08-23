import React from 'react';
import Link from 'gatsby-link';

const secondSectionBackground = './hero-1.jpg';
const ataRiskBackground = 'http://atariskstation.com/wp-content/uploads/2016/07/productheader.jpg';
const ataRiskLogo = './ata-risk-logo.png';
const secureLLCBackground = './secure-llc-background.png';
const secureLLCLogo = './Secure-logo.png';
const premierOutDoorLogo = './premier-outdoor-logo.png';
const premierOutDoorBackground = './premier-outdoor-background.jpg';


const Skills = () => {
	return (
		<div>   
			<div className="primaryHorizontal-cardsWrapper" id="mainContent" style={{ backgroundImage: `url(${ataRiskBackground})` }}>
				{/* Change the background image */}
				<div className="primaryHorizontal-wrapper primaryHorizontal-wrapper-first primaryHorizontal-wrapper-slash" id="parsable-card">
					<div className="container">
						<div className="primaryHorizontal-innerWrapper">
							<div className="primaryHorizontal-mainContentWrapper">
								<div className="combo combo--rev combo--stack--portable">
									<div className="combo-first u-verticalAlignMiddle">
										<img className="primaryHorizontal-logo"
											src={ataRiskLogo}
											alt="ATA Risk Station Logo"
										/>
									</div>
									<div className="combo-last">
										<div className="primaryHorizontal-sideContentWrapper">
											<h5 className="primaryHorizontal-description">Fluff that up. These little son of a guns hide in your brush and you just have to push them out. Let's put some happy trees and bushes back in here.</h5><Link className="btn btn--secondary " to="/companies">Our Companies</Link></div>
									</div>
								</div>
							</div>
							<div className="primaryHorizontal-separator">
								<hr className="u-marginBottomSmall" />
								<div className="arrowCta-wrapper">
									<a href="#clear-labs-card" className="arrowCta-element">What we’re doing for ATA Risk Stations</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="primaryHorizontal-wrapper primaryHorizontal-wrapper-1" id="clear-labs-card" style={{ backgroundImage: `url(${secureLLCBackground})` }}>
				<div className="container">
					<div className="primaryHorizontal-innerWrapper">
						<div className="primaryHorizontal-mainContentWrapper">
							<div className="combo combo--rev combo--stack--portable">
								<div className="combo-first u-verticalAlignMiddle">
									<img className="primaryHorizontal-logo" src={secureLLCLogo} alt="Secure LLC Logo" />
								</div>
								<div className="combo-last">
									<div className="primaryHorizontal-sideContentWrapper">
										<h5 className="primaryHorizontal-description">All you have to do is let your imagination go wild. This is the way you take out your flustrations. We have no limits to our world. We're only limited by our imagination. Now then, let's play.</h5><Link className="btn btn--secondary" to="/companies">Our Companies</Link></div>
								</div>
							</div>
						</div>
						<div className="primaryHorizontal-separator">
							<hr className="u-marginBottomSmall" />
							<div className="arrowCta-wrapper"><a href="#relayr-card" className="arrowCta-element">What we’re doing for Secure LLC.</a></div>
						</div>
					</div>
				</div>
			</div>

			<div className="primaryHorizontal-wrapper primaryHorizontal-wrapper-1" id="clear-labs-card" style={{ backgroundImage: `url(${premierOutDoorBackground})` }}>
				<div className="container">
					<div className="primaryHorizontal-innerWrapper">
						<div className="primaryHorizontal-mainContentWrapper">
							<div className="combo combo--rev combo--stack--portable">
								<div className="combo-first u-verticalAlignMiddle">
									<img className="primaryHorizontal-logo" src={premierOutDoorLogo} alt="Premier Outdoor Media Logo" />
								</div>
								<div className="combo-last">
									<div className="primaryHorizontal-sideContentWrapper">
										<h5 className="primaryHorizontal-description">You can spend all day playing with mountains. Just beat the devil out of it. Any little thing can be your friend if you let it be.</h5><Link className="btn btn--secondary" to="/companies">Our Companies</Link></div>
								</div>
							</div>
						</div>
						<div className="primaryHorizontal-separator">
							<hr className="u-marginBottomSmall" />
							<div className="arrowCta-wrapper"><Link to="#relayr-card" className="arrowCta-element">What we’re doing for Premier Outdoor Media.</Link></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export { Skills };
