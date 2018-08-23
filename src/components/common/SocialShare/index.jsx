import React from 'react'
import {
	FacebookShareButton,
	GooglePlusShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	TelegramShareButton,
	RedditShareButton,
	FacebookIcon,
	TwitterIcon,
	TelegramIcon,
	GooglePlusIcon,
	LinkedinIcon,
	RedditIcon
} from 'react-share'
import config from '../../../../data/Config'
import './styles.scss'

const SocialShare = ({ title, path }) => {
	const iconSize = 32
	return (
		<div className="social-share">
			<RedditShareButton url={`${config.url}${path}`} title={title}>
				<RedditIcon round size={iconSize} />
			</RedditShareButton>
			<TwitterShareButton url={`${config.url}${path}`} title={title}>
				<TwitterIcon round size={iconSize} />
			</TwitterShareButton>
			<GooglePlusShareButton url={`${config.url}${path}`}>
				<GooglePlusIcon round size={iconSize} />
			</GooglePlusShareButton>
			<FacebookShareButton url={`${config.url}${path}`} quote={title}>
				<FacebookIcon round size={iconSize} />
			</FacebookShareButton>
			<LinkedinShareButton
				url={`${config.url}${path}`}
				title={title}
				description={title}
			>
				<LinkedinIcon round size={iconSize} />
			</LinkedinShareButton>
			<TelegramShareButton url={`${config.url}${path}`}>
				<TelegramIcon round size={iconSize} />
			</TelegramShareButton>
		</div>
	)
}

export { SocialShare }
