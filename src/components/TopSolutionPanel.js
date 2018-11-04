import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './TopSolutionPanel.css'

class TopSolutionPanel extends Component {
    render(){
        return (
        <div className="component-display">
            <div>{this.props.value}</div>
        </div>
        );
    }
}

TopSolutionPanel.propTypes = {
    value: PropTypes.string
}

export default TopSolutionPanel;