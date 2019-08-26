'use strict'
import React from 'react';
import ReactDom from 'react-dom';

import $ from 'jquery';
/*import CitygmaApp from './Components/CitygmaApp';*/

class Citygma_entry extends React.Component {
    render() {
        return <h2>Lift Stuff! <span>❤️</span></h2>;
    }
}

ReactDom.render(<Citygma_entry/>, document.getElementById('enygma'));
