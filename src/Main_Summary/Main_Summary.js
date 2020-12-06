
import React, { Component } from 'react';
import '../index.css';
import './Main_Summary.css';
import SummaryOption from '../Summary_Option/Summary_Option'
import SummaryTotal from '../Summary_Total/Summary_Total';

class MainSummary extends Component{
    render(){
            return (
            <section className="main__summary">
            <h2>Your cart</h2>
            <SummaryOption selected = {this.props.selected} />
            <SummaryTotal selected = {this.props.selected} />
          </section>
        )
    }
}

  export default MainSummary ;