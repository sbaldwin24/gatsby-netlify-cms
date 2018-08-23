import React from 'react';
import Img from 'gatsby-image';
import { Head } from '../components/common';
import { FoundersDetails } from '../components/FoundersPage';


const Founders = ({ data }) => (
	<div>
		<Head type="Organization" location="/founders">
      Caruth Capital Partners | Founders
		</Head>
		<FoundersDetails />
	</div>
)


export default Founders
