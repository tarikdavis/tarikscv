import React from 'react';
import { RichText } from 'prismic-reactjs';
import { PrismicLink, RichTextField } from '../prismic-elements';

/**
 * Image gallery slice component
 */
const ImageGallery = ({ slice }) => {
  return (
<div className="row">
    <div className="container iconcards">
      <RichTextField field={slice.primary.gallery_title} />
      <div className="row">
        {slice.items.map((item, index) => (
          <GalleryItem item={item} key={index} />
        ))}
      </div>
    </div>
  </div>
  );
};

/**
 * Gallery item component
 */
const GalleryItem = ({ item }) => {
  return (
    <div className="col-sm">
      <img width="60" height="70" src={item.image.url} alt={item.image.alt} />
            <RichTextField field={item.image_description} />
            <RichTextField field={item.image_rte} />
      <p className="gallery-link">
        <PrismicLink link={item.link}>
          {RichText.asText(item.link_label)}
        </PrismicLink>
      </p>
    </div>

  );

};

export default ImageGallery;
