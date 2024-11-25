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
      user_age: "",
      user_country: "",
      user_intended_use: "",
      user_education_status: "",
      user_education_level: "",
      user_favorite_subject: "",
      user_password: "",
      user_profile_picture: null,
    };
  }

  // Event Handlers
  onChangeUserFullName = (e) => {
    this.setState({ user_full_name: e.target.value });
  };

  onChangeUserUsername = (e) => {
    this.setState({ user_username: e.target.value });
  };

  onChangeUserEmail = (e) => {
    this.setState({ user_email: e.target.value });
  };

  onChangeUserTele = (e) => {
    this.setState({ user_tele: e.target.value });
  };

  onChangeUserContactMethod = (e) => {
    this.setState({ user_contact_method: e.target.value });
  };

  onChangeUserAge = (e) => {
    this.setState({ user_age: e.target.value });
  };

  onChangeUserCountry = (e) => {
    this.setState({ user_country: e.target.value });
  };

  onChangeUserIntendedUse = (e) => {
    this.setState({ user_intended_use: e.target.value });
  };

  onChangeUserEducationStatus = (e) => {
    this.setState({ user_education_status: e.target.value });
  };

  onChangeUserEducationLevel = (e) => {
    this.setState({ user_education_level: e.target.value });
  };

  onChangeUserFavoriteSubject = (e) => {
    this.setState({ user_favorite_subject: e.target.value });
  };

  onChangeUserPassword = (e) => {
    this.setState({ user_password: e.target.value });
  };

  onChangeUserProfilePicture = (e) => {
    this.setState({ user_profile_picture: e.target.files[0] });
  };

  onSubmit = (e) => {
    e.preventDefault();

    // Create FormData to handle both text fields and file
    const formData = new FormData();
    formData.append("user_full_name", this.state.user_full_name);
    formData.append("user_username", this.state.user_username);
    formData.append("user_email", this.state.user_email);
    formData.append("user_tele", this.state.user_tele);
    formData.append("user_contact_method", this.state.user_contact_method);
    formData.append("user_age", this.state.user_age);
    formData.append("user_country", this.state.user_country);
    formData.append("user_intended_use", this.state.user_intended_use);
    formData.append("user_education_status", this.state.user_education_status);
    formData.append("user_education_level", this.state.user_education_level);
    formData.append("user_favorite_subject", this.state.user_favorite_subject);
    formData.append("user_password", this.state.user_password);

    // Append profile picture if selected
    if (this.state.user_profile_picture) {
      formData.append("profile_picture", this.state.user_profile_picture);
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
          user_age: "",
          user_country: "",
          user_intended_use: "",
          user_education_status: "",
          user_education_level: "",
          user_favorite_subject: "",
          user_password: "",
          user_profile_picture: null,
        });
      })
      .catch((err) => {
        console.error("Error during user registration:", err);
      });
  };

  render() {
    return (
      <div className="register-container">
        <Header />
        <h2>Create New Account</h2>
        <form className="newUserForm" onSubmit={this.onSubmit}>
          <div className="Column-Container">
            <div className="Column-1">
              <fieldset className="personal-information">
                <legend className="RegisterLegend">Personal Information</legend>
                <label className="RegisterLabel">
                  Full Name
                  <br></br>
                  <input
                    className="RegisterInput"
                    type="text"
                    required
                    value={this.state.user_full_name}
                    onChange={this.onChangeUserFullName}
                  />
                </label>
                <br></br>
                <label className="RegisterLabel">
                  Age
                  <br></br>
                  <input
                    className="RegisterInput"
                    type="number"
                    min="13"
                    max="120"
                    required
                    onChange={this.onChangeUserAge}
                  />
                </label>
                <br></br>
                <label className="RegisterLabel">
                  Country
                  <br></br>
                  <input
                    className="RegisterInput"
                    type="text"
                    required
                    onChange={this.onChangeUserCountry}
                  />
                </label>
                <br></br>
                <label className="RegisterLabel">
                  Intended Use
                  <br></br>
                  <select required onChange={this.onChangeUserIntendedUse}>
                    <option value="Personal">Personal</option>
                    <option value="Business">Business</option>
                    <option value="Educational">Educational</option>
                  </select>
                </label>
              </fieldset>
              <br></br>
              <fieldset className="contact-information">
                <legend className="RegisterLegend">Contact Information</legend>
                <label className="RegisterLabel">
                  Email
                  <br></br>
                  <input
                    className="RegisterInput"
                    type="email"
                    required
                    value={this.state.user_email}
                    onChange={this.onChangeUserEmail}
                  />
                </label>
                <br></br>
                <label className="RegisterLabel">
                  Telephone
                  <br></br>
                  <input
                    className="RegisterInput"
                    type="tel"
                    required
                    value={this.state.user_tele}
                    onChange={this.onChangeUserTele}
                  />
                </label>
                <br></br>
                <label className="RegisterLabel">
                  Preferred Contact Method
                  <br></br>
                  <select required onChange={this.onChangeUserContactMethod}>
                    <option value="Email">Email</option>
                    <option value="Telephone">Telephone</option>
                    <option value="Text">Text</option>
                  </select>
                </label>
                <br></br>
              </fieldset>
            </div>
            <br></br>
            <div className="Column-2">
              <fieldset className="education-information">
                <legend className="RegisterLegend">
                  Education Information
                </legend>
                <label className="RegisterLabel">
                  Education Status
                  <br></br>
                  <select required onChange={this.onChangeUserEducationStatus}>
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Professional">Professional</option>
                  </select>
                </label>
                <br></br>
                <label className="RegisterLabel">
                  Education Level
                  <br></br>
                  <select required onChange={this.onChangeUserEducationLevel}>
                    <option value="High School">High School</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Graduate">Graduate</option>
                    <option value="Doctorate">Doctorate</option>
                  </select>
                </label>
                <br></br>
                <label className="RegisterLabel">
                  Favorite Subject
                  <br></br>
                  <input
                    className="RegisterInput"
                    type="text"
                    required
                    onChange={this.onChangeUserFavoriteSubject}
                  />
                </label>
                <br></br>
                <br></br>
              </fieldset>
              <br></br>
              <fieldset className="account-information">
                <legend className="RegisterLegend">Account Information</legend>
                <label className="RegisterLabel">
                  Username
                  <br></br>
                  <input
                    className="RegisterInput"
                    type="text"
                    required
                    value={this.state.user_username}
                    onChange={this.onChangeUserUsername}
                  />
                </label>
                <br></br>
                <label className="RegisterLabel">
                  Password
                  <br></br>
                  <input
                    className="RegisterInput"
                    type="password"
                    required
                    value={this.state.user_password}
                    onChange={this.onChangeUserPassword}
                  />
                </label>
                <br></br>
                <label className="RegisterLabel">
                  Profile Picture
                  <br></br>
                  <input
                    className="RegisterInput"
                    type="file"
                    accept="image/*"
                    onChange={this.onChangeUserProfilePicture}
                  />
                </label>
                <br></br>
              </fieldset>
            </div>
          </div>
          <br></br>

          <button className="submit" type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}
