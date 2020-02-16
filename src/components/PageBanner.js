import React from 'react';
import { RichText } from 'prismic-reactjs';
import { PrismicLink } from './prismic-elements';

/**
 * Page banner component
 */
const PageBanner = ({ banner }) => (
  <section
    className="homepage-banner"style={{ backgroundImage: `url(${banner.image.url})` }} 
  >
    <div className="banner-content container">
      <h2 className="banner-title">
        {RichText.asText(banner.page_banner_title)}
      </h2>
      <p className="banner-description">
        {RichText.asText(banner.page_banner_tagline)}
      </p>
      <PrismicLink
        link={banner.page_banner_link_1}
        linkClass="banner-button"
      >
        {RichText.asText(banner.page_banner_link_label_1)}
      </PrismicLink>
      <PrismicLink
        link={banner.page_banner_link_2}
        linkClass="banner-button"
      >
        {RichText.asText(banner.page_banner_link_label_2)}
      </PrismicLink>
    </div>
  </section>
);

export default PageBanner;
