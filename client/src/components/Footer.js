import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>
          &#169;{" "}
          <a
            href="https://github.com/conradknapp"
            className="ArticleLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conrad Knapp
          </a>{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    );
  }
}

export default Footer;
