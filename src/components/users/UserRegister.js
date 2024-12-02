import React, { Component } from "react";
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
      Age: "",
      Country: "",
      intended_use: "",
      education_status: "",
      education_level: "",
      favorite_subject: "",
      user_password: "",
      error: null,
    };
  }

  // Event Handlers
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (let key in this.state) {
      if (key !== "error" && this.state[key] !== null) {
        formData.append(key, this.state[key]);
      }
    }

    // Make the API request
    API.post("/signup", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log("User registered successfully:", res.data);
        
        // Clear form fields
        this.setState({
          user_full_name: "",
          user_username: "",
          user_email: "",
          user_tele: "",
          user_contact_method: "",
          Age: "",
          Country: "",
          intended_use: "",
          education_status: "",
          education_level: "",
          favorite_subject: "",
          user_password: "",
          error: null,
        });
      })
      .catch((err) => {
        console.error("Error during registration:", err);
        this.setState({ error: "Registration failed. Please try again." });
      });
  };

  render() {
    return (
      <div className="register-container">
        <Header />
        <h2>Create New Account</h2>
        <form className="newUserForm" onSubmit={this.onSubmit}>
          <fieldset>
            <legend>Personal Information</legend>
            <label>
              Full Name:
              <input
                type="text"
                name="user_full_name"
                value={this.state.user_full_name}
                onChange={this.onChange}
                required
              />
            </label>
            <label>
              Username:
              <input
                type="text"
                name="user_username"
                value={this.state.user_username}
                onChange={this.onChange}
                required
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                name="Age"
                value={this.state.Age}
                onChange={this.onChange}
                min="13"
                max="120"
                required
              />
            </label>
            <label>
              Country:
              <input
                type="text"
                name="Country"
                value={this.state.Country}
                onChange={this.onChange}
                required
              />
            </label>
            <label>
              Intended Use:
              <select
                name="intended_use"
                value={this.state.intended_use}
                onChange={this.onChange}
                required
              >
                <option value="">Select</option>
                <option value="Personal">Personal</option>
                <option value="Business">Business</option>
                <option value="Educational">Educational</option>
              </select>
            </label>
          </fieldset>
          <fieldset>
            <legend>Contact Information</legend>
            <label>
              Email:
              <input
                type="email"
                name="user_email"
                value={this.state.user_email}
                onChange={this.onChange}
                required
              />
            </label>
            <label>
              Telephone:
              <input
                type="tel"
                name="user_tele"
                value={this.state.user_tele}
                onChange={this.onChange}
              />
            </label>
            <label>
              Preferred Contact Method:
              <select
                name="user_contact_method"
                value={this.state.user_contact_method}
                onChange={this.onChange}
                required
              >
                <option value="">Select</option>
                <option value="Email">Email</option>
                <option value="Telephone">Telephone</option>
                <option value="Text">Text</option>
              </select>
            </label>
          </fieldset>
          <fieldset>
            <legend>Education Information</legend>
            <label>
              Education Status:
              <select
                name="education_status"
                value={this.state.education_status}
                onChange={this.onChange}
                required
              >
                <option value="">Select</option>
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="Professional">Professional</option>
              </select>
            </label>
            <label>
              Education Level:
              <select
                name="education_level"
                value={this.state.education_level}
                onChange={this.onChange}
                required
              >
                <option value="">Select</option>
                <option value="High School">High School</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
                <option value="Doctorate">Doctorate</option>
              </select>
            </label>
            <label>
              Favorite Subject:
              <input
                type="text"
                name="favorite_subject"
                value={this.state.favorite_subject}
                onChange={this.onChange}
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Account Information</legend>
            <label>
              Password:
              <input
                type="password"
                name="user_password"
                value={this.state.user_password}
                onChange={this.onChange}
                required
              />
            </label>
          </fieldset>
          <button type="submit">Register</button>
          {this.state.error && <p className="error">{this.state.error}</p>}
        </form>
      </div>
    );
  }
}
