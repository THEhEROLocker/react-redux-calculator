import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Button.css'

class Button extends Component {
  
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.handleButtonClick(this.props.actionCreator,this.props.name);
  }
  
  render() {
    const styling = [
      "component-button",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : "",
    ]

    return (
      <div className={styling.join(" ").trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }


}

Button.propTypes = {
  name: PropTypes.string,
  handleButtonClick: PropTypes.func,
  actionCreator: PropTypes.func
}

export default Button;