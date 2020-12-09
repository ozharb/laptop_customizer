import React from 'react';
import slugify from 'slugify';
import './Feature.css';
import '../index.css'
import Options from '../Options/Options'

export default function Feature ({
  features,
  feature,
	title,
	options,
	selected,
	updateFeature,
}) {
 
 
      
  return(
     
    <fieldset className="feature" >
    <legend className="feature__name">
      <h3>{feature}</h3>
    </legend>
  
    {options &&
      options.map((key, index, options) => (
             <Options  
        key = {index}
        title={title}
        id={index}
        item={options[index]}
        features = {features}
        selected = {selected}
        updateFeature={updateFeature} 
        name={slugify(feature)}
        feature = {feature} 
         />

           ))}
</fieldset>
  )
  
}
   
 


Feature.defaultProps = {
    feature: []
  };
