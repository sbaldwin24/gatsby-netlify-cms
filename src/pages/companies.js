import React from 'react'
import Img from 'gatsby-image'
import { Container, Head } from '../components/common'
import { Details, Socials } from '../components/CompaniesPage'

const Companies = ({ data }) => (
	<div>
			<Head type="Organization" location="/companies">
				Caruth Capital Partners | Companies
			</Head>

			<Details />
	</div>
)

// export const pageQuery = graphql`
//   query AboutImageQuery {
//     AboutImage: imageSharp(id: { regex: "/me.jpg/" }) {
//       sizes(maxWidth: 630 ) {
//         ...GatsbyImageSharpSizes
//       }
//     }
//   }
// `

export default Companies
