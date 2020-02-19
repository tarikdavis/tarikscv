import React from 'react';
import { RichText } from 'prismic-reactjs';
import { PrismicLink, RichTextField } from '../prismic-elements';

/**
 * Icon card slice component
 */
const IconCard = ({ slice }) => (
<div class="container mx-auto px-4 py-4">
<section>

<div className="flex max-w-full rounded overflow-hidden shadow-lg bg-white">

<div className="flex-initial px-6 py-6">
<img
        src={slice.primary.icon_card_image.url}
        alt={slice.primary.icon_card_image.alt}
      />
</div>
<div className="flex-initial px-6 py-4">
    <div className="font-bold text-l md:text-xl lg:text-2xl mb-2">
      <RichTextField field={slice.primary.icon_card_title} />
      </div>

  <p className="text-gray-700 text-base">
<RichTextField field={slice.primary.icon_card_description} />
</p>
</div>
<div className="px-6 py-4">
        <PrismicLink link={slice.primary.icon_card_button}>
          {RichText.asText(slice.primary.icon_card_button_label)}
        </PrismicLink>
</div>
</div>

</section>
</div>
);

export default IconCard;

