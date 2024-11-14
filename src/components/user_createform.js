import React, { Component } from "react";
import axios from "axios";

export default class UserCreateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_full_name: "",
      user_account_number: "",
      user_username: "",
      user_email: "",
      user_tele: "",
      user_contact_method: "",
      session_id: "",
      user_cookie: "",
      user_pas_rst_tkn: "",
      user_access_level: "",
    };

    this.onChangeUserFullName = this.onChangeUserFullName.bind(this);
    this.onChangeUserAccountNumber = this.onChangeUserAccountNumber.bind(this);
    this.onChangeUserUsername = this.onChangeUserUsername.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserTele = this.onChangeUserTele.bind(this);
    this.onChangeUserContactMethod = this.onChangeUserContactMethod.bind(this);
    this.onChangeSessionID = this.onChangeSessionID.bind(this);
    this.onChangeUserCookie = this.onChangeUserCookie.bind(this);
    this.onChangeUserPasRstTkn = this.onChangeUserPasRstTkn.bind(this);
    this.onChangeUserAccessLevel = this.onChangeUserAccessLevel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeUserFullName(e) {
    this.setState({
      user_full_name: e.target.value,
    });
  }

  onChangeUserAccountNumber(e) {
    this.setState({
      user_account_number: e.target.value,
    });
  }

  onChangeUserUsername(e) {
    this.setState({
      user_username: e.target.value,
    });
  }

  onChangeUserEmail(e) {
    this.setState({
      user_email: e.target.value,
    });
  }

  onChangeUserTele(e) {
    this.setState({
      user_tele: e.target.value,
    });
  }

  onChangeUserContactMethod(e) {
    this.setState({
      user_contact_method: e.target.value,
    });
  }

  onChangeSessionID(e) {
    this.setState({
      session_id: e.target.value,
    });
  }

  onChangeUserCookie(e) {
    this.setState({
      user_cookie: e.target.value,
    });
  }

  onChangeUserPasRstTkn(e) {
    this.setState({
      user_pas_rst_tkn: e.target.value,
    });
  }

  onChangeUserAccessLevel(e) {
    this.setState({
      user_access_level: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      user_full_name: this.state.user_full_name,
      user_account_number: this.state.user_account_number,
      user_username: this.state.user_username,
      user_email: this.state.user_email,
      user_tele: this.state.user_tele,
      user_contact_method: this.state.user_contact_method,
      session_id: this.state.session_id,
      user_cookie: this.state.user_cookie,
      user_pas_rst_tkn: this.state.user_pas_rst_tkn,
      user_access_level: this.state.user_access_level,
    };

    axios
      .post("/signup", newUser)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        <h2>Create an Account</h2>
        <form onSubmit={this.onSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              required
              value={this.state.user_full_name}
              onChange={this.onChangeUserFullName}
            />
          </label>

          <label>
            Account Number:
            <input
              type="number"
              value={this.state.user_account_number}
              onChange={this.onChangeUserAccountNumber}
            />
          </label>

          <label>
            Username:
            <input
              type="text"
              required
              value={this.state.user_username}
              onChange={this.onChangeUserUsername}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              required
              value={this.state.user_email}
              onChange={this.onChangeUserEmail}
            />
          </label>

          <label>
            Telephone:
            <input
              type="tel"
              value={this.state.user_tele}
              onChange={this.onChangeUserTele}
            />
          </label>

          <label>
            Preferred Contact Method:
            <select
              required
              value={this.state.user_contact_method}
              onChange={this.onChangeUserContactMethod}
            >
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
              <option value="SMS">SMS</option>
            </select>
          </label>

          <label>
            Session ID:
            <input
              type="text"
              required
              value={this.state.session_id}
              onChange={this.onChangeSessionID}
            />
          </label>

          <label>
            Cookie:
            <input
              type="text"
              value={this.state.user_cookie}
              onChange={this.onChangeUserCookie}
            />
          </label>

          <label>
            Password Reset Token:
            <input
              type="text"
              value={this.state.user_pas_rst_tkn}
              onChange={this.onChangeUserPasRstTkn}
            />
          </label>

          <label>
            Access Level:
            <select
              required
              value={this.state.user_access_level}
              onChange={this.onChangeUserAccessLevel}
            >
              <option value="1">Admin</option>
              <option value="2" selected>
                User
              </option>
            </select>
          </label>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}
