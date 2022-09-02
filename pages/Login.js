import React, { useState, useEffect } from "react";
import Link from "next/link";
import Register from "./Register";

const Login = () => {
  const [showRegister, setShowRegister] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {showRegister ? (
        <Register />
      ) : (
        <div className="container h-100">
          <div className="d-flex justify-content-md-center align-items-center vh-100">
            <div
              style={{
                backgroundColor: "#2D2E42",
                borderColor: "#27A8B5",
                borderWidth: 2,
                borderStyle: "solid",
                borderRadius: 5,
                width: "40%",
                padding: 40,
              }}
              //   className="p-5"
            >
              <div className="text-center">
                <img
                  src="https://lykacoin.net/images/Logo.png"
                  className="img-fluid logotop"
                  style={{ width: 200, marginBottom: 40 }}
                  alt=""
                />
              </div>
              <h3>Login To Your Lyka Coin</h3>
              <p className="mt-3 mb-1 " style={{ color: "#888888" }}>
                Use your userid as username to sign in.
              </p>
              <p className="" style={{ color: "#888888" }}>
                Don't have and account Signup now!
              </p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="User Id"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>

                <div className="float-right mt-3">
                  <div style={{ display: "flex", gap: 5 }}>
                    <button
                      onClick={() => setShowRegister(true)}
                      type="submit"
                      className="btn btn-light"
                    >
                      Create An Account
                    </button>
                    <button type="submit" className="btn btn-secondary">
                      Login
                    </button>
                  </div>
                </div>
              </form>
              <h6
                style={{ color: "#F8A12D", marginTop: 80, cursor: "pointer" }}
              >
                Forgot Password?
              </h6>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
