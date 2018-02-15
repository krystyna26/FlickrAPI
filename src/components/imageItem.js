import React, { Component } from 'react';


const ImageItem = ({image, onImageClick}) => {
    // response going back from flickr
   
    const imageURL = image.snippet.thumbnails.default.url;
    const url = `http://api.flickr.com/services/feeds/photos_public.gne`;
    const imageID = image.id.imageID;

    return (
        // function is coming from imageList and displays single image
        <li onClick={() => onImageClick(image)}>
            <div>
                 <img src={imageURL} alt=""/>
            </div>
        </li>
    )
}

export default ImageItem;