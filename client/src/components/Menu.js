import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    let visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <aside
        id="flyoutMenu"
        onMouseDown={this.props.handleMouseDown}
        className={visibility}
      >
        <h2>
          <Link to="/">Home</Link>
        </h2>
        <h2>
          <Link to="/recipes">Recipes</Link>
        </h2>
        <h2>
          <Link to="/search">Search</Link>
        </h2>
        <h2>
          <Link to="/about">About</Link>
        </h2>
      </aside>
    );
  }
}

export default Menu;
