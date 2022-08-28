import React, { Component } from "react";
import { StudentContext } from "../data/StudentContext";
import axios from "axios";
export default class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sName: "",
      sDob: "",
      sAdddress: "",
      sMobileNo: "",
    };
    this.sGender = this.sGender.bind(this);
  }
  sGender(event) {
    console.log(event.target.value);
  }
  static contextType = StudentContext;
  submitHandler = async (e) => {
    e.preventDefault();
    const user = this.context;
    let data = {
      name: this.state.sName,
      dateofbirth: this.state.sDob,
      gender: this.state.sGender,
      address: this.state.sAdddress,
      mobileno: this.state.sMobileNo,
    };
    const res = await axios.post("http://localhost:3000/student", data);
    console.log(res);
    window.location.href = "/showstudent";
  };
  render() {
    return (
      <div className="container">
       <h1 className="headline">Student Information</h1>
        <form className="form-group" onSubmit={this.submitHandler}>
          <div className="add">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Student Name"
                value={this.state.sName}
                onChange={(e) => this.setState({ sName: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                placeholder="DOB"
                className="form-control"
                value={this.state.sDob}
                onChange={(e) => this.setState({ sDob: e.target.value })}
              />
            </div>
            <div
              className="form-group"
              onChange={(e) => this.setState({ sGender: e.target.value })}
            >
              <input type="radio" value="Male" name="gender" /> Male
              <input type="radio" value="Female" name="gender" /> Female
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Student Address"
                value={this.state.sAdddress}
                onChange={(e) => this.setState({ sAdddress: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Student Mobile"
                value={this.state.sMobileNo}
                onChange={(e) => this.setState({ sMobileNo: e.target.value })}
              />
            </div>
            <div className="sub">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
AddStudent.contextType = StudentContext;
