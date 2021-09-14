import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import AccountInfo from "./accountinfo";
import PurchaseHistory from "./purchaseHistory";

class Account extends Component {
  componentDidMount() {
    const navbarLinks = [
      {
        title: "Purchase History",
        active: false,
        component: <PurchaseHistory />,
      },
      {
        title: "Account Information",
        active: true,
        component: <AccountInfo />,
      },
    ];
    this.props.setHeaderLinks([]);
    this.props.setNavbarLinks(navbarLinks);
  }

  renderContent() {
    let jsx;
    if (this.props.navbarLinks) {
      this.props.navbarLinks.forEach((link) => {
        if (link.active) {
          jsx = link.component;
        }
      });
    }
    return jsx;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps(state) {
  const { headerLinks, navbarLinks } = state.headerNavbar;
  return { headerLinks, navbarLinks };
}

Account = connect(mapStateToProps, actions)(Account);

export default Account;