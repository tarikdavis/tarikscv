import React from 'react';
import { RichText } from 'prismic-reactjs';
import { PrismicLink, RichTextField } from '../prismic-elements';

/**
 * Image highlight slice component
 */
const ImageHighlight = ({ slice }) => (

    <div class="col">
 
    <div>
      <RichTextField field={slice.primary.title} />
      <RichTextField field={slice.primary.headline} />
      <RichTextField field={slice.primary.image_rte} />
      <p>
        <PrismicLink link={slice.primary.link}>
          {RichText.asText(slice.primary.link_label)}
        </PrismicLink>
      </p>
    </div>
    <div>
      <img
        src={slice.primary.featured_image.url}
        alt={slice.primary.featured_image.alt}
      />
    </div>
  </div>

);

export default ImageHighlight;
