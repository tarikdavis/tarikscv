import React from 'react';
import { RichText } from 'prismic-reactjs';
import { PrismicLink } from './prismic-elements';

/**
 * Page banner component
 */
const PageBanner = ({ banner }) => (
<div className="relative pt-16 pb-32 flex content-center items-center justify-center"
    style={{
  minHeight: "75vh"
}}>
  <div className="absolute top-0 w-full h-full bg-center bg-cover"
  style={{
    backgroundImage:`url(${banner.image.url})` }}
    >
    <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
</div>
<div className="container relative mx-auto">
  <div className="items-center flex flex-wrap">
    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
      <div className="pr-12">
        <h1 className="text-white font-semibold text-5xl">
        {RichText.asText(banner.page_banner_title)}
      </h1>
      <p className="mt-4 text-lg text-gray-300">
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
    </div>

  </div>
  </div>
  </div>
);

export default PageBanner;
