import './ImageList.css';
import React from 'react';

const ImageList = (props) => {
	const images = props.images.map(({ id, description, urls }) => {
		return <img src={urls.regular} key={id} alt={description} />;
	});

	return <div className='image-list'>{images}</div>;
};

export default ImageList;
