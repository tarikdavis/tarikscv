import React from 'react';
import { RichText } from 'prismic-reactjs';
import { PrismicLink, RichTextField } from '../prismic-elements';

/**
 * Image highlight slice component
 */
const ImageHighlight = ({ slice }) => (

<div class="max-w-xs rounded overflow-hidden shadow-lg my-2">
  <img class="w-full" src={slice.primary.featured_image.url} alt={slice.primary.featured_image.alt} />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">
      <RichTextField field={slice.primary.title} />
    </div>
    <p class="text-grey-darker text-base">
      <RichTextField field={slice.primary.headline} />
      <RichTextField field={slice.primary.image_rte} />
    </p>
    <p>
        <PrismicLink link={slice.primary.link}>
          {RichText.asText(slice.primary.link_label)}
        </PrismicLink>
      </p>
</div>
</div>
 
   

);

export default ImageHighlight;
