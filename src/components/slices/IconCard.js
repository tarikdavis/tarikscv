import React from 'react';
import { RichText } from 'prismic-reactjs';
import { PrismicLink, RichTextField } from '../prismic-elements';

/**
 * Icon card slice component
 */
const IconCard = ({ slice }) => (
<section>
<div class="container mx-auto max-w-5xl m-8 bg-gray-100 rounded">
<div class="flex flex-wrap flex-col-reverse sm:flex-row">

<div className="sm:invisible md:visible lg:visible xl:visible h-48 lg:h-auto lg:w-48 flex-none text-center overflow-hidden">
<img
        src={slice.primary.icon_card_image.url}
        alt={slice.primary.icon_card_image.alt}
      />
</div>
<div class="w-full p-6 mt-6">
<div class="align-middle">
<h3 class="text-2xl text-gray-800 font-bold leading-none mb-3"><RichTextField field={slice.primary.icon_card_title} /></h3>
<p class="text-gray-600 mb-4">
<RichTextField field={slice.primary.icon_card_description} />
</p>
<p>
        <PrismicLink link={slice.primary.icon_card_button}>
          {RichText.asText(slice.primary.icon_card_button_label)}
        </PrismicLink>
      </p>
</div>
</div>
</div>
</div>
</section>
);

export default IconCard;
