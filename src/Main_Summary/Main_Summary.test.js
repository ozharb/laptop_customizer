
import React from 'react';
import ReactDOM from 'react-dom';
import MainSummary from './Main_Summary'

describe('Main_Summary', () => {
    it ('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MainSummary />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});