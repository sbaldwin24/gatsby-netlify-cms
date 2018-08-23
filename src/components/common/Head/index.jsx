import React from 'react';
import Helmet from 'react-helmet';
import config from '../../../../data/Config';

const Head = ({ children, type, headline, datePublished, dateModified, cover, location = '' }) => {
	const structuredDataArticle = `{
		"@context": "http://schema.org",
		"@type": "${type}",
		"mainEntityOfPage": {
			"@type": "WebPage",
			"@id": "https://google.com/article"
		},
		"headline": "${headline}",
		"image": {
			"@type": "imageObject",
			"url": "${cover ? `https://nostalgic-morse-7a6322.netlify.com${cover}` : `https://media.licdn.com/dms/image/C4E0BAQFnnS0w8rn-bQ/company-logo_200_200/0?e=2159024400&v=beta&t=705BnHrVvoYHW1nMarDqnU29ja_SzcaxtSEHtOjxkGk`}",
			"height": "600",
			"width": "800"
		},
		"datePublished": "${datePublished}",
		"dateModified": "${dateModified}",
		"author": {
			"@type": "Person",
			"name": "Ben deTar Wilhite"
		},
		"publisher": {
		"@type": "Organization",
		"name": "Caruth Capital Partners",
		"logo": {
			"@type": "ImageObject",
			"url": "https://nostalgic-morse-7a6322.netlify.com/favicon/logo-48.png"
		}
		},
		"description": "${headline}"
	}`

	const structuredDataOrganization = `{
    "@context" : "http://schema.org",
    "@type" : "${type}",
    "legalName" : "Ismail Ghallou",
    "url" : "https://nostalgic-morse-7a6322.netlify.com/",
    "logo" : "https://nostalgic-morse-7a6322.netlify.com/favicon/logo-48.png",
    "contactPoint" : [{
		"@type" : "ContactPoint",
		"telephone" : "214-555-5555",
		"contactType" : "customer service"
    }],
    "sameAs" : [
		"https://www.linkedin.com/company/caruth-capital-partners"
	]
  }`

	return (
		<Helmet>
			<meta name="description" content={type === 'NewsArticle' ? headline : config.description} />
			<meta name="image" content={cover ? `https://nostalgic-morse-7a6322.netlify.com${cover}` : `https://media.licdn.com/dms/image/C4E0BAQFnnS0w8rn-bQ/company-logo_200_200/0?e=2159024400&v=beta&t=705BnHrVvoYHW1nMarDqnU29ja_SzcaxtSEHtOjxkGk`} />

			<meta property="og:url" content={`${config.url}${location}/?ref=Caruth Capital Partners.com`} />
			<meta property="og:type" content={type === 'NewsArticle' ? 'NewsArticle' : 'website'} />
			<meta property="og:title" content={type === 'NewsArticle' ? headline : config.copyright.label} />
			<meta property="og:description" content={type === 'NewsArticle' ? headline : config.description} />
			<meta property="og:image" content={cover ? `https://nostalgic-morse-7a6322.netlify.com${cover}` : `https://media.licdn.com/dms/image/C4E0BAQFnnS0w8rn-bQ/company-logo_200_200/0?e=2159024400&v=beta&t=705BnHrVvoYHW1nMarDqnU29ja_SzcaxtSEHtOjxkGk`} />
			<meta property="fb:app_id" content={config.social.facebook} />

			<meta name="twitter:card" content={cover ? `https://nostalgic-morse-7a6322.netlify.com${cover}` : `https://media.licdn.com/dms/image/C4E0BAQFnnS0w8rn-bQ/company-logo_200_200/0?e=2159024400&v=beta&t=705BnHrVvoYHW1nMarDqnU29ja_SzcaxtSEHtOjxkGk`} />
			<meta name="twitter:creator" content={config.social.twitter} />
			<meta name="twitter:site" content="@Caruth Capital Partners" />
			<meta name="twitter:title" content={type === 'NewsArticle' ? headline : config.copyright.label} />
			<meta name="twitter:description" content={type === 'NewsArticle' ? headline : config.description} />
			<meta name="twitter:image:src" content={cover ? `https://nostalgic-morse-7a6322.netlify.com${cover}` : `https://media.licdn.com/dms/image/C4E0BAQFnnS0w8rn-bQ/company-logo_200_200/0?e=2159024400&v=beta&t=705BnHrVvoYHW1nMarDqnU29ja_SzcaxtSEHtOjxkGk`} />
			<script type="application/ld+json">{type === 'NewsArticle' ? structuredDataArticle : structuredDataOrganization}</script>
			<title>{ children }</title>
		</Helmet>
	)
}

export { Head }
