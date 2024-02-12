import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import './Register.css';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer1 from "./Footer1";
import Header1 from "./Header1";
import { jwtDecode } from "jwt-decode";

const formSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "Name can only contain letters."
    )
    .max(20, "Must be 15 characters or less")
    .required("Required"),
  address: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  dob:Yup.date().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  mobileNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Must be a valid 10 digit phone number")
    .required("Required"),
  project:Yup.string().required("Required"),
  company:Yup.string().required("Required")
});

const initialValues = {
  name: "",
  address: "",
  dob: "",
  email: "",
  mobileNumber:"",
  isActive: true,
  createdBy: 1,
  project:"",
  company:""
};


const Add = () => {
  var navigate=useNavigate();

const handleSubmit = async (values) => {
    const token = localStorage.getItem("token");
    var decoded = jwtDecode(token);
    console.log(decoded);
    // console.log(token.registrationId);
    
   
  console.log(JSON.stringify(values));
  try {
    const response = await axios.post(
      "http://localhost:65061/api/User/AddUser",
      values
      
    );
    console.log(response);
   
  } catch (error) {
    console.error(error);
  }
//   navigate("/");
  
};
const cancel=()=>{
  navigate("/");
}


  return (
    <>
    <div className="h-100">
    <Header1/>
      <div className="container mt-5 d-flex justify-content-center formc w-75 ">
        <div className="width1">
          <Formik
            initialValues={initialValues}
            validationSchema={formSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div>
                <div className="form-group d-flex">
                 
                  <Field
                    className={`form-control m-1 ${
                      touched.name && errors.name ? "is-invalid" : ""
                    }`}
                    name="name"
                    type="text"
                    placeholder="Enter Name"
                  />
                 

                  <ErrorMessage
                    name="name"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
              

                
                <div className="form-group d-flex">
                  <Field
                    className={`form-control m-1 ${
                      touched.address && errors.address ? "is-invalid" : ""
                    }`}
                    name="address"
                    type="text"
                    placeholder="Enter Address"
                  />
                 

                  <ErrorMessage
                    name="address"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group d-flex">
                 
                  <Field
                    className={`form-control m-1 ${
                      touched.dob && errors.dob ? "is-invalid" : ""
                    }`}
                    name="dob"
                    type="date"
                    placeholder="Enter date of birth"
                  />

                  <ErrorMessage
                    name="dob"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                </div>

                <div className="form-group d-flex">
                
                  <Field
                    className={`form-control m-1 ${
                      touched.mobileNumber && errors.mobileNumber
                        ? "is-invalid"
                        : ""
                    }`}
                    name="mobileNumber"
                    type="text"
                    placeholder="Enter Mobile Number"
                  />

                  <ErrorMessage
                    name="mobileNumber"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group d-flex">
                  <Field
                    className={`form-control m-1 ${
                      touched.email && errors.email ? "is-invalid" : ""
                    }`}
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                  />

                  <ErrorMessage
                    name="email"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

                <div className="form-group d-flex">
                  <Field
                    className={`form-control m-1 ${
                      touched.project && errors.project ? "is-invalid" : ""
                    }`}
                    name="project"
                    type="text"
                    placeholder="Enter Project"
                  />

                  <ErrorMessage
                    name="project"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group d-flex">
                  <Field
                    className={`form-control m-1 ${
                      touched.company && errors.company ? "is-invalid" : ""
                    }`}
                    name="company"
                    type="text"
                    placeholder="Enter Company"
                  />

                  <ErrorMessage
                    name="company"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
               

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary mt-3 text-center"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger mt-3 text-center"
                    onClick={cancel}
                  >
                    Cancel
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {/* <Footer1/> */}
      </div>
    </>
  );
};

export default Add;
