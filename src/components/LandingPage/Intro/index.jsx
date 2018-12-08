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
					<h1 className="header-title intro-content">Investment Criteria</h1>
					<div className="header-separator">
						<hr className="u-marginBottomSmall" />
						<div className="arrowCta-wrapper">
							<a href="#mainContent" className="arrowCta-element">

								<h6>Entrepreneur, family or employee owned businesses</h6>
								<span style={{ fontSize: '12px' }}>
							$3 - $20 million of EBITDA
							Business services and industrial companies
							Primarily majority investments
							Sellers reinvest alongside Caruth Capital
							Caruth Capital Investment Strategy:
Proven Model of Success: Driving Business Transformation
							Identify solid companies with defensible business models
									Recurring or maintenance driven revenue
									High value proposition leading to solid profit margins
									Positive end market trends
									Fragmented market with acquisition opportunities
							￼<br />
									<h6>Partnership approach to develop a growth strategy</h6>
									Align interests through equity ownership
									Transparent and honest dialogue with the management team
									Collaborative approach to strategic planning
									Develop a vision for a best in class organization
									Leverage core competencies and increase value to the customer
									Develop plans for acquisition and organic growth
							￼￼<br />
							Enhance infrastructure to support growth
									Recruit key management as needed
									Evaluate and implement new ERP, CRM and other IT systems
									Drive process oriented culture
									Improve financial reporting and KPIs
									Upgrade facilities and implement effective planning for capital investment
							￼￼<br />
									<h6>Build the business and increase profitability</h6>
									Deploy proven resources as needed from Caruth Capital's network including experts in operations, systems, sales and marketing, finance, and strategic pricing
									Develop organic growth initiatives including new service and product offerings and new greenfield locations
									Implement a process oriented acquisition search supported by Caruth Capital
									Provide capital for organic growth initiatives and strategic acquisitions

								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
)

export { Intro };
