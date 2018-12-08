import React from 'react';
import Img from 'gatsby-image';
import { Head } from '../components/common';
import { TeamDetails } from '../components/Team';


const Team = ({ data }) => (
	<div>
		<Head type="Organization" location="/team">
			Caruth Capital Partners | Our Team
		</Head>
		<TeamDetails />
	</div>
)

export default Team;
