import React, { Component } from "react";
import CustomerDataService from "../services/customer.service";

export default class AddCustomer extends Component {
    constructor(props) {
        super(props);
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeHousenumber = this.onChangeHousenumber.bind(this);
        this.onChangeAbout = this.onChangeAbout.bind(this);
        this.saveCustomer = this.saveCustomer.bind(this);
        this.newCustomer = this.newCustomer.bind(this);

        this.state = {
            firstname: "",
            lastname: '',
            email: '',
            phone: '',
            address: '',
            housenumber: 0,
            about: "",
            published: false,

            submitted: false,
        };
    }

    onChangeFirstname(e) {
        this.setState({
            firstname: e.target.value,
        });
    }

    onChangeLastname(e) {
        this.setState({
            lastname: e.target.value,
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value,
        });
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value,
        });
    }

    onChangeHousenumber(e) {
        this.setState({
            housenumber: e.target.value,
        });
    }

    onChangeAbout(e) {
        this.setState({
            about: e.target.value,
        });
    }

    saveCustomer() {
        let data = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
            about: this.state.about,
            housenumber: this.state.housenumber,
            published: false
        };

        CustomerDataService.create(data)
            .then(() => {
                console.log("Created new item successfully!");
                this.setState({
                    submitted: true,
                });
            })
            .catch((e) => {
                console.log(e);
            });
    }

    newCustomer() {
        this.setState({
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            address: '',
            about: '',
            housenumber: 0,
            published: false,

            submitted: false,
        });
    }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newCustomer}>
              Register Another
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="firstname">First name</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                required
                value={this.state.firstname}
                onChange={this.onChangeFirstname}
                name="firstname"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastname">Last name</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                required
                value={this.state.lastname}
                onChange={this.onChangeLastname}
                name="lastname"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                required
                value={this.state.phone}
                onChange={this.onChangePhone}
                name="phone"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Location / Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                required
                value={this.state.address}
                onChange={this.onChangeAddress}
                name="address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="housenumber">Number of person in home</label>
              <input
                type="text"
                className="form-control"
                id="housenumber"
                required
                value={this.state.housenumber}
                onChange={this.onChangeHousenumber}
                name="housenumber"
              />
            </div>

            <div className="form-group">
              <label htmlFor="about">Something about you</label>
              <input
                type="text"
                className="form-control"
                id="about"
                required
                value={this.state.about}
                onChange={this.onChangeAbout}
                name="about"
              />
            </div>

            <button onClick={this.saveCustomer} className="btn btn-success">
              Send
            </button>
          </div>
        )}
      </div>
    );
  }
}
