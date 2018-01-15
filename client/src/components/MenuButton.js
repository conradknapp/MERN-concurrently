import React, { Component } from "react";
import '../style.css';
 
class MenuButton extends Component {
  toggleButtonClass() {
    const ham = document.querySelector('.Hamburger');
    ham.classList.toggle("change");
  }

  render() {
    return (
      <button className="Hamburger" onMouseDown={this.props.handleMouseDown} onClick={this.toggleButtonClass}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </button>
    );
  }
}
 
export default MenuButton;