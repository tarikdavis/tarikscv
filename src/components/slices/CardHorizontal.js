import React from 'react';
import { RichText } from 'prismic-reactjs';
import { PrismicLink, RichTextField } from '../prismic-elements';

/**
 * Horizontal image card slice component
 */
const CardHorizontal = ({ slice }) => {
  return (
<div className="row">
    <div className="container iconcards">
      <RichTextField field={slice.primary.card_horizontal_rte} />
      <div className="row">
        {slice.items.map((item, index) => (
          <ImageGalleryItem item={item} key={index} />
        ))}
      </div>
    </div>
  </div>
  );
};

/**
 * Gallery item component
 */
const ImageGalleryItem = ({ item }) => {
  return (
    <div className="col-sm">
      <img width="60" height="70" src={item.card_horizontal_image_2.url} alt={item.card_horizontal_image_2.alt} />
            <RichTextField field={item.card_horizontal_title} />
            <RichTextField field={item.card_horizontal_rte} />
      <p className="gallery-link">
        <PrismicLink link={item.card_horizontal_link}>
          {RichText.asText(item.card_horizontal_link_label)}
        </PrismicLink>
      </p>
    </div>

  );

};

export default CardHorizontal;
