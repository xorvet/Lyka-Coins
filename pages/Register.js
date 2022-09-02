import React, { useState, useEffect } from "react";
import Login from "./Login";
import axios from "axios";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();

  const [showRegister, setShowRegister] = useState(false);
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Country, setCountry] = useState("");
  const [Mobile_Number, setMobile_Number] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (Password !== ConfirmPassword) {
      return setMessage("Both Passwords Are Not Same");
    }
    console.log(Name, Email, Country, Mobile_Number, Password);

    axios
      .post("/api/Register", {
        Name,
        Email,
        Country,
        Mobile_Number,
        Password,
      })
      .then((acc) => {
        console.log(acc.data);
        router.reload();
        localStorage.setItem("user", JSON.stringify(acc.data._id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {showRegister ? (
        <Login />
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
                width: "45%",
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
              <h3 className="mb-4">Sign up to Lyka Coin</h3>

              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile Number"
                    onChange={(e) => {
                      setMobile_Number(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </div>

                <div className="text-center mt-3">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="btn btn-secondary"
                  >
                    Register
                  </button>
                </div>
              </form>
              <h6
                onClick={() => setShowRegister(true)}
                style={{ color: "#F8A12D", marginTop: 80, cursor: "pointer" }}
              >
                Already Have Account
              </h6>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
