import React, { Component } from 'react';

import '../Feature/Feature.css';
import '../index.css'

export default class Options extends Component{
    updateFeature = () => {
		
			this.props.updateFeature(
				this.props.feature,
				this.props.item
			);
	};
    render(){
      const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });

      const itemHash = `${this.props.item}-${this.props.id}`
    return (
        <div className="feature__item">
            <li
name={this.props.name}
item={this.props.item}
checked={this.props.item.name === this.props.selected[this.props.feature].name}
onClick ={ () => this.updateFeature()}
            >
        <input
        type="radio"
          id={itemHash}
          className="feature__option"
          name={this.props.name}
          item={this.props.item}
          checked={this.props.item.name === this.props.selected[this.props.feature].name}
          onChange ={ () => this.updateFeature()}
        />
        <label htmlFor={this.props.itemHash} className="feature__label">
          {this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
        </label>
        </li>
      </div>
    )
    }   
 }

