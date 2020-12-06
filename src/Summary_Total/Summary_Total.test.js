import React from 'react';
import ReactDOM from 'react-dom';
import SummaryTotal from './Summary_Total'

describe('Summary_Total', () => {
    it ('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SummaryTotal />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
