'use strict'
import React from 'react';
import ReactDom from 'react-dom';

import $ from 'jquery';
import citygmaApp from './Components/citygmaApp';

class citygma_entry extends React.Component {
    render() {
        return <h2>Lift Stuff! <span>❤️</span></h2>;
    }
}

ReactDom.render(<citygma_entry/>, document.getElementById('enygma'));
