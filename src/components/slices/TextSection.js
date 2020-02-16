import React from 'react';
import { RichTextField } from '../prismic-elements';

/**
 * Text section slice component
 */
 
const TextSection = ({ slice }) => {
	
  const sectionClass = slice.slice_label ? `text-section-${slice.slice_label}` : '';
  return (
  	<div className="row">
    <div className={`container ${sectionClass}`}>
      <RichTextField field={slice.primary.rich_text} />
    </div>
      </div>
  );

};


export default TextSection;
