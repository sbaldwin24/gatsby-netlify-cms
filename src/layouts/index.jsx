import React from 'react'
import { Subscribe } from '../components/common'
import { Header, Footer } from '../components/Includes'
import './index.scss'
import './main.scss'

const TemplateWrapper = ({ children }) => (
	<div>
		<Header />
		{/* <div
			style={{
				width: '100%',
				paddingTop: '7rem'
			}}
		> */}
		<div>
			{children()}
		</div>
		<Footer />
	</div>
)

export default TemplateWrapper
