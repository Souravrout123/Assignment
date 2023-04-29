/** @format */

import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate("");

  const onSubmit = (data) => {
    console.log(data);
  };

  async function Redirect() {
    navigate("/details");
  }

  return (
    <div className="container-fluid">
      <div
        style={{
          backgroundColor: "rgb(207 208 216)",
          border: "5px solid gray",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)} style={{ margin: "20px" }}>
          <h1 className="text-left">Personal Details </h1>
          <div className="row d-inline-flex">
            <div className="col col-xl-6 col-md-6 col-xxl-6 col-sm-6 ">
              <div className="form-group" style={{ display: "flex" }}>
                <label htmlFor="name">
                  Name<span className="requs">*</span>
                </label>
                <input
                  // style={{width:"70%"}}
                  className="form-control"
                  id="name"
                  placeholder="Enter Name"
                  type="text"
                  {...register("name", { required: true })}
                />
                {errors.name && <span className="error">Name is required</span>}
              </div>
            </div>
            <div className="col col-xl-3 col-xxl-3 col-md-3 col-sm-3">
              <div className="form-group" style={{ display: "flex" }}>
                <label htmlFor="dob">
                  Date Of Birth/Age<span className="requs">*</span>
                </label>
                <input
                  className="form-control"
                  id="dob"
                  type="text"
                  placeholder="DD/MM/YY or Age in Years"
                  {...register("dob", { required: true })}
                />
                {errors.dob && <span className="error">dob is required</span>}
              </div>
            </div>
            <div className="col col-xl-3 col-xxl-3 col-md-3 col-sm-3">
              <div className="form-group" style={{ display: "flex" }}>
                <label htmlFor="sex">
                  Sex<span className="requs">*</span>
                </label>
                <select
                  className="form-control"
                  id="sex"
                  type="text"
                  {...register("sex", { required: true })}
                >
                  <option value="">Enter Sex</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="transgender">Transgender</option>
                </select>
                {errors.email && <span className="error">Sex is required</span>}
              </div>
            </div>
          </div>
          <div className="row d-inline-flex">
            <div className="col col-xl-6 col-md-6 col-xxl-6 col-sm-6 ">
              <div className="form-group" style={{ display: "flex" }}>
                <label htmlFor="mobile">Mobile No</label>
                <input
                  className="form-control"
                  id="mobile"
                  type="number"
                  maxLength="12"
                  {...register("mobile", { required: true })}
                />
              </div>
            </div>
            <div className="col col-xl-3 col-xxl-3 col-md-3 col-sm-3">
              <div className="form-group" style={{ display: "flex" }}>
                <label htmlFor="govtid">Govt ID</label>
                <select className="form-control" id="govtid" type="text">
                  <option value="">ID Types</option>
                  <option value="male">AAdhar</option>
                  <option value="female">Pan</option>
                  <option value="transgender">DL</option>
                </select>
              </div>
            </div>
            <div className="col col-xl-3 col-xxl-3 col-md-3 col-sm-3">
              <div className="form-group" style={{ display: "flex" }}>
                <input
                  className="form-control"
                  placeholder="Enter Govt ID"
                  id="email"
                  type="email"
                />
              </div>
            </div>
          </div>
          <h1 className="text-left">Contact Details</h1>
          <div className="row d-inline-flex">
            <div className="col col-xl-3 col-xxl-3 col-md-3 col-sm-3">
              <div className="form-group" style={{ display: "flex" }}>
                <label htmlFor="gurdian">Guardian Details</label>
                <select className="form-control" id="gurdian" type="text">
                  <option value="">Enter Label</option>
                  <option value="male">AAdhar</option>
                  <option value="female">Pan</option>
                  <option value="transgender">DL</option>
                </select>
              </div>
            </div>
            <div className="col col-xl-3 col-xxl-3 col-md-3 col-sm-3">
              <div className="form-group" style={{ display: "flex" }}>
                <input
                  className="form-control"
                  placeholder="Enter Guardian Name"
                  id="email"
                  type="text"
                />
              </div>
            </div>
            <div className="col col-xl-3 col-xxl-3 col-md-3 col-sm-3">
              <div className="form-group" style={{ display: "flex" }}>
                <label htmlFor="email">Email</label>
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                />
              </div>
            </div>
            <div className="col col-xl-3 col-xxl-3 col-md-3 col-sm-3">
              <div className="form-group" style={{ display: "flex" }}>
                <label htmlFor="email">Emergency contact number</label>
                <input
                  className="form-control"
                  id=""
                  type="text"
                  placeholder="Enter Emergency No"
                />
              </div>
            </div>
          </div>
          <h1 className="text-left">Address Details</h1>
          <div className="row d-inline-flex">
            <div className="col col-xl-6 col-md-6 col-xxl-6 col-sm-6 ">
              <div className="form-group" style={{ display: "flex" }}>
                <label htmlFor="name">Address</label>
                <input
                  className="form-control"
                  id=""
                  type="text"
                  placeholder="Enter Address"
                />
              </div>
            </div>
            <div className="col col-xl-3 col-xxl-3 col-md-3 col-sm-3">
              <div className="form-group" style={{ display: "flex" }}>
                <label htmlFor="sex">State</label>
                <select className="form-control" id="" type="text">
                  <option value="">Enter state</option>
                  <option value="Odisha"> Odisha</option>
                  <option value="Utterpradesh"> Utterpradesh</option>
                  <option value="Delhi">Delhi</option>
                </select>
              </div>
            </div>
            <div className="col col-xl-3 col-xxl-3 col-md-3 col-sm-3">
              <div className="form-group" style={{ display: "flex" }}>
                <label htmlFor="sex">City</label>
                <select className="form-control" id="email" type="text">
                  {" "}
                  <option value="">Enter City</option>
                  <option value="Noida">Noida</option>
                  <option value="Gaziabad">Gaziabad</option>
                  <option value="gurgaon">Gurgaon</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row d-inline-flex">
            <div className="col col-xl-6 col-md-6 col-xxl-6 col-sm-6 ">
              <div className="form-group" style={{ display: "flex" }}>
                <label htmlFor="name">Country</label>
                <input
                  className="form-control"
                  id=""
                  type="text"
                  placeholder="Enter Country"
                />
              </div>
            </div>
            <div className="col col-xl-3 col-xxl-3 col-md-3 col-sm-3">
              <div className="form-group" style={{ display: "flex" }}>
                <label htmlFor="pin">Pin Code</label>
                <input
                  className="form-control"
                  id=""
                  type="text"
                  placeholder="Enter pincode"
                />
              </div>
            </div>
          </div>
          <h1 className="text-left">Other Details</h1>
          <div className="row d-inline-flex">
            <div className="col col-xl-3 col-xxl-3 col-md-3 col-sm-3">
              <div className="form-group" style={{ display: "flex" }}>
                <label htmlFor="name">Occupation</label>
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Enter Occupation"
                />
              </div>
            </div>
            <div className="col col-xl-3 col-xxl-3 col-md-3 col-sm-3">
              <div className="form-group" style={{ display: "flex" }}>
                <label htmlFor="religion">Religion</label>
                <select className="form-control" id="" type="text">
                  <option value="">Enter Religion</option>

                  <option value="Hindu">Hindu</option>
                  <option value="Sikh">Sikh</option>
                  <option value="Mushlim">Mushlim</option>
                </select>
              </div>
            </div>
            <div className="col col-xl-3 col-xxl-3 col-md-3 col-sm-3">
              <div className="form-group" style={{ display: "flex" }}>
                <label htmlFor="sex">Marital Status</label>
                <select className="form-control" id="" type="text">
                  <option value="">Enter Marital Status</option>
                  <option value="married">married</option>
                  <option value="single">single</option>
                </select>
              </div>
            </div>
            <div className="col col-xl-3 col-xxl-3 col-md-3 col-sm-3">
              <div className="form-group" style={{ display: "flex" }}>
                <label htmlFor="sex">Blood Group</label>
                <select className="form-control" id="" type="text">
                  <option value="">Group</option>
                  <option value="B+">B+</option>
                  <option value="Ab+">AB+</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row d-inline-flex">
            <div className="col col-xl-3 col-xxl-3 col-md-3 col-sm-3">
              <div className="form-group" style={{ display: "flex" }}>
                <label htmlFor="">Nationality</label>
                <select className="form-control" id="" type="text">
                  <option value="india">india</option>
                  <option value="USA">USA</option>
                  <option value="Bangladesh">Bangladesh</option>
                </select>
              </div>
            </div>
            <div className="col col-xl-3 col-xxl-3 col-md-3 col-sm-3">
              <div className="form-group" style={{ display: "flex" }}></div>
            </div>
            <div
              className="col col-xl-6 col-xxl-6 col-md-6 col-sm-6 "
              style={{ display: "flex", columnGap: "3rem" }}
            >
              <button type="reset" className="btn btn-danger">
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-success"
                onClick={Redirect}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
