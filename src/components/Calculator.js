import React, { Component } from 'react'

import TopSolutionPanel from '../containers/TopSolutionPanelContainer'
import ButtonPanel from '../containers/ButtonPanelContainer'

class Calculator extends Component {
    render() {
        return (
            <div>
                <TopSolutionPanel />
                <ButtonPanel />
            </div>
        );
    }
}

export default Calculator;