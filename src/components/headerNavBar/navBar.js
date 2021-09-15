import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class NavBar extends Component {
  render() {
    return (
      <div className="navBar">
        {this.props.navbarLinks.map((link, index) => {
          return (
            <a
              className={`navbar_link ${link.active ? "green-text" : ""}`}
              key={index}
              onClick={() => this.props.changeNavbarActive(link._id)}
            >
              {link.title}
            </a>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { navbarLinks } = state.headerNavbar;
  return {
    navbarLinks,
  };
}

NavBar = connect(mapStateToProps, actions)(NavBar);

export default NavBar;
