
import React from 'react';
import ReactDOM from 'react-dom';
import SummaryOption from './Summary_Option'

describe('Summary_Option', () => {
    it ('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SummaryOption />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
