import React, { Component } from 'react';
import './style.scss';

const IMAGE_FADE_IN_CLASS = 'iron-image--fade-in';

class IronImage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			imageLoadFinishedClass: '',
			placeholderStyle: { backgroundImage: `url(${props.placeholder})` },
		};

		this.imageLoadHandler = this.imageLoadHandler.bind(this);
	}

	imageLoadHandler() {
		this.setState({ imageLoadFinishedClass: IMAGE_FADE_IN_CLASS });
	}

	render() {
		const { placeholderStyle, imageLoadFinishedClass, imageStyle } = this.state;
		const { alt, src } = this.props;
		const { imageLoadHandler } = this;

		return (
			<div
				className="iron-image__container"
				style={placeholderStyle}
			>
				<img
					className={`iron-image ${imageLoadFinishedClass}`}
					alt={alt}
					src={src}
					style={imageStyle}
					onLoad={imageLoadHandler}
				/>
			</div>
		);
	}
}

export { IronImage };
