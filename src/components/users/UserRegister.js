import { Component } from "react";
import "../../styles/App.css";
import API from "../utils/API";
import Header from "../utils/Header";

export default class UserCreateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_full_name: "",
      user_username: "",
      user_email: "",
      user_tele: "",
      user_contact_method: "",
    };

    // Binding event handlers
    this.onChangeUserFullName = this.onChangeUserFullName.bind(this);
    this.onChangeUserUsername = this.onChangeUserUsername.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserTele = this.onChangeUserTele.bind(this);
    this.onChangeUserContactMethod = this.onChangeUserContactMethod.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // Event Handlers for Form Inputs
  onChangeUserFullName(e) {
    this.setState({ user_full_name: e.target.value });
  }

  onChangeUserUsername(e) {
    this.setState({ user_username: e.target.value });
  }

  onChangeUserEmail(e) {
    this.setState({ user_email: e.target.value });
  }

  onChangeUserTele(e) {
    this.setState({ user_tele: e.target.value });
  }

  onChangeUserContactMethod(e) {
    this.setState({ user_contact_method: e.target.value });
  }

  // Form Submission Handler
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      user_full_name: this.state.user_full_name,
      user_username: this.state.user_username,
      user_email: this.state.user_email,
      user_tele: this.state.user_tele,
      user_contact_method: this.state.user_contact_method,
    };

    // Use the API object to make the POST request
    API.post("/signup", newUser) // '/signup' is appended to the baseURL
      .then((res) => {
        console.log("User registered successfully:", res.data);
      })
      .catch((err) => {
        console.error("Error during user registration:", err);
      });

    // Clear the form state
    this.setState({
      user_full_name: "",
      user_username: "",
      user_email: "",
      user_tele: "",
      user_contact_method: "",
    });
  }

  render() {
    return (
      <div>
        <Header />
        <h2>Create an Account</h2>
        <form className="newUserForm" onSubmit={this.onSubmit}>
          <label className="username_or_email">
            Full Name:
            <input
              type="text"
              required
              value={this.state.user_full_name}
              onChange={this.onChangeUserFullName}
            />
          </label>

          <label className="username_or_email">
            Username:
            <input
              type="text"
              required
              value={this.state.user_username}
              onChange={this.onChangeUserUsername}
            />
          </label>

          <label className="username_or_email">
            Email:
            <input
              type="email"
              required
              value={this.state.user_email}
              onChange={this.onChangeUserEmail}
            />
          </label>

          <label className="username_or_email">
            Telephone:
            <input
              type="tel"
              value={this.state.user_tele}
              onChange={this.onChangeUserTele}
            />
          </label>

          <label className="username_or_email">
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

          <button className="login" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
