import React, { Component } from "react";

import PageTitle from "../pageTitle";
import AccountInfoForm from "./accountInfoForm";

class AccountInfo extends Component {
  onSubmit = (fields) => {
    console.log(fields);
  };

  render() {
    return (
      <div>
        <PageTitle className="account-info" title="Account Information" />
        <AccountInfoForm
          onSubmit={this.onSubmit}
          className="account-info__form"
        />
      </div>
    );
  }
}

export default AccountInfo;
