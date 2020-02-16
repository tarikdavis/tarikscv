import React from 'react';
import { RichText } from 'prismic-reactjs';
import { PrismicLink, RichTextField } from '../prismic-elements';

/**
 * Icon card slice component
 */
const IconCard = ({ slice }) => (
  <section className="highlight content-section">
    <div className="highlight-left">
      <RichTextField field={slice.primary.icon_card_title} />
      <RichTextField field={slice.primary.icon_card_description} />
      <p>
        <PrismicLink link={slice.primary.icon_card_button}>
          {RichText.asText(slice.primary.icon_card_button_label)}
        </PrismicLink>
      </p>
    </div>
    <div className="highlight-right">
      <img
        src={slice.primary.icon_card_image.url}
        alt={slice.primary.icon_card_image.alt}
      />
    </div>
  </section>
);

export default IconCard;
