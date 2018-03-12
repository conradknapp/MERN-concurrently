import React, { Component } from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
import HamburgerIcon from "./HamburgerIcon";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    visible: false
  };

  handleMouseDown = event => {
    this.toggleMenu();
    event.stopPropagation();
  };

  toggleMenu = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <nav className="Navbar">
        <div className="Icon__Container">
          <HamburgerIcon />
          <h1>
            <Link to="/">Recipes</Link>
          </h1>
        </div>
        <MenuButton handleMouseDown={this.handleMouseDown} />
        <Menu
          handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}
        />
      </nav>
    );
  }
}

export default Navbar;
