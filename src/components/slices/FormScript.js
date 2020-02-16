import React from 'react';
import { RichText } from 'prismic-reactjs';

/**
 * Form section slice component
 */
 
const FormScript = ({ slice }) => {
	
  const sectionClass = slice.slice_label ? `text-section-${slice.slice_label}` : '';
  return (
  	<div className="row">
    <div className={`container ${sectionClass}`}>
    {RichText.asText(slice.primary.third_party_form_script)}
    </div>
      </div>
  );

};


export default FormScript;
