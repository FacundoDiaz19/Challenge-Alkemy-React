import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../../Styles/Styles.css";
import image from "../../images/batman.png";

function Login() {
  const [success, SetSuccess] = useState(false);

  const Response = (values) => {


    console.log(values);
  };

  return (
      <div className=" container py-5">
        <div className=" row g-0 shadow-lg p-3 mb-5 bg-login rounded d-flex align-items-center">
          <div className="col-lg-5 col-md-5 col-sm-12 col-12">
            <img src={image} class="img-fluid" alt="" />
          </div>
          <div className=" col-lg-7 col-md-7 col-sm-12 col-12 text-center p-3 align-bottom">
            <h1 className="font-h1 fs-1 p-4 mb-4">CHOOSE YOUR HEROES</h1>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validate={(values) => {
                let errores = {};

                if (!values.email) {
                  errores.email = "Please enter a email";
                } else if (
                  !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                    values.email
                  )
                ) {
                  errores.email =
                    "the email can only have letters, numbers, periods, hyphens and underscore";
                }

                if (!values.password) {
                  errores.password = "Please enter a password";
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.password)) {
                  errores.password =
                    "password can only contain letters and spaces";
                }
                return errores;
              }}
              onSubmit={(values, { resetForm }) => {
                resetForm();
                Response(values);
                SetSuccess(true);
                setTimeout(() => {
                  SetSuccess(false);
                }, 5000);
              }}
            >
              {({ errors }) => (
                <Form>
                  <div className="form-floating mb-3">
                    <Field
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      name="email"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Email address</label>
                    <ErrorMessage
                      name="email"
                      component={() => (
                        <div className="badge bg-danger ">{errors.email}</div>
                      )}
                    />
                  </div>
                  <div className="form-floating">
                    <Field
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      name="password"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <ErrorMessage
                    name="password"
                    component={() => (
                      <div className="badge bg-danger ">{errors.password}</div>
                    )}
                  />
                  <div className="form-group">
                    <button className="btn btn-primary form-control mt-4">
                      Send
                    </button>
                  </div>
                  {success ? (
                    <p className="badge bg-success mt-2 p-2">
                      sent form successfully
                    </p>
                  ) : (
                    ""
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
  );
}

export default Login;
